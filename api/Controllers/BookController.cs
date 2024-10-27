using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOS;
using api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly StoreDbContext _context;
        private readonly IBookRepository _bookRepo;
        public BookController(StoreDbContext context, IBookRepository bookRepo)
        {
            _context = context;
            _bookRepo = bookRepo;
        }

        // [HttpPost]
        // [Authorize]
        // public async Task<IActionResult> AddBookToStoreAsync([FromBody] AddBookDto addBookDto)
        // {
        //     if(!ModelState.IsValid)
        //         return BadRequest();
            
        // }
    }
}