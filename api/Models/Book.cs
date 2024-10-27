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
        public int BookId { get; set; }
        [Required]
        public string ISBN { get; set; }

        [Required]
        public string Title { get; set; }

        public DateTime? PublicationDate { get; set; } = null;

        public int? Edition { get; set; } = null; 
        [Required]
        [Range(0,200)]
        public int AvailableQuantity { get; set; }
        [Required]
        public double price { get; set; }


        // Foreign Keys Here
    }
}