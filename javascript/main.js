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

    $.ajax('//api.speg.com/commits/', {success: function(data){
        //console.log(data);    
        var placement, html;
        html = '';
        placement = function(index, value) {
            html = '<a href="' + value.url + '"><li>' + value.title + '</li></a>' + html;
        };
        $.each(data, placement);
        $('div.commits>ul').append(html);
    }});
});
