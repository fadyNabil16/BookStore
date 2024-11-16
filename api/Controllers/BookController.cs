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
using Microsoft.EntityFrameworkCore;

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

        [HttpGet("search")]
        public async Task<IActionResult> SearchBook([FromQuery] BookQueryObject queryObject)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var bookList = await _bookRepo.FindBookByParamAsync(queryObject);
            if (bookList.Any() && bookList != null)
            {
                return Ok(bookList);
            }
            else
            {
                return BadRequest();
            }
        }

        // Admin can book delete from database
        [HttpDelete]
        [Route("{id:int}")]
        [Authorize(Roles = RolesContants.ADMIN)]
        public async Task<IActionResult> RemoveBook([FromRoute] int? id, bool runout, int? idFromRunOut)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            bool? book = null;
            if (id != null)
            {
                book = await _bookRepo.RemoveBookAsync(id);
            }
            else
            {
                book = await _bookRepo.RemoveBookAsync(idFromRunOut);
            }
            if (book == null) { return NotFound(); }
            return NoContent();
        }

    }
}