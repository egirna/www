$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');

    }
});
$(document).ready(function() {
    var url = window.location;
    var element = $('.nav-link').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0; }).addClass('active');
    if (element.is('li')) {
        element.addClass('active').parent().parent('li').addClass('active')
    }
});