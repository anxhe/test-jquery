
$(document).ready(function(){
    $('#menu li:first-child').addClass("selected");
    $('.container article:nth-child(2)').addClass("middle");
    $('.list-item:nth-child(even)').addClass("highlighted");
    $('.list-item:last-child').css({border: "1px solid #eee"});

    $('input').on('focus', function(){
      $(this).css({border: 'solid 2px yellow'});
    });
    
    $('input').on('focusout', function(){
      $(this).css({border: 'solid 2px #eee'});
    });
});
