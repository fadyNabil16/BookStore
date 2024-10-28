using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOS.User
{
    public class LoginUserDto
    {  
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required, MaxLength(50), MinLength(5)]
        public string password { get; set; }
    }
}