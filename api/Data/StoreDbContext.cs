using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class StoreDbContext : IdentityDbContext<User>
    {
        public StoreDbContext(DbContextOptions dbContextOptions):base(dbContextOptions)
        {
        }

        // Register Models
        public DbSet<User> Customers { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<CustomersDiscount> CustomersDiscounts { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        
         protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().HasIndex(b => b.PhoneNumber).IsUnique();

            builder.Entity<CustomersDiscount>(x => x.HasKey(CD => new {CD.CustomerId, CD.DiscountId}));

            builder.Entity<CustomersDiscount>().HasOne(c => c.Customer).WithMany(c => c.CustomerDiscount).HasForeignKey(cd => cd.CustomerId);

            builder.Entity<CustomersDiscount>().HasOne(d => d.Discount).WithMany(d => d.CustomersDiscount).HasForeignKey(cd => cd.DiscountId);

            // ++++++++++Adding Role to USerIdentity++++++++++++++++//
            List<IdentityRole> roles = new List<IdentityRole> 
            {
                new IdentityRole 
                {
                    Name = "Customer",
                    NormalizedName= "CUSTOMER"
                },
                new IdentityRole 
                {
                    Name= "Admin",
                    NormalizedName= "ADMIN"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
         
    }
}