using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOS
{
    public class AddBookDto
    {
        [Required]
        [MaxLength(20)]
        public string ISBN { get; set; }

        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        [DisplayFormat(ApplyFormatInEditMode =true, DataFormatString ="{dd/MM/yyyy}")]
        public DateTime? PublicationDate { get; set; } = null;
        [Range(1,50)]
        public int? Edition { get; set; } = null; 
        [Required]
        [Range(0,200)]
        public int AvailableQuantity { get; set; }
        [Required]
        public double price { get; set; }

        public string? PhotoUri { get; set; } = null;
    }
}