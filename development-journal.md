# Development Journal

- NHS digital standards feedback
- NHS-frontend feedback
- Architecture Decision Records
- To be confirmed
- Development notes

## NHS digital standards feedback

. Could not find a section in the standards manual where the components 
were documented.  It think even if the how to apply them is supposed 
to be in the frontend documentation it would be a good idea to 
document what each components purpose is and examples of when they 
should be used.  This holds for each component in nhsuk-frontend 
including the forms 

. Add a box to the start page that takes you to a page that tells you
what should be on every page. E.g.

- Header
  - Search component
  - Site navigation
- Analytics ( What/Why and risks )
- GDPR consent
- banner
- Main content
- Footer 

An explanation of the possible variances and scenarios of when you
should use each variance would be useful.

NOTE - This should probably be an nhs.uk standards manual as the 
standards and nhs-frontend are intended to be more generally 
applicable to any NHS site.  We should have a standards manual
for nhs.uk that document specific stuff for anything that falls
under that banner.  Use the standards dudes template as it
is good.  In reality each NHS digital component should probably
have one it would help when trowing up new projects.  It could
included more technical stuff as well like repositories and
tools.  Probably worth mentioning to Jacob as he has 
interests in this area.  Sadly probably should be a wagtail
thing as it is essentially content, not sure on that as
it is quite technical and you would think that given our
stated aim we should be quite good at developing web type
stuff :)

## NHS-frontend feedback

. Had some issues with the components in 
nhsuk-fronten-0.1.1.zip on a windows machine.

. We should probably create a razor component
library for the front end components. Note 
I have not done this using .net core but 
see this [Creating razor component libraries ](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/ui-class?view=aspnetcore-2.1&tabs=netcore-cli)


## Architecture Decision Records

- Architecture Decisions Records
- Documentation
- To be confirmed


This is slight abuse of "Architecture Decision Records" as I am
probably documenting more than you should in them and they 
each decision should be stored in a single file rather than 
as a big list here.  May migrate for the main project.

[Architecture Decision Records](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

1. NHS Header

__1. NHS Header__

__Context__ 

There are four different headers in the frontend library so
a decision needs to be made on which is the correct one to
use for the contact forms.  It is worth identifying 
whether different headers are needed for different forms
as that would affect the technical implementation

__Decision__

The header will include the search component and the 
navigation headers.

__Status:__ Decided

__Consequences__

As the header included the navigation headers we will
have to make an api call to get all the navigation 
links that should be displayed.

## To be confirmed

. Stories 

Probably one per form as there is not a great deal of needed for 
each field
Should have the following:- Functionality 
- Accessibility  ( Talk to Karl or Mike about what may be needed )
- Security       ( Possible abuse case we need to worry about )
- Performance    ( Expected number of hits )


. What should the site header included?
  - Who is responsible, it is a site wide thing?
  - Are the headers the same on each form?

## Development notes

- Talk with Mike about the menu button html

- Layout injection:
    - Home url from environment variable ( Will need to change per environment )
    - Search url will need to come from environment variable if adding search component
    - Header url will need to come from an environment variable.

- Model
    - Page title
