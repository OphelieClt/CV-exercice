$(document).ready(function() {
   $('div#red,#blue,#yellow,#green').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   
   $('div#red').mouseleave(function() {
       
       if ($(this).is(":visible")) {
       $(this).animate({
           height: '-=10px'
       }); }
   }); 
   $('div#red,#blue,#yellow,#green').click(function() {
       $(this).toggle(1000);
   });
   
   /* $('div#red').click(function() {
       $(this).css("visibility","hidden");
   $(this).hide(1000);});*/
});