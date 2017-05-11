$(window).load( function() {

  var inputs = document.querySelectorAll( '.art-upload' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});


  $('#mycalendar').monthly({
    mode: 'event',
    xmlUrl: '../events.xml'
  });

  // $('#mycalendar2').monthly({
  //   mode: 'picker',
  //   target: '#mytarget',
  //   setWidth: '250px',
  //   startHidden: true,
  //   showTrigger: '#mytarget',
  //   stylePast: true,
  //   disablePast: true
  // });

switch(window.location.protocol) {
case 'http:':
case 'https:':
// running on a server, should be good.
break;
case 'file:':
alert('Just a heads-up, events will not work when run locally.');
}


var accordionsMenu = $('.cd-accordion-menu');

if( accordionsMenu.length > 0 ) {

  accordionsMenu.each(function(){
    var accordion = $(this);
    //detect change in the input[type="checkbox"] value
    accordion.on('change', 'input[type="checkbox"]', function(){
      var checkbox = $(this);
      console.log(checkbox.prop('checked'));
      ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
    });
  });
}



});
