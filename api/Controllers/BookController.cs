using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.DTOS;
using api.Helpers;
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
        [Authorize(Roles = RolesContants.ADMIN)]
        public async Task<IActionResult> AddBookToStoreAsync([FromBody] AddBookDto addBookDto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Cant done that");
            var book = await _bookRepo.AddBookToStore(addBookDto);
            return Ok(book);
        }

        // Admin can book delete from database
        [HttpDelete]
        [Authorize(Roles = RolesContants.ADMIN)]
        public async Task<IActionResult> DeleteBook()
        {
            if (!ModelState.IsValid)
                return BadRequest();

            // Work start Here
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetBookSearch([FromQuery] BookQueryObject queryObject)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var book = await FindBookByParamAsync(BookQueryObject queryObject);
            return Ok();
        }
    }
}