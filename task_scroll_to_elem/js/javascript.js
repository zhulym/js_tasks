$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#button').fadeIn("slow");
        } else {
            $('#button').fadeOut("slow");
        }
    })

    $('#button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
})

$(document).ready(() => {
    $('a').on('click', function () {

        const target = `#par${$(this).attr('class')}`;
        const firstTime = localStorage.getItem(target);
        let time;

        if (firstTime === null) {
            setTimeName();
        } else {
            const newClickTime = new Date().getTime();
            const checkTime = newClickTime - firstTime;
            if (checkTime <= 10000) {
                alert('!!!You have already checked this paragraph!!!');
                return;
            }
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(target).offset().top
        }, 400);

        setTimeName();

        function setTimeName() {
            time = new Date().getTime();
            localStorage.setItem(target, time);
        }
    })
})

