$( document ).ready( function( $ ) {
    $( '.newTab a' ).click( function( event ){
        event.preventDefault();
        window.open(( this ).href, '_blank');
    });
});
