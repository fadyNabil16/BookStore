using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOS;
using api.Interfaces;
using api.Models;

namespace api.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly StoreDbContext _context;
        public BookRepository(StoreDbContext context)
        {
            _context = context;
        }
        public async Task<Book> AddBookToStore(AddBookDto addBookDto)
        {
            var book = new Book
            {
                ISBN = addBookDto.ISBN,
                Edition = addBookDto.Edition,
                AvailableQuantity = addBookDto.AvailableQuantity,
                price = addBookDto.price,
                PublicationDate = addBookDto.PublicationDate,
                Title = addBookDto.Title,
                PhotoUri = addBookDto.PhotoUri
            };
            try
            {
                await _context.Books.AddAsync(book);
                await _context.SaveChangesAsync();
                return book;
            }
            catch (System.Exception e)
            {
                throw;   
            }
            
        }
    }
}