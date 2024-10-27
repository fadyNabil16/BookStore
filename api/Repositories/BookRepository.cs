using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;

namespace api.Repositories
{
    public class BookRepository : IBookRepository
    {
        public Task<Book> AddBookToStore()
        {
            throw new NotImplementedException();
        }
    }
}