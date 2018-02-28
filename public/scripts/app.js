/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).on("ready", function(){
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


    function renderTweets(tweets) {
        $("#tweetView").empty();
        tweets.forEach(function(tweet){
            var newTweet = createTweetElement(tweet);
            $('#tweetView').prepend(newTweet); 
        });      
    }


    function createTweetElement(tweetData){
    
        // variable to create date
        var dateFromNow = moment(tweetData.created_at).fromNow();

        //Creation of variable with data
        var $article = $("<article>").addClass('tweet');
        var $header = $("<header>");
        var $img = $("<img>").addClass('photo').attr("src", tweetData.user.avatars.small);
        var $username = $("<div>").addClass('userName').text(tweetData.user.name);
        var $user = $("<div>").addClass('user').text(tweetData.user.handle);
        var $text = $("<div>").addClass('tweetText').text(tweetData.content.text);
        var $footer = $("<footer>");
        var $date = $("<div>").addClass('timeAgo').text(dateFromNow);
        var $imgIcon1 = $("<img>").addClass('icons').attr("src", 'images/flag.png');
        var $imgIcon2 = $("<img>").addClass('icons').attr("src", 'images/retweet.png');
        var $imgIcon3 = $("<img>").addClass('icons').attr("src", 'images/heart.png');

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

    renderTweets(data);
});