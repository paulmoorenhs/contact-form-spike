# Hosting on Azure

# Prerequisites

- An azure acount
- Azurecli ( https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest )
  - __Note__ using azurecli rather than the powershell tools because there are version of 
    azurecli for Windows, Mac, and Linux.
 
## Steps

- login                         - ```az login```
- Create azure resources
  - Deployment user             - ```az webapp deployment user set --user-name <username> --password <password>```
  - Resource group              - ```az group create --name myResourceGroup --location "West Europe"```
  - Service Plan                - ```az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux```
  - Web app                     - ```az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name <app_name> --runtime "dotnetcore|2.0" --deployment-local-git``` 

## Resouces

- deployment            : paul.moore13@nhs.net ( M12 )  not remove these before commiting document

- resource group        : nhs-spike-rg-contact-us
- service pans          : nhs-spike-sp-contact-us
- web app               : nhs-spike-wa-contact-us
- https://paul.moore13@nhs.net@nhs-spike-wa-contact-us.scm.azurewebsites.net/nhs-spike-wa-contact-us.git

Q. What naming convension should be used for things?
  - Note probably need to understand the different environments
    and how we deploy to them to get a reasonably good/usable
    system.
    For this as it is only going to be deployed once
    just picked one and got on with it.

Q. What is the deployment user?


## Glossary

 Term                     |  Description
--------------------------|-----------------------------------------------------------------------------------------------
 _Azure AD_               | ??
 _User_                   | An azure AD user.
 _Deployment User_        | An azure AD user with permission to deploy to ???
 _Resource Group_         | A logical container representing a deployment groupi for application components.
 _Deployment Group_       | One or more artifact that should be deployed together.  
 _Azure App Service Plan_ | Computational resources.

## References

- [Microsoft quickstart](https://docs.microsoft.com/en-us/azure/app-service/containers/quickstart-dotnetcore)
- [Azure Service Plan](https://samcogan.com/what-is-an-azure-app-service-plan-and-what-does-it-do/)
- [Azure blog - Sam Cogan](https://samcogan.com/)
