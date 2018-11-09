using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace nhs.contacts
{

    public class Startup
    {
        
        public void ConfigureServices(IServiceCollection services)
        {
            // Configure dependency injection
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // Configure request pipeline middleware

            // Note - no routes have been setup because the project
            //        will use attribute based routing.

            app.UseStaticFiles();
            app.UseStaticFolder();
            app.UseMvc();

        }
    }


    public static class AppExtensions
    {

        public static void UseStaticFolder(this IApplicationBuilder app)
        {

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"static")
                ),
                RequestPath = new PathString("/static")
            });
        }

    }

}
