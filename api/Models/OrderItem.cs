using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("OrderItem")]
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int Quantity { get; set; }

        // One Order to Many OrderItem
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public Order Order { get; set; }


        public Book Book { get; set; }  
    }
}