// JavaScript source code

// Show/hide table
$(document).ready(function () {
    $("#showtable").click(function () {
        $("#reactionTable").fadeIn("slow");
    });
});
$(document).ready(function () {
    $(".hidetable").click(function () {
        $("#reactionTable").fadeOut("slow");
    });
});
var audio = document.getElementById("bgm");
audio.volume = 0.2;

function playbgm() {
    var audio = document.getElementById("bgm");
    audio.volume = 0.2;
}

function mutebgm() {
    var audio = document.getElementById("bgm");
    audio.volume = 0;
}



// Scrolling image animation
//function debounce(func, wait = 20, immediate = true) {
//    var timeout;
//    return function () {
//        var context = this,
//            args = arguments;
//        var later = function () {
//            timeout = null;
//            if (!immediate) func.apply(context, args);
//        };
//        var callNow = immediate && !timeout;
//        clearTimeout(timeout);
//        timeout = setTimeout(later, wait);
//        if (callNow) func.apply(context, args);
//    };
//}

//const sliderImages = document.querySelectorAll('.slide-in');

//function checkSlide(e) {
//    sliderImages.forEach(sliderImage => {
//        // halfway through the image
//        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//        // bottom of the image
//        const imageBottom = sliderImage.offsetTop + sliderImage.height;
//        const isHalfShown = slideInAt > sliderImage.offsetTop;
//        const isNotScrolledPast = window.scrollY < imageBottom;
//        if (isHalfShown && isNotScrolledPast) {
//            sliderImage.classList.add('active');
//        } else {
//            sliderImage.classList.remove('active');
//        }

//        console.log(slideInAt);
//    });
//}

//window.addEventListener('scroll', debounce(checkSlide));


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// disabling button for the duration of 15 seconds
function timer() {
    var setTimer = 15;
    var seconds = setTimer, $seconds = document.querySelector('#getCode');
    (function countdown() {
        $seconds.value = seconds + ' sec' + (seconds == 1 ? '' : 's');
        if (seconds == 0) {
            document.getElementById("getCode").disabled = false;
            $seconds.value = 'Get Code';
        }
        if (seconds --> 0) setTimeout(countdown, 1000)
    })();
}

// reference: https://stackoverflow.com/questions/60702116/create-a-countdown-timer-on-button-click-when-value-is-entered-in-text-box-jav

var ranCode;
function randomCode() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('userpass').value;
    var useremail = document.getElementById('useremail').value;
    ranCode = Math.floor((Math.random() * 899) + 100);

    //Email.send({
    //    SecureToken: "9df36445-205c-4146-b098-f590ec6e8b80",
    //    To: useremail,
    //    From: "jasonleeweekang@gmail.com",
    //    Subject: "No Reply - Genshin Impact Verification Code",
    //    Body: "Your verification code is " + ranCode
    //}).then(
    //    message => alert(message)
    //);
    
    if (username == "" || password== "" || useremail == "") {
        document.getElementById('errorMsg').innerHTML = "Please enter your account credentials first!";
    }
    else if (validateEmail(useremail)) {
        document.getElementById('errorMsg').innerHTML = "";
        alert("Your verification code is " + ranCode);
        document.getElementById("getCode").disabled = true;
        timer();
    }
    else {
        document.getElementById('errorMsg').innerHTML = "Enter a valid email address!";
        
    }
    
}

var gencharlist = new Array();
gencharlist["Diluc"] = "4th";
gencharlist["Eula"] = "3rd";
gencharlist["Jean"] = "5th";
gencharlist["Venti"] = "2nd";
gencharlist["Albedo"] = "1st";
gencharlist["Klee"] = "7th";
gencharlist["Mona"] = "6th";
gencharlist["Traveller"] = "last";

function getUserCredentials(){
    var username = document.getElementById('username').value;
    var vcode = document.getElementById('vcode').value;
    var character = document.getElementById('favchar').value;

    var position = gencharlist[character];

    if (vcode == ranCode) {
        document.getElementById('finalMsg').innerHTML = "Hey " + username + "! Your favourite character [" + character + "] is placed at the " + position + " position!";
        document.getElementById("submitbutton").disabled = true;

    }
    else {
        document.getElementById('errorMsg').innerHTML = "Your verification code is incorrect!";
    }

}


function onReset() {
    document.getElementById('favCharForm').reset();
    var divObj1 = document.getElementById('errorMsg');
    divObj1.innerHTML = "";

    var divObj2 = document.getElementById('finalMsg');
    divObj2.innerHTML = "";

    document.getElementById("submitbutton").disabled = false;
}