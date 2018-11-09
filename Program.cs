using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;

namespace nhs.contacts
{

    public class Program
    {
        public static void Main(string[] args)
        {

            Console.WriteLine( Directory.GetCurrentDirectory() );

            CreateWebHostBuilder(args)
                .Build()
                .Run()
                ; 
        }

        // The manual configuration is deliberate
        // as I prefer to have it explicit in the
        // code how the Host is configured.
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) 
            => new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                ;
    }

}
