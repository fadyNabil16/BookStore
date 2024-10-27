using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    [Table("Customers")]
    public class Customer : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [MaxLength(6, ErrorMessage ="Max postal code length is 6 chars")]
        public string PostalCode { get; set; }
        [MaxLength(5)]
        public string BuildingNo { get; set; }

        [Required]
        public string Street { get; set; }
        [MaxLength(5)]
        public string? FlatNo { get; set; } = "0";
        [MaxLength(30)]
        public string City { get; set; }

        // For Many to ManY Relationship
        public List<CustomersDiscount> CustomerDiscount { get; set; } = new List<CustomersDiscount>();
    }
}