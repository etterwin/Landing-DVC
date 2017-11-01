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

function actionIcons() {

    $(document).ready(function() {
        let windowHeight = $(window).height();

        $(document).on('scroll', function() {
            $('#action_icons').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    document.getElementById("circle_1").classList.add("network-circle-1--small");
                    document.getElementById("circle_2").classList.add("network-circle");
                    document.getElementById("circle_3").classList.add("network-circle-2--small");
                    document.getElementById("circle_4").classList.add("network-circle-1--big");
                    document.getElementById("circle_5").classList.add("network-circle-2--big");
                    document.getElementById("circle_6").classList.add("network-circle-3--small");
                    document.getElementById("earth").classList.add("network-earth");
                    document.getElementById("sym").classList.add("network-sym");
                    document.getElementById("chat").classList.add("network-chat");
                    document.getElementById("light").classList.add("network-light");
                    document.getElementById("loud").classList.add("network-loud");
                    document.getElementById("coop").classList.add("network-coop");
                    document.getElementById("email").classList.add("network-email");
                }
            });
        });
    });
}

function actionSybmols() {

    $(document).ready(function() {
        let windowHeight = $(window).height();

        $(document).on('scroll', function() {
            $('#action_symbols').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    document.getElementById("percent_1").classList.add("progress-percent--left");
                    document.getElementById("bulb_1").classList.add("progress-bulb--left");
                    document.getElementById("doll_1").classList.add("progress-doll--left");
                    document.getElementById("percent_2").classList.add("progress-percent");
                    document.getElementById("euro_1").classList.add("progress-euro--left");
                    document.getElementById("bulb_2").classList.add("progress-bulb");
                    document.getElementById("euro_2").classList.add("progress-eur--right");
                    document.getElementById("percent_3").classList.add("progress-percent--right");
                    document.getElementById("bulb_3").classList.add("progress-bulb--right");
                    document.getElementById("doll_2").classList.add("progress-doll--right");


                    document.getElementById("percent_4").classList.add("progress-percent--left");
                    document.getElementById("bulb_4").classList.add("progress-bulb--left");
                    document.getElementById("doll_4").classList.add("progress-doll--left");
                    document.getElementById("percent_5").classList.add("progress-percent");
                    document.getElementById("euro_4").classList.add("progress-euro--left");
                    document.getElementById("bulb_5").classList.add("progress-bulb");
                    document.getElementById("euro_5").classList.add("progress-eur--right");
                    document.getElementById("percent_6").classList.add("progress-percent--right");
                    document.getElementById("bulb_6").classList.add("progress-bulb--right");
                    document.getElementById("doll_5").classList.add("progress-doll--right");
                }
            });
        });
    });
}

function showNotification() {

    $(document).ready(function() {
        let windowHeight = $(window).height();

        $(document).on('scroll', function() {
            $('#show_notification').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    document.getElementById("notification").classList.add("notification--active");
                    document.getElementById("notification").classList.remove("notification");
                } else {
                    document.getElementById("notification").classList.add("notification");
                    document.getElementById("notification").classList.remove("notification--active");
                }
            });
        });

        $(document).on('scroll', function() {
            $('#hide_notification').each(function() {
                let self = $(this),
                    height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    document.getElementById("notification").classList.add("notification--hide");
                    document.getElementById("notification").classList.remove("notification--active");
                }
            });
        });
    });
}