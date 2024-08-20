$( document ).ready( function( $ ) {
    $( '.c-site a' ).click( function( event ){
        event.preventDefault();
        window.open(( this ).href, '_blank');
    });
});
