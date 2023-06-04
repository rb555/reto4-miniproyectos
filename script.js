var currentPage = 1;
var isLoading = false;

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
    loadMoreData();
  }
});

function loadMoreData() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  $('#results').append('<p>Loading...</p>');

  $.ajax({
    url: 'https://swapi.dev/api/people/?page=' + currentPage,
    method: 'GET',
    success: function(response) {
      var results = response.results;
      displayResults(results);

      currentPage++;
      isLoading = false;
      $('#results p:last-of-type').remove();
    },
    error: function(error) {
      console.log(error);
      isLoading = false;
      $('#results p:last-of-type').remove();
    }
  });
}

function displayResults(results) {
  var output = '';

  results.forEach(function(person) {
    output += '<p>Name: ' + person.name + '</p>';
    output += '<p>Height: ' + person.height + '</p>';
    output += '<p>Mass: ' + person.mass + '</p>';
    output += '<hr>';
  });

  $('#results').append(output);
}

loadMoreData();
