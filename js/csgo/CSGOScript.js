// JavaScript source code
function checkGift() {
    var yes = document.getElementById("yes").checked;
    var no = document.getElementById("no").checked;
    if (yes) {
        document.getElementById("commentlabel").innerHTML = "Special Message:";
        document.getElementById("comment").innerHTML = "<textarea maxlength=\"200\" id=\"message\" rows=\"3\" cols=\"30\"></textarea>";
    }
    else if (no) {
        document.getElementById("comment").innerHTML = "";
        document.getElementById("commentlabel").innerHTML = "";
    }
}

function showFinalMessage() {
    var name = document.getElementById("Username").value;
    var yes = document.getElementById("yes").checked;
    var submit = new Audio("../../media/csgo/submit.wav")
    if (yes) {
        var message = document.getElementById("message").value;
        document.getElementById("message").disabled = true;
        document.getElementById("yes").disabled = true;
        document.getElementById("no").disabled = true;
        document.getElementById("Username").disabled = true;
        document.getElementById("Email").disabled = true;
        document.getElementById("Password").disabled = true;
        document.getElementById("status").innerHTML = "Thank you " + name + " for playing the CSGO Loot Box Draw, the reward has been sent to their inbox!" + "<br/>The following message will also be sent: " + message;
        submit.play();
        submit.volume = 0.1;
    }
    else {
        document.getElementById("yes").disabled = true;
        document.getElementById("no").disabled = true;
        document.getElementById("Username").disabled = true;
        document.getElementById("Email").disabled = true;
        document.getElementById("Password").disabled = true;
        document.getElementById("status").innerHTML = "Thank you " + name + " for playing the CSGO Loot Box Draw, the reward has been sent to your inbox!";
        submit.play();
        submit.volume = 0.1;
    }
}

function clearMessage() {
    document.getElementById("message").disabled = false;
    document.getElementById("yes").disabled = false;
    document.getElementById("no").disabled = false;
    document.getElementById("Username").disabled = false;
    document.getElementById("Email").disabled = false;
    document.getElementById("Password").disabled = false;
    document.getElementById("status").innerHTML = "Pending...";
    document.getElementById("commentlabel").innerHTML = "";
    document.getElementById("comment").innerHTML = "";
}

function mouseStatus1(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Competitive";
        document.getElementById("hide12").innerHTML = "This is the classic game mode that put Counter-Strike on the map. Two teams of five compete in a best-of-30 match using standard competitive Counter-Strike rules.</br></br>Players must purchase armor, weapons, defuse or rescue kits, and manage their in -game economy to maximize their chance of success.The first team to win 16 rounds in either Bomb Defusal or Hostage Rescue game modes wins the match.</br></br>Competitive offers unique Skill Groups players can earn and display, beginning with Silver 1 and progressing up to The Global Elite.Join a match on your own or form a team and queue for a match together!";
    }
}

function mouseStatus2(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Wingman";
        document.getElementById("hide12").innerHTML = "Queue by yourself or grab a friend in this 2v2 best-of-16 game mode on single bomb site maps. Players earn a Skill Group exclusive to Wingman and play using the Competitive Bomb Defusal ruleset. Buy weapons, armor, and defuse kits in an effort to plant the bomb or defend the bomb site!";
    }
}

function mouseStatus3(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Casual";
        document.getElementById("hide12").innerHTML = "Ready to play some Counter-Strike but don't want to commit to a full 30 round match? Find a Casual match and play at your own pace in this drop-in, drop-out game mode.</br></br>In Casual mode players automatically receive armor and defusal kits, play with a simplified economy, and team damage has been turned off.Join a game and begin mastering CS:GO's fundamentals!";
    }
}

function mouseStatus4(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Deathmatch";
        document.getElementById("hide12").innerHTML = "This fast-paced Casual game mode allows instant respawns and encourages rapid engagements. After spawning, players have a limited amount of time to buy weapons of their choice and engage the enemy.</br></br>Kills with different weapons are worth different point amounts, and throughout the match players will be given bonus points for achieving kills with selected weapons.Respawn immediately and get back to the fight!";
    }
}

function mouseStatus5(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Arms Race";
        document.getElementById("hide12").innerHTML = "Arms race is a gun-progression mode featuring instant respawning designed for rapid close quarters combat.</br></br>Players gain new weapons immediately after registering a kill as they work their way through each weapon in the game.Get a kill with the final weapon, the golden knife, and win the match!";
    }
}

function mouseStatus6(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Demolition";
        document.getElementById("hide12").innerHTML = "In Demolition players take turns attacking and defending a single bombsite in a series of maps designed for fast-paced gameplay.</br></br>Players are automatically granted a starting weapon and advance through a sequence of firearms when they register a kill.The more kills you earn the further you'll advance towards stronger weapons which give your team an advantage, like powerful sniper rifles!";
    }
}

function mouseStatus7(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Flying Scoutsman";
        document.getElementById("hide12").innerHTML = "This Casual 8v8 game mode features reduced gravity, does not penalize players for shooting while moving, and only allows two weapons-SSG 08 sniper rifles and knives. Take to the skies and eliminate your enemies; the first team to 9 rounds wins!";
    }
}

function mouseStatus8(mouse) {
    var n = false;
    n = mouse;
    if (n) {
        document.getElementById("hide1").innerHTML = "Danger Zone";
        document.getElementById("hide12").innerHTML = "Danger Zone is a battle royale mode where players scavenge for equipment and engage in combat with each other in a shrinking battle arena, and the last surviving player (or player team) wins. The mode has maximum 18 players per game, either in Solo or in Duos.</br></br>Danger Zone is set on large open maps exclusive to the mode.The map is divided up into hexagons.At the start of a game, players need to choose an area of the map from which the player will spawn into.Once the game starts, players will be rappelled into their preferred spawn area.Players start equipped with nothing except their Fists as a weapon, one Medi - Shot, a Tablet to see the map and purchase items, as well as one equipment of the player's choice.";
    }
}

function soundEffect() {
    var snd = new Audio("../../media/csgo/gunshot-sound.wav");
    snd.volume = 0.1;
    snd.play();
}

/*function bgSound() {
    var bgsnd = new Audio("../../media/csgo/bgSound.wav");
    bgsnd.volume = 0.1;
    bgsnd.play();
}*/

