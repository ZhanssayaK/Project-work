jQuery( "#fast" ).click(function() {
  jQuery( ".fast" ).first().show( "fast", function showNext() {
    jQuery( this ).next( ".fast" ).show( "fast", showNext );
  });
});

jQuery( "#slow" ).click(function() {
  jQuery( ".slow" ).first().show( "slow", function showNext() {
    jQuery( this ).next( "div" ).show( "slow", showNext );
  });
}); 
 
jQuery( "#hidr" ).click(function() {
  jQuery( "div" ).hide( 1000 );
});

function click_expand (theClass){  
  jQuery("."+theClass).show("fast")
  }
