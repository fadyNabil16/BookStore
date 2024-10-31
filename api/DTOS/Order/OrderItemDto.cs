using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.DTOS.Order
{
    public class OrderItemDto
    {
        public int Quantity { get; set; }
        public int BookId { get; set; }
    }
}