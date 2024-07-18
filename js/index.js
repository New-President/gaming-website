function ShowHideCol(id, action) {
    if (action == "add") {
        $(`#${id} .contain`).addClass("show");
    }
    else {
        $(`#${id} .contain`).removeClass("show");
    }
}

$(document).ready(function () {
    $(".infoColumn").mouseenter(function () {
        var id = this.id;
        $(`#${id}`).animate({
            opacity: 1
        }, {
            complete: function() {
                ShowHideCol(id, "add");
            }
        });
    });

    $(".infoColumn").mouseleave(function () {
        var id = this.id;
        $(`#${id}`).animate({
            opacity: 0.5
        }, {
            complete: function() {
                ShowHideCol(id, "remove");
            }
        });
    });
})
