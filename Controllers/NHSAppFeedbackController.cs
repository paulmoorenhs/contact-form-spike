using Microsoft.AspNetCore.Mvc;

namespace nhs.contacts
{

    public class NHSAppFeedbackController : Controller
    {

        [HttpGet("/nhs-app-feedback")]
        public IActionResult Index()
        {
            return View();
        }

    }

}
