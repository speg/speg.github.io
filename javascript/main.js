$(function(){
    
    $.ajax('//api.speg.com/tweets/', {success: function(data){
        //console.log(data);    
        var placement, html;
        html = '';
        placement = function(index, value) {
            html = '<a href="https://twitter.com/speg/status/' + value.id_str + '"><li>' + value.text + '</li></a>' + html;
        };
        $.each(data, placement);
        $('div.tweets>ul').append(html);
    }});
});
