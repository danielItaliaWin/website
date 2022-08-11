$(function () {

    // var current
    // if (now.getMonth() == 11) {
    //      current = new Date(now.getFullYear() + 1, 0, 1);
    // } else {
    //     current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    // }
    // console.log(month)
    // hh = $('select').width();
    // vv =  $('.origin').width();
    // ww =  $('#pin').width() + 20 + 10
    // // $('#ii').height(`${hh}px`);
    // console.log(vv - ww);
    // console.log(ww);

    // $('.calendarPop').hide();
    // $('.inputPop').hide();

    $('.selectionItem3').on('click', () => {
        getLatest()
        setInputXy()
        if ($('.calendarPop').is(":visible") === false) {
            $('.calendarPop').show();

            if ($(window).width() < 1000 && $(window).width() >= 600) {
                $('.modaHead2').show();

            } else if ($(window).width() < 600) {

                $('.calendarPop').addClass('new');
                $('.calendarPopUpper').addClass('cn');
                $('#ch').addClass('tn');
                $('.calendarMonh').addClass('cm');
                $('.Md').addClass('mn');
                $('.Rows').addClass('rn');
                $('.john').addClass('jn');


                // $('.areaPopBtn').show();
                $('.calendarPopLine').show();
                $('.calendarPop').css({ 'top': `${$(window).scrollTop()}px`, 'left': `${0}px` })
                $('.modaHead2').show();
                $('body').css({ 'overflow-y': 'hidden' });

            }
        } else {
            $('.modaHead2').hide();
            $('.calendarPop').hide();
        }

    });

    $('.selectionItem').on('click', () => {
        getLatest()
        setInputXy()
        if ($('.inputPop').is(":visible") === false) {
            // if(  $(window).width() > 1000){
            $('.inputPop').show();

            if ($(window).width() < 1000 && $(window).width() >= 600) {
                $('.modaHead0').show();

            } else if ($(window).width() < 600) {
                $('.modaHead0').show();
                $('.inputPopLine').show();

                $('.inputPop').addClass('new');
                $('.inputPopUpper').addClass('an');
                $('.inputDiv').addClass('in');
                $('#Input').addClass('pn')
                $('.srUl').addClass('un');

                $('.inputPop').css({ 'top': `${$(window).scrollTop()}px`, 'left': `${0}px` })
                $('body').css({ 'overflow-y': 'hidden' });

            }

        } else {
            $('.modaHead0').hide();
            $('.inputPop').hide();
            // $('#clearBtn').hide();
            console.log('HI')
        }

    });


    $('.selectionItem4').on('click', () => {
        getLatest()
        setInputXy()
        if ($('.travellersPop').is(":visible") === false) {
            $('.travellersPop').show();

            if ($(window).width() < 1000 && $(window).width() >= 600) {
                $('.modaHead3').show();

            } else if ($(window).width() < 600) {
                $('.modaHead3').show();
                $('.travelPopLine').show();
                $('.areaPopBtn').show();

                $('.travellersPop').addClass('new');
                $('.travelPopUpper').addClass('cn');
                $('.sp').addClass('tn');
                $('.selectPassengers').addClass('sn');

                $('.travellersPop').css({ 'top': `${$(window).scrollTop()}px`, 'left': `${0}px` })
                $('body').css({ 'overflow-y': 'hidden' });

            }



        } else {
            $('.travellersPop').hide();
        }
    });

    $('.selectionItem2').on('click', () => {
        getLatest()
        setInputXy()
        if ($('.areaPop').is(":visible") === false) {
            $('.areaPop').show();

            if ($(window).width() < 1000 && $(window).width() >= 600) {
                $('.modaHead').show();
            } else if ($(window).width() < 600) {

                // console.log();

                $('.modaHead').show();
                $('.areaPopLine').show();
                $('.areaPop').css({ 'top': `${$(window).scrollTop()}px`, 'left': `${0}px` })
                $('body').css({ 'overflow-y': 'hidden' });
                // $('.areaPopBtn').show();
                // $('.Ath').css({ 'border-bottom': 'none', 'margin': '0', 'padding': '0' });
                $('.areaPop').addClass('new');
                $('.areaPopUpper').addClass('an');
                $('.Ath').addClass('tn');
                $('.areaUl').addClass('un');
                $('.areaList').addClass('ln');
                $('.areaBtn').addClass('bn');
            }

        } else {
            $('.areaPop').hide();
        }

    });


    // $('.modal').css({'left':`${300}px`});




    $(document).on('click', (e) => {
        if (e.target.closest('.calendarPop')) {
        } else {
            if (e.target.closest('.selectionItem3')) {

            } else {
                $('.calendarPop').hide();
                $('.modaHead2').hide();
            };
        }


        if (e.target.closest('.inputPop')) {
        } else {
            if (e.target.closest('.selectionItem')) {
                // console.log('P')
            } else {
                $('.inputPop').hide();
                $('#Input').val('')
                $(".srUl").empty();
            };
        }

        if (e.target.closest('.travellersPop')) {
        } else {
            if (e.target.closest('.selectionItem4')) {
                // console.log('P')
            } else {
                $('.travellersPop').hide();
            };
        }



        if (e.target.closest('.areaPop')) {
        } else {
            if (e.target.closest('.selectionItem2')) {
                // console.log('P')
            } else {

                $('.backgroundRatio').hide();
                $('.modaHead').hide();
                $('.areaPop').hide();
                $('.areaPop').hide();
                $('.areaPop').removeClass('new');
                // $('.areaPop').css({'top':`${50}%`,'left':`${50}%`})
            };
        }


        // if (e.target.closest('.modal')) {
        // } else {
        //     if (e.target.closest('.selectionItem')) {
        //     }else{
        //         $('.modal').hide();
        //         $('.backgroundRatio').hide()
        //         $('body').css({'overflow-y':'scroll'});
        //     };
        // };





    });




    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });



    function send_origin(origin) { //出発地点を入力する関数
        $.ajax({
            url: "ajax_sendOrigin/",
            type: 'post',
            dataType: 'text',
            data: { "origin": origin },
        }).done(function (data) {
            console.log('成功2.5');
        }).fail(function (xhr, status, errmsg) {
            console.log('failedTAP');
        });
    }


    $(window).on("beforeunload", function () {
        // console.log('はなれます');
        browser = false;
    });

    var browser = false; //ブラウザが開いているかの確認用




    $(window).on("pageshow", function () {//最初にページを読み込んだとき 同じウィンドウまたはタブの中で他のページからそのページへ移動してきたとき モバイル OSで凍結されたページを復元したとき  ブラウザーの進む、戻るボタンを利用してこのページに戻ったとき
        console.log('postされていないのか');

        // $.ajax({ //サイトが開かれたことを通知する
        //     url: "/polls/ajax_sendOpen/",
        //     type: 'post',
        //     dataType: 'text',
        //     data: { "message": 'OPEN'},
        //     }).done(function(data){
        //         console.log('成功OPENSITE');
        //         browser = true;

        //     }).fail(function(xhr, status, errmsg){
        //     console.log('failedNOTOPENSITE');
        // });

        it = $('#Input').val();
        if (it != '') {
            // 出発地がすでに入力されている場合
            // console.log(browser, 'やま1');
            // (async () => {
            //     const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))
            //     while (true) {
            //         await sleep(1)
            //         console.log(browser, 'たら');
            //         if (browser == true) {
            //             send_origin(text);
            //             break;
            //         }
            //     };
            // })()
        };
    });

    // console.log('たなか')
    if (browser == false) { //ブラウザが開かれていない時
        // $.ajax({ //サイトが開かれたことを通知する
        //     url: "/polls/ajax_sendOpen/",
        //     type: 'post',
        //     dataType: 'text',
        //     data: { "message": 'OPEN'},
        //     }).done(function(data){
        //         console.log('成功OPENSITE');
        //         browser = true;

        //     }).fail(function(xhr, status, errmsg){
        //     console.log('failedNOTOPENSITE');
        // });
    }



    var tabArrey = []

    $('#Input').keyup(function () {
        $('#clearBtn').show();
        var param = {
            "text": $('#Input').val(),
        };
        $.ajax({ //空港が検索された時に検索結果の取得
            url: "/polls/ajax_value/",
            type: 'post',
            dataType: 'text',
            data: param,
        }).done(function (data) {
            console.log('成功');

            if ($('.inputPop').is(":visible") === false) {
                $('.inputPop').show();
            }

            let arrey = JSON.parse(data);
            tabArrey = arrey;
            // console.log(tabArrey)
            $(".srUl").empty();

            for (var i in arrey) {
                lists = $('.listBtn').text()
                let result = lists.indexOf(arrey[i]);

                if (result == -1) {
                    let btn = $("<button></button>", {
                        "class": "listBtn",
                        type: 'button',
                        on: {
                            click: function (event) {//検索タブをタップした時

                                $('.inputPop').hide();
                                s = $(event.target).text();
                                $('#apt').text(s);

                                var index = $('button.listBtn').index(this);
                                while(true){
                                    if($('button.listBtn').length != 1){
                                        console.log('くりかえし')
                                        for (var Q in arrey){
                                            if (Q != index){
                                                $('button.listBtn').eq(Q).remove()
                                                $('.showList').eq(Q).remove()
                                            }
                                        };
                                    }else{
                                        break
                                    };
                                }


                                text = ''
                                var match = /\r|\n/.exec(s);
                                if (match) {
                                    ns = s.replaceAll(/\s/g, '');
                                    text = ns
                                } else {
                                    text = s
                                }

                                $('#Input').val(text);
                                (async () => {
                                    const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))
                                    while (true) {
                                        await sleep(1)
                                        if (browser == true) {
                                            send_origin(text);
                                            break;
                                        }
                                    };
                                })()
                            }

                        }
                    });

                    li = $("<li></li>", {
                        "class": "showList"
                    });
                    $(li).append(btn);

                    $('.srUl').append(li);
                    pic = DJANGO_IMAGE_URL;
                    let img = $('<img></img>', { "id": "apimg", });
                    img.attr('src', pic);
                    $(btn).append(img);
                    let span = $(`<span>${arrey[i]}</span>`, { "id": "listLoc", });
                    $(btn).append(span);
                };


            }

            if ($('#Input').val() == '') {
                $('#clearBtn').hide();
                $(".srUl").empty();


            };

        }).fail(function (xhr, status, errmsg) {
            console.log('failed');
        })




    });

    $('#clearBtn').on('click', () => {
        $('#Input').val('')
        $('#clearBtn').hide();
        $(".srUl").empty();
    });

    $('.btn').on('click', () => { //検索ボタンが押された時
        mont = $('#dp').text();
        origin = $('#Input').val();
        area = $("#monthSelector").val();

        if (area == 'Select Area' || mont == 'Select Month' || origin == '') {
            console.log('EMPTY')
        } else {

            // タブがタップされずに入力された時
            if (tabArrey != []) {

                if (tabArrey.includes(origin)) {
                    // ブラウザが出ていない可能性がある
                    console.log(origin, 'たらんちゅら');
                    (async () => {
                        const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))
                        while (true) {
                            await sleep(1)
                            console.log(browser, 'たらwdwdwd');
                            if (browser == true) {
                                send_origin(origin);
                                break;
                            }
                        };
                    })()
                }

            }

            $.ajax({
                url: "templates/",
                type: 'post',
                dataType: 'text',
                data: { "message": 'OPEN' },
            }).done(function (data) {
                console.log('成功1.5');
                window.location.href = data;
            }).fail(function (xhr, status, errmsg) {
                console.log('failed');
            })
            $.ajax({
                url: "/polls/ajax_sendFind/",
                type: 'post',
                dataType: 'text',
                data: { "origin": origin, "month": mont, "area": area },
            }).done(function (data) {
                console.log('成功2');
                console.log(data)
            }).fail(function (xhr, status, errmsg) {
                console.log('failed');
            })

        }



    });


    // options = $('#monthSelector').children('option')
    // options = $('.Rows').children('buttton')


    var now = new Date();
    var monthNum = now.getMonth() + 1;
    // var year = time.year();

    var showMonth = []
    var years = []

    var num = 0
    while (showMonth.length < 8) {

        if (monthNum + num > 12) {
            switch (monthNum + num) {
                case 13:
                    showMonth.push(1);
                    break
                case 14:
                    showMonth.push(2);
                    break
                case 15:
                    showMonth.push(3);
                case 16:
                    showMonth.push(4);
                case 17:
                    showMonth.push(5);
                case 18:
                    showMonth.push(6);
                case 19:
                    showMonth.push(7);
                case 20:
                    showMonth.push(8);
            };
            years.push(now.getFullYear() + 1);
        } else {
            showMonth.push(monthNum + num);
            years.push(now.getFullYear());
        }


        num += 1;
    }







    const getLastDay = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const showSpllMonth = []

    for (var i in showMonth) {
        showSpllMonth.push(month[showMonth[i] - 1]);
        const lastDay = getLastDay(years[i], showMonth[i]);
        // console.log(lastDay);
    }

    // console.log(showSpllMonth[0] + ' ' + years[0]);

    const theMOnth = 6

    var today = new Date("2022/06/01");
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var wday = "（" + weekday[today.getDay()] + "）";
    // console.log(wday);

    // console.log(getLastDay(years[0], theMOnth), 'UU');

    var day = 0
    function setDays(specidicDate, getlastday) {
        $('.dateBtn').children('span').each(
            (index, value) => {
                // console.log('たら',value);

                if (index >= specidicDate.getDay() && day < getlastday) {
                    // console.log('開始',index )
                    day += 1;
                    $(value).append(day);

                    // console.log(day)
                }
            }
        )
    };

    function setEmpty() {
        $('.dateBtn').children('span').each(
            (index, value) => {
                $(value).empty();
            }
        )
        day = 0
    };

    setDays(new Date("2022/06/01"), getLastDay(years[0], theMOnth));





    $('#monthSelector').change(() => {
        m = $("#monthSelector option:selected").text().split(' ')[0]
        // if (m.length)

        setEmpty();

        setTimeout(function () {
            index = month.indexOf(m) + 1;
            console.log(index);
            console.log(index.toString().length, 'z');
            if (index.toString().length === 1) {
                setDays(new Date(`2022/0${index}/01`), getLastDay(years[0], index));
            } else {
                setDays(new Date(`2022/${index}/01`), getLastDay(years[0], index));
            }
        }, 500);
    });

    $('.rightBtn').on('click', () => {
        m = $("#monthSelector option:selected").text().split(' ')[0]

        if ($("#monthSelector option:selected").text().includes(showSpllMonth[showSpllMonth.length - 1]) == false) {
            setEmpty();

            setTimeout(function () {
                index = month.indexOf(m) + 1;
                if (index.toString().length === 1) {
                    setDays(new Date(`2022/0${index}/01`), getLastDay(years[0], index));
                } else {
                    setDays(new Date(`2022/${index}/01`), getLastDay(years[0], index));
                }
            }, 500);


            $('#monthSelector option:selected').removeAttr('selected').next('option').attr('selected', 'selected');
        }


    });

    $('.leftBtn').on('click', () => {
        m = $("#monthSelector option:selected").text().split(' ')[0]

        if ($("#monthSelector option:selected").text().includes(showSpllMonth[0]) == false) {
            setEmpty();

            setTimeout(function () {
                index = month.indexOf(m) + 1;
                if (index.toString().length === 1) {
                    setDays(new Date(`2022/0${index}/01`), getLastDay(years[0], index));
                } else {
                    setDays(new Date(`2022/${index}/01`), getLastDay(years[0], index));
                }
            }, 500);


            $('#monthSelector option:selected').removeAttr('selected').prev('option').attr('selected', 'selected');
        }
    });







    $('.Md').each(
        (i, value) => {
            // console.log('たら',value);
            $(value).append(showSpllMonth[i] + ' ' + years[i])
        });


    // for (var i in options) {

    //     // $(element).text('たら');
    //     // console.log(element);
    //  
    // }
    // console.log(showSpllMonth,years)

    v = $('.origin')[0].getBoundingClientRect().x;
    $('.inputPop').css({ left: v, });

    d = $('.destination')[0].getBoundingClientRect();
    pin = $('.img')[0].getBoundingClientRect();

    // $('#selectAlow').css({left:((d.x + d.width) - 30),top: 370});

    // console.log($('.destination').height(),'たら')

    // $('.datePicker').height(30);




    $('.Md').on('click', (event) => {
        s = $(event.target).text();
        console.log(s);
        $('.calendarPop').hide();
        $('#dp').text(s);
    });


    const currencys = ['Euro', 'Pound', 'Dollar']
    const visitP = $('.currencyText');
    var textNum = 1;
    var first = true;
    $('.currency').on('click', (event) => {

        $('.currencyText2').css("opacity", 0);
        $('.currencyText2').text(currencys[textNum]);

        visitP.each(function (index, element) {
            console.log($('.currencyText2').text());
            if (index == 0) {
                if (first == false) {
                    if (textNum == 2) {
                        $(this).text(currencys[0]);
                    } else {
                        $(this).text(currencys[textNum + 1]);
                    }
                }
            }

            element.style.opacity = 1;
            element.style.transform = `translate(${0}px,${-element.clientHeight}px)`
        });

        setTimeout(() => {
            $('.currencyText2').css("opacity", 1);
            back()
        }, 300);

        first = false;
    });

    function back() {
        visitP.each(function (index, element) {
            element.style.transform = `translate(${0}px,${0}px)`;
            element.style.opacity = 0;
            if (textNum == 2) {
                textNum = 0;
            } else {
                textNum += 1;
            }

            if (index == 1) {
                $(this).text(currencys[textNum]);
            }

        });
    };

    // visitCate.addEventListener('mouseleave', () => {
    //     visitP.forEach((element, index) => {
    //         element.style.transform = `translate(0px,${0}px)`
    //     });
    // });

    // $("#button").attr('disabled', true);

    var currentNUm = 1
    $('.passengerBtn1').on('click', (event) => {
        if (currentNUm > 1) {
            $('#PasNum').text(`${currentNUm -= 1}`)
            $('#paa').text(`${currentNUm}` + ' passengers')
        }
    });
    $('.passengerBtn').on('click', (event) => {
        if (currentNUm < 20) {
            $('#PasNum').text(`${currentNUm += 1}`)
            $('#paa').text(`${currentNUm}` + ' passengers')
        };

    });

    $('.areaBtn').on('click', (event) => {

        str = $(event.target).text();
        $('#sa').text(str);
        $('.areaPop').hide();
    });


    var selectItem1 = 0
    var selectItem2 = 0
    var selectItem3 = 0
    var selectItem4 = 0
    function getLatest() {
        selectItem1 = $('.selectionItem').offset();
        selectItem2 = $('.selectionItem2').offset();
        selectItem3 = $('.selectionItem3').offset();
        selectItem4 = $('.selectionItem4').offset();
    };





    function setInputXy() {
        $('.inputPop').css({ 'left': `${(selectItem1.left / $(window).width()) * 100}%`, 'top': `${selectItem1.top + $('.selectionItem').height() + 10}px` })
        $('.areaPop').css({ 'top': `${selectItem2.top + $('.selectionItem2').height() + 10}px`, 'left': `${(selectItem2.left / $(window).width()) * 100}%` })
        $('.calendarPop').css({ 'top': `${selectItem3.top + $('.selectionItem3').height() + 10}px`, 'left': `${(selectItem3.left / $(window).width()) * 100}%` })
        $('.travellersPop').css({ 'top': `${selectItem4.top + $('.selectionItem4').height() + 10}px`, 'left': `${(selectItem4.left / $(window).width()) * 100}%` })
    };;


    // $('.inputPop').css({'left':`${9.6}%`,'top':`${selectItem1.top + $('.selectionItem').height()}px`})
    // $('.areaPop').css({'top':`${selectItem2.top + $('.selectionItem2').height()}px`,'left':`${37}%`})
    // $('.calendarPop').css({'top':`${selectItem3.top + $('.selectionItem3').height()}px`,'left':`${56}%`})
    // $('.travellersPop').css({'top':`${selectItem4.top + $('.selectionItem4').height()}px`,'left':`${74}%`})
    getLatest()
    setInputXy()
    $('.modalBtn').on('click', (event) => {
        // $('.backgroundRatio').hide();
        // $('.modaHead').hide();
        $('.areaPop').hide();

        $('.modaHead').hide();
        $('.areaPop').removeClass('new');
        $('.areaPopUpper').removeClass('an');
        $('body').css({ 'overflow-y': 'scroll' });
        // $('.areaPopBtn').hide();
        $('.areaPopLine').hide();
        $('.areaUl').removeClass('un');
        $('.areaList').removeClass('ln');
        $('.areaBtn').removeClass('bn');
        $('.Ath').removeClass('tn');
    });

    $('.modalBtn2').on('click', (event) => {

        $('.modaHead2').hide();
        $('.calendarPop').hide();
        // $('.areaPopBtn').hide();
        $('.calendarPopLine').hide();

        $('.calendarPop').removeClass('new');
        $('.calendarPopUpper').removeClass('cn');
        $('#ch').removeClass('tn');
        $('.calendarMonh').removeClass('cm');
        $('.Md').removeClass('mn');
        $('.Rows').removeClass('rn');
        $('.john').removeClass('jn');


        $('body').css({ 'overflow-y': 'scroll' });
        // $('.calendarPopLine').removeClass();
    });


    $('.modalBtn3').on('click', (event) => {

        $('.modaHead3').hide();
        $('.travelPopLine').hide();
        $('.areaPopBtn').hide();
        $('.travellersPop').hide();

        $('.travellersPop').removeClass('new');
        $('.travelPopUpper').removeClass('cn');
        $('.sp').removeClass('tn');
        $('.selectPassengers').removeClass('sn');


        $('body').css({ 'overflow-y': 'scroll' });

    });


    $('.modalBtn0').on('click', (event) => {
        $('.modaHead0').hide();
        $('.inputPop').hide();
        $('.inputPopLine').hide();

        $('.inputPop').removeClass('new');
        $('.inputPopUpper').removeClass('an');
        $('.inputDiv').removeClass('in');
        $('#Input').removeClass('pn')
        $('.srUl').removeClass('un');
        $('body').css({ 'overflow-y': 'scroll' });
        // $('#Input').val('')
        // $(".srUl").empty();

    });


    $(window).on('resize', () => {

        // if ($(this).width() < 1000) {


        //     if (changeWin == true) {
        //         // console.log('ちゃな',$(this).width());
        //         getLatest();
        //         setInputXy();
        //         changeWin = false
        //     }

        // }
    });


    $('.areaPopBtn').on('click', (event) => {

        $('.modaHead3').hide();
        $('.travelPopLine').hide();
        $('.areaPopBtn').hide();
        $('.travellersPop').hide();

        $('.travellersPop').removeClass('new');
        $('.travelPopUpper').removeClass('cn');
        $('.sp').removeClass('tn');
        $('.selectPassengers').removeClass('sn');


        $('body').css({ 'overflow-y': 'scroll' });
    });

});