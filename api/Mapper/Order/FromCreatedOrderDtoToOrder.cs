using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Mapper.Order
{
    public static class FromCreatedOrderDtoToOrder
    {
        public static Models.Order CreateOrder(string userId)
        {
            return new Models.Order
            {
                OrderDate = DateTime.Now,
                OrderItems = new List<OrderItem>(),
                UserId = userId.ToString()
            };
        }
    }
}