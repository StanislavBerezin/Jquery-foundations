$(function () {
    $("#progressTimer").progressTimer({
        timeLimit: 10,
        warningThreshold: 10,
        baseStyle: 'progress-bar-warning',
        warningStyle: 'progress-bar-danger',
        completeStyle: 'progress-bar-info',
        onFinish: function () {
            console.log("I'm done");
        }
    });
});