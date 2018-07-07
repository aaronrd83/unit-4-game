var randomNum;
var loss = 0;
var win = 0;
var playerNum = 0;
var counter = 0;
var ruby = 0;
var amethyst = 0;
var diamond = 0;
var sapphire = 0;


document.getElementById("wins").innerHTML = win;
document.getElementById("losses").innerHTML = loss;

function startGame() {


    playerNum = 0;
    randomNum = Math.floor(Math.random() * 100) + 19
    console.log(randomNum)

    $("#randomNum").text(randomNum);
    $("#playerNum").text(playerNum);


    var rubyNumOptions = [1, 5, 9];
    var amethystNumOptions = [2, 6, 10];
    var diamondNumOptions = [3, 7, 11];
    var sapphireNumOptions = [4, 8, 12];

    ruby = rubyNumOptions[Math.floor(Math.random() * rubyNumOptions.length)]
    console.log(ruby)

    amethyst = amethystNumOptions[Math.floor(Math.random() * amethystNumOptions.length)]
    console.log(amethyst)

    diamond = diamondNumOptions[Math.floor(Math.random() * diamondNumOptions.length)]
    console.log(diamond)

    sapphire = sapphireNumOptions[Math.floor(Math.random() * sapphireNumOptions.length)]
    console.log(sapphire)

}


function gameStat() {
    if (playerNum === randomNum) {
        alert("You Win");
        win++
        $("#wins").html(win);
        startGame()
    }

    else if (playerNum >= randomNum) {
        alert("You Lose!!");
        loss++
        $("#losses").html(loss);
        startGame()
    }
}







$(document).ready(function () {
    startGame()
    $(".img-ruby").click(function () {
        $("#playerNum").html(playerNum + ruby);
        playerNum = playerNum + ruby;
        console.log(playerNum)
        gameStat()
    })

    $(".img-amethyst").click(function () {
        $("#playerNum").html(playerNum + amethyst);
        playerNum = playerNum + amethyst;
        console.log(playerNum)
        gameStat()
    })

    $(".img-diamond").click(function () {
        $("#playerNum").html(playerNum + diamond);
        playerNum = playerNum + diamond;
        console.log(playerNum)
        gameStat()
    })

    $(".img-sapphire").click(function () {
        $("#playerNum").html(playerNum + sapphire);
        playerNum = playerNum + sapphire;
        console.log(playerNum)
        gameStat()
    })


    /*if (playerNum === randomNum) {
          alert("You Win");
      }
  
      else if (playerNum >= randomNum) {
          alert("You Lose!!");
      }*/


});


    //$(".img-amethyst").click(function () {
    //$("#playerNum").text(amethyst);
    // playerNum = Number(playerNum) + Number($(this).val());
    // $("#playerNum").text(playerNum);
    // console.log(playerNum)
    //});s



    //$(".img-ruby").on("click", function () {
    //   $("#playerNum").text(ruby);
    //   playerNum = ruby + playerNum
    //})

    //$(".img-diamond").on("click", function () {
    //  $("#playerNum").text(diamond);
    //})

    //$(".img-sapphire").on("click", function () {
    //    $("#playerNum").text(sapphire);
    //})


    //var playerNum = (ruby + amethyst + diamond + sapphire)
    //  $("#playerNum").text(playerNum);
    //  console.log(playerNum)





// 1. Generate a random number between 19 - 120 to start game.

// 2. Assign a random value to each crystal for each game between 1 - 12

// 3. Update Player Score with the random value it was assigned.

// 4. Player wins if their total score equals the random number generated.

// 5. Player loses if their score goes abve the random number.

// 6. update Wins and Losses record

// 7. Game restarts after player wins or loses