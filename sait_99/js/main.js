
/*Вышло не очень, но я старался.*/

(function ($) {
    $(document).ready(function () {
        /*Форма обратной свзяи*/
        histori_main_page('#menu ul li a', ".page");
        /*Вызов формы с валидацией и её отправкой на почту*/
        getForm('.historyAPI',"#page_form_email" );
        /*Закрытие формы*/
        exit_form_email();
        /*Закрытие слайд бара*/
        exit_form_slaid();
        /*Рекламное окно с куки*/
        windowReklama();
        /*Главный прелоудер для перезагрузки страниц*/
        preloader();
        /*Галлеря*/
        histori_main_page("#woman_button a", ".page");
        /*Кольца Серьги Браслеты Цепочки*/
        histori_mini_page(".menu_li_p4 a", ".main_content_p4");
    });





    /*Прелоудер для Главной страницы*/
    function preloader(){
        document.body.onload=function(){
            setTimeout(function () {
                var preloader=document.getElementById('p-preloader');
                if(!preloader.classList.contains('done')){
                    preloader.classList.add('done');
                }
            },1000)
        }
    }

    /*Добавление Куки*/
    function getCookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
        {
            var cookie_string = name + "=" + escape(value);

            if ( exp_y )
            {
                var expires = new Date ( exp_y, exp_m, exp_d );
                cookie_string += "; expires=" + expires.toGMTString();
            }

            if ( path )
                cookie_string += "; path=" + escape ( path );

            if ( domain )
                cookie_string += "; domain=" + escape ( domain );

            if ( secure )
                cookie_string += "; secure";

            document.cookie = cookie_string;
        }
    }

    /*Рекламное окно с cookie*/
    function windowReklama() {
        var reklamka = document.cookie;
        if (reklamka == undefined || reklamka == 'predlojenie=0' || reklamka == "") {

            getCookie('predlojenie', 0, 2100, 11, 1);
            if (document.cookie == "predlojenie=0") {
                setTimeout(function () {
                    $('#reklama').fadeIn(1000);
                    getCookie('predlojenie', 1, 2100, 11, 1);
                }, 10 * 1000);
                $('#reklama_off').click(function () {
                    $('#reklama').fadeOut(1000);
                });
            }
            else if (document.cookie == 'predlojenie=1') {
                $('#reklama').css('display', 'none');
            }
        }
    }


    /*выход из формы get_e-mail*/
    function exit_form_email() {
        $(document).on("click", "#email_form_off", function () {
            $("#page_form_email").empty();
            $('#mini_load').fadeOut(1);

        });
    }
    function exit_form_slaid() {
        $(document).on("click", ".exite i", function () {
            $(".main_content_p4").empty();
            $('#mini_load').fadeOut(1);

        });
    }

    /*Ajax Загрузки для главных страниц*/
    function histori_main_page(clickHand, placeLoad) {
        $(clickHand).on('click', function (e) {
            // отменяем стандартное действие при клике
            e.preventDefault();
            // Получаем адрес страницы
            var url = $(this).attr('href');
            // Передаем адрес страницы в функцию
            getContent(url, true);
        });
        // Добавляем обработчик события popstate,
        // происходящего при нажатии на кнопку назад/вперед в браузере
        window.addEventListener("popstate", function (e) {
            // Передаем текущий URL
            getContent(location.pathname, false);
        });

        // Функция загрузки контента
        function getContent(url, addEntry) {
            $.ajax({
                beforeSend: function () {
                    $("#mini_load").fadeIn(500);
                },
                url:url,
                dataType:"html",
                success:function(data){
                    if(url=="/email_form"){
                        $(".page").css('display', 'block');
                        $(".load").load(function () {
                        $('#mini_load').fadeOut(500);
                        });
                    }
                    else{
                    $(".page").css('display', 'none');
                    // Обновление только текстового содержимого в сером блоке
                    $(placeLoad).html($(data).find(placeLoad).html());
                    $(".load").load(function () {
                        setTimeout(function () {
                            $('#mini_load').fadeOut(500);
                            $('.page').fadeIn(500);
                        }, 1000);
                    });

                            /*Кольца Серьги Браслеты Цепочки*/
                            histori_mini_page(".menu_li_p4 a", ".main_content_p4");

                    // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
                    // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
                    if (addEntry == true) {
                        // Добавляем запись в историю, используя pushState
                        history.pushState(null, null, url);
                    }
                    }
                },
                error:function () {
                    alert("NOT Ok");
                }
    });
        }
    }
    function getForm(clickHand, placeLoad) {
        $(clickHand).on('click', function (e) {
            // отменяем стандартное действие при клике
            e.preventDefault();
            // Получаем адрес страницы
            var url = $(this).attr('href');
            // Передаем адрес страницы в функцию
            getContent(url, true);
        });
        // Добавляем обработчик события popstate,
        // происходящего при нажатии на кнопку назад/вперед в браузере
        window.addEventListener("popstate", function (e) {
            // Передаем текущий URL
            getContent(location.pathname, false);
        });

        // Функция загрузки контента
        function getContent(url, addEntry) {
            $.ajax({
                url:url,
                dataType:"html",
                success:function(data){
                    setTimeout(function () {
                        $(".load").load(function () {
                            $(".page").css('display', 'block');
                            $('#mini_load').fadeOut(1);
                        });
                    }, 1000);
                    // Обновление только текстового содержимого в сером блоке
                    $(placeLoad).html($(data).find(placeLoad).html());
                    // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
                    // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
                    if (addEntry == true) {
                        // Добавляем запись в историю, используя pushState
                        history.pushState(null, null, url);
                    }
                    var pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                    var mail = $('#email'),
                        name = $('#name'),
                        comment = $('#comment');
                    $("#submit").click(function(e){
                        e.preventDefault();
                        console.log("validate");
                    if(!mail.val()){
                        mail.css('border-color', 'red');
                        return false;
                    }
                    else{
                        if(mail.val().search(pattern) == 0){
                            mail.css('border-color', 'green');
                            var fullUrl =  location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
                            e.preventDefault();
                            var formData = $("#email_form").serialize();
                            $("#msg").text("Подождите, идёт отправка сообщения...");
                            $.ajax({
                                url: fullUrl+'/send',
                                type: 'POST',
                                data: formData,
                                success: function(result) {
                                    if (!name.val()) {
                                        name.css('border-color', 'red');
                                    }
                                    else {
                                        name.css('border-color', 'green');
                                    }
                                    if (!comment.val()) {
                                        comment.css('border-color', 'red');
                                    }
                                    else {
                                        comment.css('border-color', 'green');
                                    }
                                    $("#msg").empty().text(result);
                                    /*Очистка формы после отправки*/
                                    mail.val("");
                                    name.val("");
                                    comment.val("");

                                },
                                error: function(e) {
                                    $("#msg").empty().text("Сообщение не было отправленно из-за ошибки, Error code:"+e.status +", Error message:"+e.statusText);
                                },
                                dataType: "html",
                                timeout: 60000
                            });
                        }else{
                            mail.css('background', 'red');
                            return false
                        }
                        return false
                    }
                    });
                },
                error:function () {
                    alert("NOT Ok");
                }
            });
        }
    }

    /*Загрузка контента в Галлерее*/
    function histori_mini_page(clickHandd, placeLoadd) {
        $(clickHandd).on('click', function (e) {
            // отменяем стандартное действие при клике
            e.preventDefault();
            // Получаем адрес страницы
            var url = $(this).attr('href');
            // Передаем адрес страницы в функцию
            getContent(url, true);
        });
        // Добавляем обработчик события popstate,
        // происходящего при нажатии на кнопку назад/вперед в браузере
        window.addEventListener("popstate", function (e) {
            // Передаем текущий URL
            getContent(location.pathname, false);
        });

        // Функция загрузки контента
        function getContent(url, addEntry) {
            $.ajax({
                beforeSend: function () {
                    $("#mini_load").fadeIn(500);
                },
                url:url,
                dataType:"html",
                success:function(data){
                    if(url=="/email_form"){
                        $(".load").load(function () {
                            $(".page").css('display', 'block');
                            $('#mini_load').fadeOut(500);
                        });
                    }
                    else{
                        $(".main_content_p4").css('display', 'none');
                        // Обновление только текстового содержимого в сером блоке
                        $(placeLoadd).html($(data).find(placeLoadd).html());
                        $(".load").load(function () {
                            setTimeout(function () {
                                $('#mini_load').fadeOut(500);
                                $('.main_content_p4').fadeIn(500);
                            }, 1000);
                        });
                        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
                        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
                        if (addEntry == true) {
                            // Добавляем запись в историю, используя pushState
                            history.pushState(null, null, url);
                        }
                    }
                },
                error:function () {
                    alert("NOT Ok");
                }
            });
        }
    }
})(jQuery);