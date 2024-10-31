using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOS;
using api.Models;

namespace api.Mapper.Books
{
    public static class BookMapper
    {
        public static Book ToCreateBook(this AddBookDto addBookDto)
        {
            return new Book
            {
                ISBN = addBookDto.ISBN,
                Edition = addBookDto.Edition,
                AvailableQuantity = addBookDto.AvailableQuantity,
                price = addBookDto.price,
                PublicationDate = addBookDto.PublicationDate,
                Title = addBookDto.Title,
                PhotoUri = addBookDto.PhotoUri
            };
        }
    }
}