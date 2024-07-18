// correct answers
var q1Ans = new Array(2, 3, 4);
var q2Ans = 2;
var q3Ans = 0;
var q4Ans = 0;
var q5Ans = new Array(1, 2, 3);
var q6Ans = 0;
var q7Ans = 3;
var q8Ans = 1;
var q9Ans = 1;
var q10Ans = 0;

var AnsArray = new Array(q1Ans, q2Ans, q3Ans, q4Ans, q5Ans, q6Ans, q7Ans, q8Ans, q9Ans, q10Ans);

// function to check ans for each qn
function CheckAns() {
    var results = new Array();  // array to store results for each qn (true/false)
    for (var i = 0; i < 10; i++) {
        results.push(false);
    }  // populate results with false

    for (var i = 0; i < AnsArray.length; i++) {
        var result;
        var ans = AnsArray[i];
        var qNo = i + 1;
        var selectionString = `#qn${qNo} .choices input`;  // format string to get correct qn
        var options = $(selectionString);  // get input items for each qn

        if (options[0].getAttribute("type") == "checkbox") {
            var selection = new Array();
            for (var a = 0; a < options.length; a++) {
                var option = options[a];
                if (option.checked) {
                    selection.push(option.value);
                }
            }

            result = (
                ans.length === selection.length && ans.sort().every(function (value, index) {
                    return value == selection.sort()[index];
                })
            );  // check if the two arrays match (correct ans and selected options)

        }
        else {
            var answer = 0;
            for (var a = 0; a < options.length; a++) {
                var option = options[a];
                if (option.checked) {
                    answer = option.value;
                    break;
                }
            }

            result = (ans == answer);  // check if the two values match
        }

        results[i] = result;
    }

    return results;
}

// function to calculate total marks
function GetMarks(results) {
    var correct = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i] == true) {
            correct += 1;
        }
    }

    return correct;
}

// function to display correct ans for each qn and disable all input fields
function DisplayAll(e) {
    e.preventDefault();
    var results = CheckAns();  // get the results for each qn

    for (var i = 0; i < AnsArray.length; i++) {
        var ans = AnsArray[i];
        var result = results[i];
        var qNo = i + 1;
        var selectionString = `#qn${qNo} .ans`;  // format string to get correct qn
        var displayPara = $(`${selectionString} .trapdoor .ansContent`);  // get the empty div to display answers
        var ansString;

        // get answer as a string if there are multiple answers
        if (Array.isArray(ans)) {
            var newAnsArray = ans.slice();
            for (var a = 0; a < newAnsArray.length; a++) {
                newAnsArray[a] += 1;
            }

            ansString = newAnsArray.join(", ");
        }
        else {
            ansString = ans + 1;
        }

        // change background color of qn blocks depending on whether or not the qn is answered correctly
        var selectQnBlock = `#qn${qNo}`;
        var qnBlock = $(selectQnBlock);
        if (result) {
            qnBlock.css("background-color", "lightgreen");
        }
        else {
            qnBlock.css("background-color", "palevioletred");
        }

        // display correct answer and add class styleAns to change style rules
        displayPara.html(`<p>${ansString}.</p>`)
        $(selectionString).addClass("styleAns");
        // remove hidden class to show the div
        $(selectionString).removeClass("hidden");
    }

    // disable all input fields and submit button
    $("fieldset").attr("disabled", "disabled");
    $("#submit").attr("disabled", "disabled");

    // display total marks
    var correct = GetMarks(results);
    var markString = `<p>Total score: ${correct}/10</p>`;
    var markString2;
    if (correct <= 5) {
        markString2 = "<p>Try again?</p>";
        // change background color of .toggle::before to red by adding class
        $(".toggle").addClass("red")
    }
    else {
        markString2 = "<p>Good job!</p>";
        // change background color of .toggle::before to red by adding class
        $(".toggle").addClass("green")
    }
    // add score and second string to the div to display total score
    var markPara = $(".totalText");
    markPara.append(markString, markString2);
}

// function to clear all changed content and enable all fields
function ClearAll() {
    // remove all html from the answer divs, remove styleAns class and change background color of qn blocks back to white
    $(".ansContent").html("");
    $(".ans").removeClass("styleAns");
    $(".ans").addClass("hidden");
    $(".qnBlock").css("background-color", "white");

    // remove all html from the div for display total marks
    $(".totalText").html("");
    // remove color classes from .toggle::before
    $(".toggle").removeClass("red");
    $(".toggle").removeClass("green");

    // enable all input fields and submit button
    $("fieldset").removeAttr("disabled");
    $("#submit").removeAttr("disabled");
}

// execute DisplayAll when form is submitted
// execute ClearAll when user clicks on reset button
var form = $("#CGQuiz");
var resetBtn = $("#reset");
$(document).ready(function () {
    form.submit(DisplayAll);
    resetBtn.click(ClearAll);
});

