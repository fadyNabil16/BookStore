using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Author")]
    public class Author
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AuthorId {get; set;}
        public string FullName { get; set; } = string.Empty;

        public string Info { get; set; } = string.Empty;

        public List<BooksAuthorPool> BooksAuthorPool { get; set; } = new List<BooksAuthorPool>();

    }
}