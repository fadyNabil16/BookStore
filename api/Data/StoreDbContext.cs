using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class StoreDbContext : IdentityDbContext<Customer>
    {
        public StoreDbContext(DbContextOptions dbContextOptions):base(dbContextOptions)
        {
        }

        // Register Models
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<CustomersDiscount> CustomersDiscounts { get; set; }
        public DbSet<Discount> Discounts { get; set; }

         protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<CustomersDiscount>(x => x.HasKey(CD => new {CD.CustomerId, CD.DiscountId}));

            builder.Entity<CustomersDiscount>().HasOne(c => c.Customer).WithMany(c => c.CustomerDiscount).HasForeignKey(cd => cd.CustomerId);

            builder.Entity<CustomersDiscount>().HasOne(d => d.Discount).WithMany(d => d.CustomersDiscount).HasForeignKey(cd => cd.DiscountId);

        }
         
    }
}