using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Mapper.Order
{
    public static class FromOrderItemDtoToOrderItem
    {
        public static OrderItem CreateOrderItem(int orderId, int BookId, int Quantity)
        {
            return new OrderItem
            {
                OrderId = orderId,
                BookId = BookId,
                Quantity = Quantity,
            };
        }
    }
}