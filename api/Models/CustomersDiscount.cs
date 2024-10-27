using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("CustomersDiscount")]
    public class CustomersDiscount
    {
        public string CustomerId { get; set; }

        public int DiscountId { get; set; }

        public Customer Customer { get; set; }

        public Discount Discount { get; set; }

    }
}