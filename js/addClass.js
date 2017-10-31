function actionFlag() {

    $(document).ready(function() {
        let windowHeight = $(window).height();

        $(document).on('scroll', function() {
            $('#action_flags').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    document.getElementById("it_flag").classList.add("it-flag");
                    document.getElementById("bu_flag").classList.add("bu-flag");
                    document.getElementById("th_flag").classList.add("th-flag");
                    document.getElementById("vn_flag").classList.add("vn-flag");
                }
            });
        });
    });
}