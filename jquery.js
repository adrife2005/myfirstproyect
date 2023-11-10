$(document).ready(function(){

// load
    // $('#result').load('jquery.html', function(responseTxt, statusTxt, xhr){
    //     if (statusTxt == 'success'){
    //         alert('it went fine');
    //     } else if (statusTxt == 'error'){
    //         alert('Error: '+xhr.statusText)
    //     }
    // });

// Get
    // $.get('jquery.html', function(data){
    //     $('#result').html(data);
    // });

// Getjson
    // $.getJSON('jquery.html', function(data){
    //     $.each(data, function(i, user){
    //         $('ul#users').append('<li>'+user.firstName+'</li>')
    //     })
    // })

// ajax

    // $.ajax({
    //     method:'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json'
    // }).done(function(data){
    //     console.log(data)
    //     $.map(data, function(post, i){
    //         $('#result').append('<h3>'+post.id+'</h3><p>'+post.title+'</p>');
    //     })
    // })

    $('form').submit(function(e){
        e.preventDefault();

        const body = $('input[type="text"]').val();
        const title = $('input[type="email"]').val();
        var url = $(this).attr('action');

        $.post(url, {body:body, title:title}).done(function(data){
            console.log('Post Saved')
            console.log(data)

            $.map(data, function(){
            $('.jquery').text(data.body);
            
            })
        })
    })
});