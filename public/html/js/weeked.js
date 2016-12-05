

$(document).ready(function (){
  $('.button-collapse').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
  $('.slider').slider({
    indicators: false,
    interval: 5000
  });
  $('.collapsible').collapsible();
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.carousel').carousel();
});





