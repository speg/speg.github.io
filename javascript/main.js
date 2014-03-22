$(function(){
    
    $.ajax('//api.speg.com/tweets/', {success: function(data){
        //console.log(data);    
        var placement, html;
        html = '';
        placement = function(index, value) {
            html += '<li><a href="https://twitter.com/speg/status/' + value.id_str;
            html += '">' + value.text + '</a></li>';
        };
        $.each(data, placement);
        $('div.tweets>ul').append(html);
    }});
});
