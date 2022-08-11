$(function () {


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

    priceDiv = $('.price');
    // console.log(divs, 'II')


    var day = 0
    function setDays(specidicDate, getlastday) {
        $('.numDiv').children('span').each(
            (index, value) => {

                if (index >= specidicDate.getDay() && day < getlastday) {
                    // console.log('開始',index )
                    day += 1;
                    $(value).append(day);
                    priceDiv[index].append('12$')
                    // console.log(day)
                }
            }
        )
    };

    function setEmpty() {
        $('.numDiv').children('span').each(
            (index, value) => {
                $(value).empty();
                priceDiv.empty();
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




    // console.log(showSpllMonth);
    // console.log(years);

    options = $('#monthSelector').children('option')

    options.each(
        (i, value) => {
            // console.log('たら',value);
            $(value).append(showSpllMonth[i] + ' ' + years[i])
        });



    weekPositionsX = []

    // $('#pickerFirstRow').children('td').each(
    //     (i, value) => {
    //         weekPositionsX.push(value.getBoundingClientRect().x );
    //         // + (value.getBoundingClientRect().width / 2)
    //     });

    // console.log(weekPositionsX,'X');



    // $('.weeks > li').each(
    //     (i, value) => {


    //         // if (value.getBoundingClientRect().x < weekPositionsX[i]){
    //         //     num = weekPositionsX[i] - value.getBoundingClientRect().x
    //         //     $(value).css({top: 0, left:  num, position:'relative'});

    //         //     // console.log(value.getBoundingClientRect().x);
    //         // }

    //         // console.log($('.pickTd').eq(0).width());
    //         // console.log($(value).width('53.25px'))



    //     });
    $('.pickTd').each(
        (i, value) => {
            if (i < 6) {
                // console.log(i);
                // console.log($(value).width())
                $('.weeks > li').eq(i).width(`${$(value).width()}px`)

            }
        });
    // $('.dateBtn').eq(0).css({'padding-right':'6px'})
    // $('.dateBtn').eq(6).css({'padding-left':'6px'})

    $('.dateBtn').on('click',(value) => {

        $('.numDiv').css({'background':'white','color':'black'})
        index = $('.dateBtn').index(value.currentTarget)
        $('.numDiv').eq(index).css({'background':'#304AF2','color':'white'})

        // $('.dateBtn').each((i,v) => {
        //     console.log(v)
        //     if (v == value){
        //         console.log('ひゃなん')
        //     }
        // });
        // console.log($(value).text());
        // console.log($('.dateBtn').index(value))
    });


    // $(document).ready(function () {
    //     if (window.performance.navigation.type == 2) {
    //         //遷移後に動かす処理

    //     }
    // });
    history.replaceState(null, null, null);
    $(window).on('popstate', function (e) {
        print('もどります')
        alert('もどります')
    });




});