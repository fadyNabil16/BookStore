using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.DTOS;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly StoreDbContext _context;
        private readonly IBookRepository _bookRepo;
        private readonly UserManager<User> _userManager;
        public BookController(StoreDbContext context, IBookRepository bookRepo, UserManager<User> userManager)
        {
            _context = context;
            _bookRepo = bookRepo;
            _userManager = userManager;
        }

        /* 
         *   Functionality To  Add New Books to Database
         *   Only Admin Can add Books
         */
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddBookToStoreAsync([FromBody] AddBookDto addBookDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            else if (!IsAdmin().Result)
                return Unauthorized("Not an Admin");
            var book = await _bookRepo.AddBookToStore(addBookDto);
            return Ok();

        }

        // Admin can book delete from database
        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> DeleteBook()
        {
            if (!ModelState.IsValid)
                return BadRequest();
            else if (!IsAdmin().Result)
                return Unauthorized("Not an Admin");

            // Work start Here
            return Ok();
        }


        // Private Method
        private async Task<bool> IsAdmin()
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            if (string.IsNullOrEmpty(email))
            {
                return false;
            }
            var user = await _userManager.FindByEmailAsync(email);
            var role = await _userManager.GetRolesAsync(user);
            return role.Contains("Admin");
        }
    }
}