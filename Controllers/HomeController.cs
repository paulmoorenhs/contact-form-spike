using Microsoft.AspNetCore.Mvc;

namespace nhs.contacts
{
    public class HomeController : Controller
    {

        [HttpGet("/")]
        public IActionResult Index()
        {
            return Content("Home controller - Index");
        }
    }
}
