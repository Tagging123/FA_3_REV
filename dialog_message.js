$('document').ready(function(){
    
    $('#dialog').css({'display':'none'})
    
    const myTimeout = setTimeout(showDialog, 3000);

    function showDialog(){
        $('#dialog').dialog({
            open: function() {
                $(this).closest(".ui-dialog")
                .find(".ui-dialog-titlebar-close")
                .removeClass("ui-dialog-titlebar-close")
                .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick'></span>")
            },

            resizable : false,
            draggable : false,
            modal : true,
    
            position : {
                my : 'top',
                at : 'top-left'
            },
    
            show : {
                effect : 'slide', duration : 1000
            },

            hide : {
                effect : 'slide', duration : 1000
            }
        });

        if (getSignin == 1){
            $('#dialog').dialog('destroy')
        }
        else if (getSignin == 0){
            $('#dialog').dialog('open')
        }
    }

    
})