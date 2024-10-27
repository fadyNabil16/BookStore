using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOS.User
{
    public class DataUserDto
    {
        [Required]
        public string Token { get; set; }
        public string UserName { get; set; }
    }
}