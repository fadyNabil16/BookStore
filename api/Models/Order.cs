using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Order")]
    public class Order
    {
        [Key, Required]
        [ScaffoldColumn(false), DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        [ForeignKey("User")]
        public string UserId { get; set; }
        // public User User { get; set; }


        public ICollection<OrderItem> OrderItems { get; set; }
    }
}