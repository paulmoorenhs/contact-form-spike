//(function(){

/* 

  (todo) comment
         N. Explain why the functions are needed. 
  (todo) refine the js make it more functional.  
  (todo) make the js more robust.
         Q. can you unit test Clojures?

   Note - I built this code without having a 
          proper model  in mind :) which is why
          it is such a mess.

          Before starting refining, and making
          it all more robust clarify the model .

*/

// General helper function
var forEach = function( fn, arr ) {

    for( var i=0; i < arr.length; i++ )
    {
        if( arr[ i ] )
        {
            fn( arr[ i ] );
        }
    }
}

var filter = function( fn, arr ) {
    var result = []; 

    for( var i=0; i < arr.length; i++ )
    {
        if( arr[ i ] && fn( arr[ i ] ) ) 
        {
            result.push( arr[ i ] );
        }
    }
    return result;
}

var any = function( fn, arr ) {
    return filter( fn, arr ).length > 0;
}
 
var all = function( fn, arr ) {
    return filter( fn, arr ).length === arr.length
}

var hookEvent = ( function() {

    // IE8 does not support the addEventListner

    // https://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent

    if( document.addEventListener )
    {
        return function( element, event, fn ) {
            element.addEventListener( event, fn, false );
        }
    }
    else if( document.attachEvent )
    {
        return function( element, event, fn) {
            element[ "e"+event+fn ] = fn;
            element[ event+fn ] = function() { element[ "e"+event+fn ]( window.event );}
            element.attachEvent( "on"+event, element[ event+fn ] );
        }
    }
    else
    {
        console.log( "Unsupported browser - We can not hook the events needed for the site to work." );

        return function( element, event, fn ) {
            // Do nothing in this case.
        }
    }

})();


function hasClass( el, className )
{
    return el.classList
         ? el.classList.contains( className )
         : el.className.indexOf( className ) >= 0 ;   
}

function addClass( el, className )
{
    if ( el.classList )
    {
        el.classList.add( className );
    }
    else if( !hasClass( el, className ) )
    {
        el.className += " " + className;
    }
}

function removeClass( el, className )
{
    if( el.classList )
    {
        el.classList.remove( className );
    }
    else
    {
        el.className.replace( className, '' );
    }
}


// Handle conditional inputs for select elements.

var hideConditionalInputClassName = 'nhsuk-option__conditional--hidden';

var getConditionalInput = function( conditionalInputName )
{
    return document.querySelector('[data-conditional-input-for="' + conditionalInputName + '"]');
}

// hideConditionalInput 
//
// Will hide an input that has been defined as a conditional input.
//
// Arguments:
//  - conditionaInputName, the name of the input to hide. The value
//                         is matched against the vlaue in the
//                         data-conditional-input-for attributer on
//                         the inputs.
var hideConditionalInput = function( conditionalInputName )
{
    addClass( getConditionalInput( conditionalInputName ),  hideConditionalInputClassName );
} 

// showConditionalInput 
//
// Will show an input that has been defined as a conditional input.
//
// Arguments:
//  - conditionaInputName, the name of the input to hide. The value
//                         is matched against the vlaue in the
//                         data-conditional-input-for attributer on
//                         the inputs.
var showConditionalInput = function( conditionalInputName ) {
    removeClass( getConditionalInput( conditionalInputName ),  hideConditionalInputClassName );
}

var conditionalInputAttributeName = 'data-conditional-input';

var hasConditionalInput = function(option) {
    return option.hasAttribute( conditionalInputAttributeName ); 
}

var hideOptionsConditionalInput = function( option ) {
    hideConditionalInput( option.getAttribute( conditionalInputAttributeName ));
}

// getOptionsWithConditionalInputs  
//
// return option elements that have a conditional input.  A 
// conditional input is defined adding the 
// data-conditional-input attribute to the option element
// the attribute value is the value of assgined to the
// data-conditional-input-for attribute of the input 
// used to capture the conditional input.
//
// e.g.  <option value="other" data-conditional-input="about_other">Other</option>
//
// Arguments:
//  - options, is an array of select option elements.
var getOptionsWithConditionalInputs = function( options ) 
{
    return filter( function( o ) { return !o.selected && hasConditionalInput( o ) }, options );
}


// showSelectedOptionConditionalInput 
//
// As stated in the function name this function will 
// show an the selected option optional input if 
// it has one.
//
// Arguments:
//  - select, the select control that should be 
var showSelectedOptionConditionalInput = function( select ) {
    
    var selectedOption       = select.options[ select.selectedIndex ];
    var conditionalInputName = selectedOption.getAttribute( conditionalInputAttributeName );
     
    if( conditionalInputName )
    {
       showConditionalInput( conditionalInputName ); 
    } 
}


// setVisibilityOfConditionalFields 
//
// Event handler that show or hide the options conditional input 
// fields based on the which option has been selected
//
// Arguments:
//  - e, the event context. 
var setVisibilityOfConditionalFields = function( e ) {

    forEach( hideOptionsConditionalInput, getOptionsWithConditionalInputs( e.target.options ) );
    /* (todo) change this so that we select option */
    showSelectedOptionConditionalInput( e.target );
}


var getSelectsThatHaveConditionalFields = function() {

    return filter( hasOptionWithConditionalInput, document.getElementsByTagName("select") )
}

var hasOptionWithConditionalInput = function( select ) {

    return any( hasConditionalInput, select.options ); 
} 


var hookSetVisibilityOfConditionalFieldOnChange = function( select ) {
    console.log( select );

    hookEvent( select, 'change', setVisibilityOfConditionalFields );
}


/* Sigh, jQuery that is used by the front end library at the moment seams to be 
   hijacking the load event.  This means 
*/

hookEvent( window, 'load', function() {

    console.log( 'window load' ); 

    forEach( hookSetVisibilityOfConditionalFieldOnChange, getSelectsThatHaveConditionalFields() );
});


//})();
