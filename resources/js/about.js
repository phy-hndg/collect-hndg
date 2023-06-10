$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        
        var imgfile = '../../resources/img/';
        var htmlfile = '../html/';


        var sliderList = document.getElementById("slider");

        // <li><<a href=""><img src=""></a></li>
        var slider_html00 = '<li><a href="';
        var slider_html01 = '"><img src="';
        var slider_html02 = '"></a></li>';

        var sliderhtml = '';

        for (let i = 0,cvrpass = '', htmlpass = '',datayear = ''; i < handg_top.length; i++) {
            if(handg_top[i]['cover'] === ''){
            
            }else{
                datayear = handg_top[i]['date']['year'] - 2000;
                cvrpass = imgfile + datayear + '/' + handg_top[i]['id'] + '/' + handg_top[i]['id'] + '-cvr.jpg';
                htmlpass = htmlfile + datayear + '/' + handg_top[i]['id'] + '.html';
                sliderhtml += slider_html00 + htmlpass + slider_html01 + cvrpass + slider_html02;
            }
        }

        sliderList.innerHTML = sliderhtml;


        $('.slider').slick({
            arrows: false,//左右の矢印はなし
            autoplay: true,//自動的に動き出すか。初期値はfalse。
            autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
            speed: 6900,//スライドのスピード。初期値は300。
            infinite: true,//スライドをループさせるかどうか。初期値はtrue。
            pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
            pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
            cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
            slidesToShow: 8,//スライドを画面に4枚見せる
            slidesToScroll: 1,//1回のスライドで動かす要素数
            responsive: [
                {
                breakpoint: 769,//モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 4,//スライドを画面に2枚見せる
                }
            },
            {
                breakpoint: 426,//モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 2.5,//スライドを画面に1.5枚見せる
                }
            }
        ]
        });
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
});