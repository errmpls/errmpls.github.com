$(window).load( function() {

  $('#mycalendar').monthly({
    mode: 'event',
    xmlUrl: '../calendar.xml'
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
