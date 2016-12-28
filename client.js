$(function() {
  //take a count of clicks every even click will be X and every odd click will be an O
  var count = 0;

   // hide the second and third window when the app starts
$(".game-start").hide();
$(".game-area").hide();
$(".player-prompt-container").hide();
  // if player chose 2p-game button hide the first window and show the second
  $("#2p-button").click(function(){
  $('.game-choice').hide();
  $(".game-start").show();
  });

  //if player chose x-button hide the second window and show the third window and player1(X) prompts
  $("#x-button").click(function(){
    $(".game-start").hide();
    $(".game-area").show();
    $(".player-prompt-container").show();
    $("#P2-prompt").hide();
  });
  //if player chose back-button window 1 reappears and second disappears
  $("#back-button").click(function(){
    $(".game-choice").show();
    $(".game-start").hide();
  });
  // if player clicks on any button in game-area it marks the area with X(even-click) and O(odd-click) 
  //Also disables the button.
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
function checkWin(){
  
  //array button will contain all the inner Html of the tic tac toe buttons
  var btn = [];
  for(i=0;i<9;i++){
  btn.push($(".btn"+i).text());
  }
  
    if(btn[1] ==="X"){
    window.alert("Player 1 . Won.");
    }
}