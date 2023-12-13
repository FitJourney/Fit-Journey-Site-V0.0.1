increaseFont();
decreaseFont();

function increaseFont() {
    console.log("increaseFont");
    document.getElementById('increase-font').addEventListener('click', function() {
        var elements = document.querySelectorAll('body *');
        elements.forEach(function(element) {
            var currentFontSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'));
            element.style.fontSize = (currentFontSize + 1) + 'px';
        });
    });
}

function decreaseFont() {
    console.log("decreaseFont");
    document.getElementById('decrease-font').addEventListener('click', function() {
        var elements = document.querySelectorAll('body *');
        elements.forEach(function(element) {
            var currentFontSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'));
            element.style.fontSize = (currentFontSize - 1) + 'px';
        });
    });
}

