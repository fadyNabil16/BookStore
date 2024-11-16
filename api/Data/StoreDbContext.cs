using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class StoreDbContext : IdentityDbContext<User>
    {
        public StoreDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        // Register Models
        public DbSet<User> Customers { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<CustomersDiscount> CustomersDiscounts { get; set; }
        public DbSet<Discount> Discounts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>(x => x.HasIndex(b => b.PhoneNumber).IsUnique());


            // =================== Register Many to Many Customer and Discount ============ //
            builder.Entity<CustomersDiscount>(x => x.HasKey(CD => new { CD.CustomerId, CD.DiscountId }));

            builder.Entity<CustomersDiscount>().HasOne(c => c.Customer).WithMany(c => c.CustomerDiscount).HasForeignKey(cd => cd.CustomerId);

            builder.Entity<CustomersDiscount>().HasOne(d => d.Discount).WithMany(d => d.CustomersDiscount).HasForeignKey(cd => cd.DiscountId);

            // =================== Register Many to Many Books And Authors ============ //            

            builder.Entity<BooksAuthorPool>(BAP => BAP.HasKey(BAP => new { BAP.AuthorId, BAP.BookId }));

            builder.Entity<BooksAuthorPool>().HasOne(b => b.Book).WithMany(bap => bap.BooksAuthorPool).HasForeignKey(bap => bap.AuthorId);

            builder.Entity<BooksAuthorPool>().HasOne(a => a.Author).WithMany(bap => bap.BooksAuthorPool).HasForeignKey(bap => bap.BookId);


            // ================= Adding Role to USerIdentity =================//
            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = RolesContants.CUSTOMER,
                    NormalizedName= "CUSTOMER"
                },
                new IdentityRole
                {
                    Name= RolesContants.CUSTOMER,
                    NormalizedName= "ADMIN"
                },
                new IdentityRole
                {
                    Name = RolesContants.SHIPPER,
                    NormalizedName = "SHIPPER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }

    }
}