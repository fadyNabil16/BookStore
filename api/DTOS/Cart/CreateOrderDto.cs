using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using api.DTOS.Order;
using api.Models;

namespace api.DTOS.Cart
{
    public class CreateOrderDto
    {
        public List<OrderItemDto> OrderItemsDto { get; set; }
    }
}