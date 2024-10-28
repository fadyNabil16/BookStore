using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOS.User;
using api.Interfaces;
using api.Models;
// using Microsoft.AspNetCore.Diagnostics;
// using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly StoreDbContext _context;
        private readonly UserManager<User> _userManager;
        private readonly ITockenServices _tokenServices;
        private readonly SignInManager<User> _signInManager;
        public UserController(StoreDbContext context, UserManager<User> userManager,
            ITockenServices tokenServices, SignInManager<User> signInManager
        )
        {
            _context = context;
            _userManager = userManager;
            _tokenServices = tokenServices;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto registerUserDto)
        {
            var _registerBefore = await _userManager.Users.FirstOrDefaultAsync(u => u.Email == registerUserDto.Email);
            if(!(_registerBefore == null))
            {
                // Already signed up before
                return BadRequest("User Already Register");
            }
            User _user = new User
            {
                Email = registerUserDto.Email,
                UserName = registerUserDto.UserName,
                FirstName = registerUserDto.FirstName.ToLower(),
                LastName =  registerUserDto.LastName.ToLower(),
                PhoneNumber = registerUserDto.Phone,
                
                City = "cairo"
            };
            var createduser = await _userManager.CreateAsync(_user, registerUserDto.Password);

            if(!createduser.Succeeded)
                return StatusCode(500, createduser.Errors);
            
            var roleresult = await _userManager.AddToRoleAsync(_user, registerUserDto.IsAdmin ? "Admin" : "Customer");
            if(!roleresult.Succeeded)
                return StatusCode(500, "step three");
            
            var Token = _tokenServices.CreateToken(_user);
            
            return Ok(
                new DataUserDto 
                {
                    Token = Token,
                    UserName = _user.UserName
                }
            );
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto loginUserDto)
        {
            var result = await _userManager.Users.FirstOrDefaultAsync(u => u.Email == loginUserDto.Email);
            if(result == null)
                return BadRequest("Register First!");
            
            var loginResult = await _signInManager.CheckPasswordSignInAsync(result, loginUserDto.password, false);
            if (!loginResult.Succeeded) return Unauthorized("Username not found and/or password incorrect");

            return Ok(
                new DataUserDto
                {
                    UserName = result.UserName,
                    Token = _tokenServices.CreateToken(result)
                }
            );
        }


        
    }
}