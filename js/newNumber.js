let number = document.createElement('b');
number.className = "footer-text--red";
number.innerHTML = '18';

function addNum() {

    document.getElementById("number").appendChild(number);

    $(document).ready(function() {
        let windowHeight = $(window).height();

        $(document).on('scroll', function() {
            $('.footer-btn').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    setTimeout(
                        function() {
                            number.innerHTML = '17'; }
                        , 3000);
                }
            });
        });
    });

}
