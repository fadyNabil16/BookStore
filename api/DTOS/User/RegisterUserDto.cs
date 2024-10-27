using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOS.User
{
    public class RegisterUserDto
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;
        [Required, MaxLength(20)]
        public string LastName { get; set; }= string.Empty;
        
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required, MinLength(5), MaxLength(50)]
        public string Password { get; set; }
        [Required]
        public string UserName { get; set; } = string.Empty;

        [MaxLength(6, ErrorMessage ="Max postal code length is 6 chars")]
        public string PostalCode { get; set; } = string.Empty;
        [MaxLength(5)]
        public string BuildingNo { get; set; } = "0";

        [Required, MaxLength(60)]
        public string Street { get; set; }= string.Empty;
        [MaxLength(5)]
        public string FlatNo { get; set; } = "0";
        [MaxLength(30)]
        public string City { get; set; } = "Cairo";
        [Required, MaxLength(11), MinLength(10)]
        public string Phone { get; set; } = string.Empty;
        public bool IsAdmin { get; set; } = false;
    }
}