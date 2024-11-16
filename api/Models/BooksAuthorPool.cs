using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    // may be there is a book have many authors two or more
    // and one author have more than one book
    [Table("BookAuthorPool")]
    public class BooksAuthorPool
    {

        public int BookId { get; set; }
        public int AuthorId { get; set; }

        public Author Author { get; set; }

        public Book Book { get; set; }
    }
}