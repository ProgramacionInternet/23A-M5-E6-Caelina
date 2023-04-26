var counter = 1;
var intervalId = setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 3000);

var radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('click', function() {
        clearInterval(intervalId);
        counter = parseInt(this.id.replace('radio', ''));
        intervalId = setInterval(function() {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4) {
                counter = 1;
            }
        }, 3000);
    });
});



  


