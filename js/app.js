window.addEventListener( 'scroll', function( event ) {
  var navBar = document.getElementsByTagName( 'nav' )[ 0 ];

  if( window.pageYOffset > 0 ) {
    navBar.classList.add( 'overlay' );
  } else {
    navBar.classList.remove( 'overlay' );
  }

  console.log(window.pageYOffset);
});