using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class BookQueryObject
    {
        public string ISBN? { get; set; } = null;
        public string Title? { get; set; } = null;
    }
}