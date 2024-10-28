using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    [Table("Users")]
    public class User : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PostalCode { get; set; } = string.Empty;
        public string BuildingNo { get; set; } = string.Empty;

        public string Street { get; set; } = string.Empty;
        public string FlatNo { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;

        // For Many to ManY Relationship
        public List<CustomersDiscount> CustomerDiscount { get; set; } = new List<CustomersDiscount>();

    }
}