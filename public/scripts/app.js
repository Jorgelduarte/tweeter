/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).on("ready", function(){

  // Button Compose with toggle and textarea activated
  $("#compose").on("click", function (){
    $(".new-tweet").toggle("slow");
    $("textarea").select();
  })


  // render tweets from database
  function renderTweets(tweets) {
    $("#tweetView").empty();
    tweets.forEach(function(tweet){
        const newTweet = createTweetElement(tweet);
        $('#tweetView').prepend(newTweet); 
    });      
  }

  // create all element in HTML
  function createTweetElement(tweetData){
  
    // variable to create date
    const dateFromNow = moment(tweetData.created_at).fromNow();

    //Creation of variable with data
    const $article = $("<article>").addClass('tweet');
    const $header = $("<header>");
    const $img = $("<img>").addClass('photo').attr("src", tweetData.user.avatars.small);
    const $username = $("<div>").addClass('userName').text(tweetData.user.name);
    const $user = $("<div>").addClass('user').text(tweetData.user.handle);
    const $text = $("<div>").addClass('tweetText').text(tweetData.content.text);
    const $footer = $("<footer>");
    const $date = $("<div>").addClass('timeAgo').text(dateFromNow);
    const $imgIcon1 = $("<img>").addClass('icons').attr("src", 'images/flag.png');
    const $imgIcon2 = $("<img>").addClass('icons').attr("src", 'images/retweet.png');
    const $imgIcon3 = $("<img>").addClass('icons').attr("src", 'images/heart.png');

    // appending
    $article.append($header);
    $header.append($img);
    $header.append($username);
    $header.append($user);
    $article.append($text);
    $article.append($footer);
    $footer.append($date);
    $footer.append($imgIcon1);
    $footer.append($imgIcon2);
    $footer.append($imgIcon3);

    return $article
  }

  //Form Submission using JQuery - Ajax
  $('#loadMorePosts form').on("submit", function (event) {
    event.preventDefault();
    const counterOfCharacters = $('textarea').val().length;
    if (counterOfCharacters === 0){
      alert("What are you humming about?")
    } else if (counterOfCharacters > 140) {
      alert("Your post has more than 140 characters")
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize(),
        success: function () {
          loadTweets();
          $('.counter').text("140");
        }
      });
      $('#loadMorePosts form')[0].reset();
    }
  });

  // Ajax - Read the tweet in main page
  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function(tweetData) {
        renderTweets(tweetData);
      }
    });
  }

  loadTweets();
});