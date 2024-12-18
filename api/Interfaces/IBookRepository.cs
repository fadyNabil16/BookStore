using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOS;
using api.Helpers;
using api.Models;
using Microsoft.AspNetCore.Authorization;

namespace api.Interfaces
{
    public interface IBookRepository
    {
        Task<Book> AddBookToStore(AddBookDto addBookDto);
        Task<IEnumerable<Book>?> FindBookByParamAsync(BookQueryObject queryObject);
        Task<Book> UpdateBookInStore();
        Task<bool?> RemoveBookAsync(int? bookId, bool autoForRunout = false);

    }
}