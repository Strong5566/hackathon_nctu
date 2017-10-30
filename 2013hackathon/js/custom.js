$(function () {
    //$.ajax({
    //    type: 'GET',
    //    cache: false,
    //    dataType: 'jsonp',
    //    url:'http://people.cs.nctu.edu.tw/~cychih/hackathon/visits_count.php',
    //    success: function (count) {
    //        console.log(count);
    //        $('#visits_count').text(count);
    //    },
    //});

    $.getJSON('http://people.cs.nctu.edu.tw/~cychih/hackathon/visits_count.php?callback=?',
        function (count) {
            $('#visits_count').text(count.visits);
        });

    //$(".nav li a[href^='#']").on('click', function(e) {
    //    // prevent default anchor click behavior
    //    e.preventDefault();

    //    // store hash
    //    var hash = this.hash;

    //    // animate
    //    $('html, body').animate(
    //        {
    //            scrollTop: parseInt($(this.hash).offset()['top'])-70
    //        },
    //        300,
    //        function(){
    //        // when done, add hash to url
    //        // (default click behaviour)
    //        window.location.hash = hash;
    //    });
    //});
});
