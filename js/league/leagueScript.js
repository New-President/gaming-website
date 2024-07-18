// JavaScript source code
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

var colors = ["blue", "gold", "red", "green", "orange"]
var currentColor = 0
var lis = document.querySelectorAll("#bag")
function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length - 1
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = colors[(currentColor + i) % colors.length]
    }
}
setInterval(changeColor, 1000)


function addImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}


function displaySkin(){
    var theForm = document.forms["giftForm"];
    var value = theForm.elements["Skin"];
    var remove = document.getElementById("displaySkin");
    try {
        remove.removeChild(remove.childNodes[0]);
        for (var i = 0; i < value.length; i++) {
            if (value[i].checked) {
                if (value[i].value == 'lux') {
                    img = addImage("../../media/league/lux.jpeg", 500, 350, 'lux');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'sona') {
                    img = addImage("../../media/league/sona.jpg", 500, 350, 'sona');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'mf') {
                    img = addImage("../../media/league/miss fortune.jpg", 500, 350, 'miss fortune');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'seraphine') {
                    img = addImage("../../media/league/seraphine.jpg", 500, 350, 'seraphine');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'ezreal') {
                    img = addImage("../../media/league/ezreal.jpg", 500, 350, 'ezreal');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'udyr') {
                    img = addImage("../../media/league/udyr.jpg", 500, 350, 'udyr');
                    document.getElementById('displaySkin').appendChild(img);
                }
            }
        }
    }
    catch (Exception) {
        for (var i = 0; i < value.length; i++) {
            if (value[i].checked) {
                if (value[i].value == 'lux') {
                    img = addImage("../../media/league/lux.jpeg", 500, 350, 'lux');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'sona') {
                    img = addImage("../../media/league/sona.jpg", 500, 350, 'sona');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'mf') {
                    img = addImage("../../media/league/miss fortune.jpg", 500, 350, 'miss fortune');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'seraphine') {
                    img = addImage("../../media/league/seraphine.jpg", 500, 350, 'seraphine');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'ezreal') {
                    img = addImage("../../media/league/ezreal.jpg", 500, 350, 'ezreal');
                    document.getElementById('displaySkin').appendChild(img);
                }
                else if (value[i].value == 'udyr') {
                    img = addImage("../../media/league/udyr.jpg", 500, 350, 'udyr');
                    document.getElementById('displaySkin').appendChild(img);
                }
            }
        }
    }
}

function submitForm() {
    var finalMessage = document.getElementById("finalMessage");
    var email = document.getElementById("email");
    finalMessage.innerHTML = "Thank you for visiting our website, this skin would be sent to " + email.value + ".";
    document.getElementById("bootstrap-overrides-fieldset").disabled = true;
    document.getElementById("Name").disabled = true;
    document.getElementById("email").disabled = true;

}

function resetForm() {
    document.getElementById("giftForm").reset();
    var remove = document.getElementById("displaySkin");
    remove.removeChild(remove.childNodes[0]);
    var finalMessage = document.getElementById("finalMessage");
    finalMessage.style.display = 'block';
    finalMessage.innerHTML = "";
    document.getElementById("bootstrap-overrides-fieldset").disabled = false;
    document.getElementById("Name").disabled = false;
    document.getElementById("email").disabled = false;
}

