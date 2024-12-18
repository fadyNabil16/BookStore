using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOS;
using api.Helpers;
using api.Interfaces;
using api.Mapper.Books;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

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
            var book = BookMapper.ToCreateBook(addBookDto);
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

        public async Task<IEnumerable<Book>?> FindBookByParamAsync(BookQueryObject queryObject)
        {

            try
            {
                IQueryable<Book> books = _context.Books.AsQueryable();
                if (!string.IsNullOrWhiteSpace(queryObject.ISBN) || !string.IsNullOrWhiteSpace(queryObject.Title))
                {
                    books = books.Where(b => b.ISBN.Equals(queryObject.ISBN) || b.Title.ToLower().Contains(queryObject.Title.ToLower()));

                    return await books.ToListAsync();
                }
                return null;
            }
            catch (System.Exception)
            {

                throw;
            }

        }

        // If I remove an Book from sore it will remove from all orders if admin remove
        // if automatic runs out it will not deleted in orders because it is delete for finish in store
        public async Task<bool?> RemoveBookAsync(int? bookId, bool autoForRunout = false)
        {
            var book = await _context.Books.FirstOrDefaultAsync(b => b.BookId == bookId);
            if (book == null) return null;
            //Admin Remove it from store
            if (!autoForRunout)
            {
                var orderItems = _context.OrderItems.AsQueryable();
                var bookOrders = orderItems.Where(oi => oi.BookId == book.BookId).ToList();
                foreach (var bookOrder in bookOrders)
                {
                    _context.OrderItems.Remove(bookOrder);
                }
            }
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
            return true;
        }



        public Task<Book> UpdateBookInStore()
        {
            throw new NotImplementedException();
        }
    }
}