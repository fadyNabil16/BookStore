using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace api.Models
{
    [Table("Books")]
    public class Book
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }
        [Required]
        public string ISBN { get; set; }

        [Required]
        public string Title { get; set; }

        public DateTime? PublicationDate { get; set; } = null;

        public int? Edition { get; set; } = null;
        [Required]
        [Range(0, 200)]
        public int AvailableQuantity { get; set; }
        [Required]
        public double price { get; set; }

        public string? PhotoUri { get; set; } = null;

        // Many to Many relation with Author
        public List<BooksAuthorPool> BooksAuthorPool { get; set; } = new List<BooksAuthorPool>();

        // One to One with Item
        // public ICollection<OrderItem> OrderItem { get; set; }
    }
}