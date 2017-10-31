let number = document.createElement('b');
number.className = "footer-text--red";
number.innerHTML = '18';

function addNum() {

    document.getElementById("number").appendChild(number);

    setTimeout(
        function() {
            number.innerHTML = '17'; }
            , 3000);
}
