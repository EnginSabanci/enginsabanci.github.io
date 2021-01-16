
$(document).ready(() => {
  /**
   * I comment out following since they prevented me to create html element in index.html and append element from index.js
   * const $body = $('body');
   * $body.html('');
   * 
   */
  
  //responsive container to wrap the form used to send a tweet
  // const $containerForm = $("<div></div>").attr("class", "container-sm");
  // const $sendTweet = $("<form></form>")
  // const $

  //responsive container to wrap user new tweets
  // const $container = $("<div></div>").attr("class", "container-sm");
  
  // $body.append($container)

  for(let each in streams.users){
    //create user on sideBar
  const $div = $("<div>").attr("class", "users")
  $div.text(each)
  $("#users").append($div)
  //create <div> tag for each user in timeline container.
  // const $div2 = $("<div>").attr("id", `${each}`)
  // // $div2.text(each)
  // $("#timeline").append($div2)
  }

  
  const $tweets = streams.home.map((tweet) => {
    //add the user to the UserList
    const $tweet = $('<div></div>');  
    let text = `@${tweet.user}: ${tweet.message} ${moment(tweet.created_at).fromNow()}`;
    $tweet.text(text);
  // $container.append($tweet);
    return $tweet;
  });
  $("#previous-tweets").append($tweets);

  //
  $(function(){
    $("#my-form").submit(function(e) {
        const value = $("#input_tweet").val();
        //if the user type sth, it would be appeared on the page as new tweet.
        if(value.length > 0){
             const $text = $("<div></div>").text(`@Me: ${value} ${moment(new Date).fromNow()}`); // text function takes value as parameter
        $("#my-new-tweets").append($text)
        // When I create new tweet push it to an array and retrieve from this array
        }
     
        e.preventDefault();
    });
});


//When we click Users the webpage refresh
$(function(){
  $('#click-to-refresh').click(function() {
    location.reload();
  });
})



//Allow the user to click on any username to see that user’s timeline.
$(function(){
  $(".users").click(function(e){
    $("#timeline").css("border", "2px solid black")

      //when click we get the name of the user from the h2 we click.
      // location.reload();
      let userClicked = $(this).text();
      for(let each in streams.users){
        //when a user on the sidebar is clicked, other messages in timeline is removed.
        if(each != userClicked){
          $('.timeline-tweets').remove();
        }
        if(each == userClicked){
          //create <div> tag for this user
          const $div2 = $("<div>").attr("id", `${each}`)
          let arr = streams.users[each]
          for(let i = 0; i < arr.length; i++){
            const $tweet = $('<div>')//.atrr("class","timeline-tweets");  
            let text = `@${each}: ${arr[i].message} - ${moment(arr[i].created_at).fromNow()}`; //${moment(tweet.created_at).fromNow()}
            $tweet.text(text);
            $($div2).append($tweet).appendTo("#timeline")
          // console.log(text)
          }
          e.preventDefault();
          $("#users-tweets").append(`${each}  timeline`);
        }
      }
      // console.log(userClicked)
     
    })
});

//css for users on the side bar

$(".users")
.css("color","white");

});
//Css for timeline container
