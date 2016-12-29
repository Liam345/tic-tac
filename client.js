$(function() {
  //take a count of clicks every even click will be X and every odd click will be an O
  var count = 0;
  var token=0;
   // hide the second and third window when the app starts
$(".game-start").hide();
$(".game-area").hide();
$(".game-over").hide();
$(".player-prompt-container").hide();
  // if player chose 2p-game button hide the first window and show the second. Set token=2
  $("#2p-button").click(function(){
  $('.game-choice').hide();
  $(".game-start").show();
  token=2;
  });
  
  // if player chose 1p-game button hide the first window and show the second. Set token=1
  $("#1p-button").click(function(){
  $('.game-choice').hide();
  $(".game-start").show();
  token=1;
  });

  //if player chose x-button hide the second window and show the third window and player1(X) prompts(only when token=2)(hide computer prompt)
  //
  $("#x-button").click(function(){
    
    //if(token==1){
    //$("#Computer-prompt").hide();
    //$("#P1-prompt").show();
    //$("#P2-prompt").hide();
    //}
     if(token==2){
    $(".game-start").hide();
    $(".game-area").show();
    $(".player-prompt-container").show();
    $("#Computer-prompt").hide();
    $("#P2-prompt").hide();
    $("#P1-prompt").show();
    }
  });
  
  //if player chose o-button hide the second window and show the third window and player1(X) prompts(only when token=2)(hide computer prompt)
  //
  $("#o-button").click(function(){
    
    //if(token==1){
    //  $("#Computer-prompt").show();
    //  $("#P2-prompt").hide();
    //  $("#P1-prompt").hide();
    //}
     if(token==2){
      $(".game-start").hide();
      $(".game-area").show();
      $(".player-prompt-container").show();
      $("#Computer-prompt").hide();
      $("#P2-prompt").hide();
      $("#P1-prompt").show();
    }
  });
  
  //if player chose back-button window 1 reappears and second disappears
  $("#back-button").click(function(){
    $(".game-choice").show();
    $(".game-start").hide();
  });
  // if player clicks on any button in game-area it marks the area with X(even-click) and O(odd-click) 
  //Also disables the button. // Calls SwitchTurn() and CheckWin() methods
  $(".btn").click(function(){
    if(count%2===0){
    this.innerHTML="X";
    $(this).prop("disabled",true);
    count++;
    }
    else if(count%2===1){
    this.innerHTML="O"; 
    $(this).prop("disabled",true);
    count++;
    }
    switchTurn(count);
    checkWin();
  });
  
  //if player clicks on play-again button. It takes him back to the game-start i.e hide game-over and show game-start
  //Remove all added html from game area
  //Enable the disabled buttons(or all the buttons)
  //Set count to zero so that X is still the first player to move
  $("#play-again").click(function(){
  $(".game-over").hide();
    $(".game-start").show();
    for(i=0;i<9;i++){
   // $(".btn"+i).html()="";
    document.querySelector(".btn"+i).innerHTML="";
    $(".btn"+i).prop("disabled",false);
    count=0;
  }
  });

});

//switch players.
  //After player 1 finishes his turn show player2 prompt and vice versa
function switchTurn(count){
    if(count%2===0){
    $("#P1-prompt").show();
    $("#P2-prompt").hide();
    }
    else if(count%2===1){
    $("#P1-prompt").hide();
    $("#P2-prompt").show();
    
    }
    }
    
    //Check on every step whether a player has won or not
    //Display the results in game-result window(div)
    //Need to refactor it to fit in some sort of algorithm to find winners
function checkWin(){
  
  //array button will contain all the inner Html of the tic tac toe button
  var btn = [];
  for(i=0;i<9;i++){
  btn.push($(".btn"+i).html());
  }
  
    if((btn[0] ==="X" && btn[1] ==="X"  && btn[2] ==="X")||(btn[3] ==="X" && btn[4] ==="X"  && btn[5] ==="X")
    ||(btn[6] ==="X" && btn[7] ==="X"  && btn[8] ==="X")||(btn[0] ==="X" && btn[3] ==="X"  && btn[6] ==="X")
    ||(btn[1] ==="X" && btn[4] ==="X"  && btn[7] ==="X")||(btn[2] ==="X" && btn[5] ==="X"  && btn[8] ==="X")
    ||(btn[0] ==="X" && btn[4] ==="X"  && btn[8] ==="X")||(btn[2] ==="X" && btn[4] ==="X"  && btn[6] ==="X"))
    {
    $(".game-area").hide();
    $(".game-over").show();
    document.querySelector(".game-result").innerHTML="Player 1 . Won.";
    $("#P2-prompt").hide();
    }
    else if((btn[0] ==="O" && btn[1] ==="O"  && btn[2] ==="O")||(btn[3] ==="O" && btn[4] ==="O"  && btn[5] ==="O")
    ||(btn[6] ==="O" && btn[7] ==="O"  && btn[8] ==="O")||(btn[0] ==="O" && btn[3] ==="O"  && btn[6] ==="O")
    ||(btn[1] ==="O" && btn[4] ==="O"  && btn[7] ==="O")||(btn[2] ==="O" && btn[5] ==="O"  && btn[8] ==="O")
    ||(btn[0] ==="O" && btn[4] ==="O"  && btn[8] ==="O")||(btn[2] ==="O" && btn[4] ==="O"  && btn[6] ==="O"))
    {
    $(".game-area").hide();
    $(".game-over").show();
    document.querySelector(".game-result").innerHTML="Player 2 . Won.";
    $("#P1-prompt").hide();
    }
    
    else if(btn[0]!=="" && btn[1]!=="" && btn[2]!==""&& btn[3]!=="" && btn[4]!==""
    && btn[5]!=="" && btn[6]!=="" && btn[7]!=="" && btn[8]!=="" ){
    $(".game-area").hide();
    $(".game-over").show();
    document.querySelector(".game-result").innerHTML="Game Draw.";
    $("#P1-prompt").hide();
    $("#P2-prompt").hide();
    }
}