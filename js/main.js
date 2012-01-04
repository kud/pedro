/* Move */
var move = 5;

/**
 * Movement
 */
function changeStep(elmt)
{
    if(elmt.hasClass('step1'))
    {
        elmt.removeClass('step1');
        elmt.addClass('step2');
    }
    else
    {
        elmt.removeClass('step2');
        elmt.addClass('step1');
    }
}

/**
 * Here we go
 */
jQuery(document).ready(function()
    {
        var pedro = jQuery('.pedro');

        //Up!
        shortcut.add("z",function()
        {
            pedro.css('top', parseInt(pedro.css('top')) - move);
            changeStep(pedro);
            pedro.addClass('top');
            pedro.removeClass('left right bottom');
        });
        
        //Left!
        shortcut.add("q",function()
        {
            pedro.css('left', parseInt(pedro.css('left')) - move);
            changeStep(pedro);
            pedro.addClass('left');
            pedro.removeClass('top right bottom');
        });
        
        //Down!
        shortcut.add("s",function()
        {
            pedro.css('top', parseInt(pedro.css('top')) + move);
            changeStep(pedro);
            pedro.addClass('bottom');
            pedro.removeClass('left right top');
        });
        
        //Right!
        shortcut.add("d",function()
        {
            pedro.css('left', parseInt(pedro.css('left')) + move);
            changeStep(pedro);
            pedro.addClass('right');
            pedro.removeClass('left top bottom');
        });
    }
);