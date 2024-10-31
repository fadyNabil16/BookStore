using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOS.Cart;
using api.Interfaces;
using api.Mapper.Order;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace api.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly StoreDbContext _context;
        public OrderRepository(StoreDbContext context)
        {
            _context = context;
        }
        public async Task<Order> CreateOrderAsync(CreateOrderDto createOrderDto, User user)
        {

            var order = FromCreatedOrderDtoToOrder.CreateOrder(user.Id);

            foreach (var item in createOrderDto.OrderItemsDto)
            {
                var book = await _context.Books.FindAsync(item.BookId);
                if (book == null)
                {
                    // throw new ArgumentException("Product not Found");
                    Console.WriteLine("======================");
                    Console.WriteLine(item.BookId.ToString());
                    Console.WriteLine("Not Found");
                    Console.WriteLine("======================");
                    continue;
                }

                var orderItem = FromOrderItemDtoToOrderItem.CreateOrderItem(order.OrderId, book.BookId, item.Quantity);

                order.OrderItems.Add(orderItem);
                await _context.OrderItems.AddAsync(orderItem);
            }
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
            return order;
        }
        
    }
}