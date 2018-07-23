$(document).ready(function() {
  $('#btn-quote').on('click', function() {
    // ajax to generate new quote
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://talaikis.com/api/quotes/random/',
      // url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='
    })
    .done(function(data) {
      console.log(data);
      $('#quote').html('<p class="quote">' + data.quote + '</p>' + 
      '<p class="author"> ~ ' + data.author + '</p>');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error: ' + errorThrown);
      console.log('Status: ' + status);
      console.log(xhr);
    });
  });
  // grab populated quote and embed to twitter window
  $('#btn-tweet').click(function() {
    var tweetQuote = $('#quote').text();
    window.open('https://twitter.com/intent/tweet?text=' + tweetQuote);
  });
});