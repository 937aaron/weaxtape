$(function(){
  'use strict';
  var searchMood
  $(".submit").click(function(e){
    e.preventDefault();
    console.log("Success");
    $(".moodQuote").html("");
    $(".list-group-item-text").html("");

    $.ajax({
      dataType: 'json',
      url: "https://api.spotify.com/v1/search?q=" + $('input[name="mood"]').val() + "&type=track&limit=10",
      method: "GET",
      headers: {"Range": "bytes=0-10000000"}, //trying to get the preview url to embed thought this would fix from stackoverflow.
    }).done(function(json) {
      for (var x = 0; x< 10; x++)
        $(".mixtape").append(
                            '<p class="list-group-item-text">' + '<span class="trackName">' + json.tracks.items[x].name + '</span>' + " by " + json.tracks.items[x].artists[0].name + '</br>'+ '</p>'

        );

      console.log(json);
    });

    $.ajax({
      dataType: 'json',
      url: "http://api.giphy.com/v1/gifs/search?q=" + $('input[name="mood"]').val() + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
    }).done(function(json) {
      // for (var x = 0; x< 10; x++)
        $(".moodQuote").append(
                            //'<li>' + json.data[0].images.downsized.url + '</li>'
                            "<img src='" + json.data[0].images.fixed_height.url + "'/>"
        );

      console.log(json);
    });
  });
})
