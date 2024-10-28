using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Discounts")]
    public class Discount
    {
        [Key]
        [Required]
        public int DiscountId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public double Value { get; set; }

        public List<CustomersDiscount> CustomersDiscount { get; set; } = new List<CustomersDiscount>();

    }
}