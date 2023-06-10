// html名取得
var htmlname = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];
// html名から.html削除
var idname = htmlname.replace(".html", "");

// =====ギャラリー画像生成=====
// listに画像をセット
// imgパス
var imgfile = '../../resources/img/';
// imgパス用　年フォルダ
var imgyear = handg_data[idname]['date']['year'] - 2000;
// imgパスの最終位置
var imgpass = imgfile + imgyear + '/' + idname + '/';
// img表示するところ(html)
var imglist = document.getElementById("img-list");
// liはじめ
var slider_html00 = '<li class="slider-item">';
// **typeimgの場合**orgsource入力手前まで
var slider_img00 = '<a href="';
// orgソース入力後、クラスまで（imgtypeが入る）（imgの場合Aタグの中）
var slider_html01 = '" class="';
// aタグ終わり、サムネのimg指定
var slider_html02 = '" data-group="imglist"><img src="';
// aタグ終わり、imgじゃない場合（ギャラリー表示しない）
var slider_yt00 = '"><img src="';
// a閉じタグ
var slider_img01 = '"></a>';
// **typeVideoの場合** source入れ込み手前まで
var slider_video00 = '<video playsinline muted controls src="';
// **typeVideoの場合** source入れ込み
var slider_video01 = '"></video>';
// li閉じタグ
var slider_html03 = '</li>';

var imglisthtml = '';

for (let i = 0; i < handg_data[idname]['imglist'].length; i++) {

    switch (handg_data[idname]['imglist'][i]['imgtype']){

        case 'img':
            imglisthtml += slider_html00 + slider_img00 + imgpass + handg_data[idname]['imglist'][i]['orgimg'] + slider_html01 + handg_data[idname]['imglist'][i]['imgtype'] + slider_html02 +  imgpass +handg_data[idname]['imglist'][i]['tmbimg'] + slider_img01 + slider_html03;

        break;

        case 'video':
            imglisthtml += slider_html00 + slider_video00 + imgpass + handg_data[idname]['imglist'][i]['orgimg'] + slider_video01 + slider_html03;

        break;

        case 'yturl':
            imglisthtml += slider_html00 + slider_img00 + handg_data[idname]['imglist'][i]['orgimg'] + slider_html01 + handg_data[idname]['imglist'][i]['imgtype'] + slider_yt00 +  imgpass +handg_data[idname]['imglist'][i]['tmbimg'] + slider_img01 + slider_html03;

        break;

        default:
            imglisthtml += slider_html00 + slider_img00 + imgfile + 'common/null.png' + slider_html01 + handg_data[idname]['imglist'][i]['imgtype'] + slider_html02 + imgfile + 'common/null.png' + slider_img01 + slider_html03;
        break;
    }


    
}

imglist.innerHTML = imglisthtml;

// =====日付設定=====
var date = document.getElementById("date");

// リンクはじめ
var linkhtml00 = ' <a href="';
// リンクを入れる関数
var linkhtml01 = '';
// リンク終わり
var linkhtml02 = ' " target="_blank" rel="noopener">🔗</a>';
// 配列かどうかの判定
var linkarr = 0;


// リンクが配列かどうかを調べる
if(Array.isArray(handg_data[idname]['date']['link'])){
    // 配列だった場合
    for (let i = 0; i < handg_data[idname]['date']['link'].length; i++) {
        // 配列全てに<a href="リンクURL（配列格納）" target="_blank" rel="noopener">🔗</a>をlinkhtml01に追加
        linkhtml01 += linkhtml00 + handg_data[idname]['date']['link'][i] + linkhtml02;
    }
    // 日付とリンクを合わせた表示をする
    date.innerHTML = '<div class="date-text">' + handg_data[idname]['date']['year'] + '/'+ handg_data[idname]['date']['month'] +'/'+ handg_data[idname]['date']['day'] + linkhtml01 +'</div>';
}else{

    if(handg_data[idname]['date']['link'] === ""){
    // リンクが無い場合はリンクマークを表示しない
    // 日付のみの表示をする
    date.innerHTML = '<div class="date-text">' + handg_data[idname]['date']['year'] + '/'+ handg_data[idname]['date']['month'] +'/'+ handg_data[idname]['date']['day'] +'</div>';
    }else{
    // 配列じゃない場合、<a href="リンクURL（配列格納）" target="_blank" rel="noopener">🔗</a>をlinkhtml01に格納
    var linkhtml01 = linkhtml00 + handg_data[idname]['date']['link'] + linkhtml02;
    // 日付とリンクを合わせた表示をする
    date.innerHTML = '<div class="date-text">' + handg_data[idname]['date']['year'] + '/'+ handg_data[idname]['date']['month'] +'/'+ handg_data[idname]['date']['day'] + linkhtml01 +'</div>';
    }
}

var titletext =  handg_data[idname]['date']['year'] + '/'+ handg_data[idname]['date']['month'] +'/'+ handg_data[idname]['date']['day'];

// =====platform設定=====

// platform取得
var platform = document.getElementById("platform");

// test用
// test用関数
var prtData = handg_data[idname]['plt'];

// 関数に合わせてplatform設定
switch(prtData){
    // Twitter
    case "twitter":
        platform.innerHTML = '<div class="twitter"><span>Twitter</span></div>';
        break;
    // Weverse-post
    case "wPost":
        platform.innerHTML = '<div class="w-post"><span>W-post</span></div>';
        break;
    // Weverse-live
    case "wLive":
        platform.innerHTML = '<div class="w-live"><span>W-live</span></div>';
        break;
    // YouTube
    case "youtube":
        platform.innerHTML = '<div class="youtube"><span>youtube</span></div>';
        break;
    // Instagram
    case "instagram":
        platform.innerHTML = '<div class="inst"><span>Instagram</span></div>';
        break;
    // Stage
    case "stage":
        platform.innerHTML = '<div class="stage"><span>stage</span></div>';
        break;
    // TV
    case "tv":
        platform.innerHTML = '<div class="tv"><span>TV</span></div>';
        break;
    // Other
    case "other":
        platform.innerHTML = '<div class="other"><span>Other</span></div>';
        break;
    default:
        platform.innerHTML = '<div class="twitter">hndg</div>';
        break;
}


// =====sender設定=====
var sender = document.getElementById("sender");

// test用
// test用関数
var senderData = handg_data[idname]['sender'];

// 関数に合わせてplatform設定
switch(senderData){
    // Twitter
    case "hn":
        sender.innerHTML = '<div class="hn"><span>🐮hn</span></div>';
        break;
    // Weverse-post
    case "dg":
        sender.innerHTML = '<div class="dg"><span>🐰dg</span></div>';
        break;
    // Weverse-live
    case "hndg":
        sender.innerHTML = '<div class="hndg"><span>🐮🐰hndg</span></div>';
        break;
    // YouTube
    case "tr":
        sender.innerHTML = '<div class="tr"><span>💎TREASURE</span></div>';
        break;
    // Instagram
    case "teume":
        sender.innerHTML = '<div class="teume"><span>💅teume</span></div>';
        break;
    default:
        sender.innerHTML = '<div class="hndg"><span>🐮🐰</span></div>';
        break;
}

var tag = document.getElementById("tag");

// =====TAG設定=====

// タグが配列かどうかを調べる
if(Array.isArray(handg_data[idname]['tag'])){
    for (let i = 0; i < handg_data[idname]['tag'].length; i++) {
        if(tag === "bitter") {
            tag.insertAdjacentHTML('beforeend', '<span class="bitter">#ツン </span>');
        }else if(handg_data[idname]['tag'][i] === "sweet") {
            tag.insertAdjacentHTML('beforeend', '<span class="sweet">#デレ </span>');
        }else if(handg_data[idname]['tag'][i] === "youth") {
            tag.insertAdjacentHTML('beforeend', '<span class="youth">#青春 </span>');
        }else if(handg_data[idname]['tag'][i] === "mill") {
            tag.insertAdjacentHTML('beforeend', '<span class="mill">#匂わせ </span>');
        }else if(handg_data[idname]['tag'][i] === "gag") {
            tag.insertAdjacentHTML('beforeend', '<span class="gag">#面白 </span>');
        }else if(handg_data[idname]['tag'][i] === "quarrel") {
            tag.insertAdjacentHTML('beforeend', '<span class="quarrel">#小競り合い </span>');
        }else if(handg_data[idname]['tag'][i] === "robinson") {
            tag.insertAdjacentHTML('beforeend', '<span class="robinson">#ふたりだけの世界 </span>');
    
        }else if(handg_data[idname]['tag'][i] === "tShot") {
            tag.insertAdjacentHTML('beforeend', '<span class="tShot">#ツーショ </span>');
        }else if(handg_data[idname]['tag'][i] === "selca") {
            tag.insertAdjacentHTML('beforeend', '<span class="selca">#セルカ </span>');
        }else if(handg_data[idname]['tag'][i] === "aSelca") {
            tag.insertAdjacentHTML('beforeend', '<span class="aSelca">#他撮り </span>');
        }else if(handg_data[idname]['tag'][i] === "team") {
            tag.insertAdjacentHTML('beforeend', '<span class="team">#複数 </span>');
        }else if(handg_data[idname]['tag'][i] === "event") {
            tag.insertAdjacentHTML('beforeend', '<span class="event">#イベント </span>');
        }else if(handg_data[idname]['tag'][i] === "piano") {
            tag.insertAdjacentHTML('beforeend', '<span class="piano">#ピアノ </span>');
        }else if(handg_data[idname]['tag'][i] === "foods") {
            tag.insertAdjacentHTML('beforeend', '<span class="foods">#食べ物 </span>');
        }else if(handg_data[idname]['tag'][i] === "muscle") {
            tag.insertAdjacentHTML('beforeend', '<span class="muscle">#筋肉 </span>');
    
        }else if(handg_data[idname]['tag'][i] === "dance") {
            tag.insertAdjacentHTML('beforeend', '<span class="dance">#ダンス </span>');
        }else if(handg_data[idname]['tag'][i] ==="bb") {
            tag.insertAdjacentHTML('beforeend', '<span class="bb">#バスケ </span>');
        }else if(handg_data[idname]['tag'][i] === "tt") {
            tag.insertAdjacentHTML('beforeend', '<span class="tt">#卓球 </span>');
        }else if(handg_data[idname]['tag'][i] === "fm") {
            tag.insertAdjacentHTML('beforeend', '<span class="fm">#ファンメイド </span>');
        }else if(handg_data[idname]['tag'][i] === "tbd") {
            tag.insertAdjacentHTML('beforeend', '<span class="tbd">#情報不足 </span>');
        }else{
            tag.insertAdjacentHTML('beforeend', '<span class="tbd">#error </span>');
        }
    }
}else{
    switch(handg_data[idname]['tag']){
        case "bitter":
            tag.insertAdjacentHTML('beforeend', '<span class="bitter">#ツン </span>');
        break;
        case "sweet":
            tag.insertAdjacentHTML('beforeend', '<span class="sweet">#デレ </span>');
        break;
        case "youth":
            tag.insertAdjacentHTML('beforeend', '<span class="youth">#青春 </span>');
        break;
        case "mill":
            tag.insertAdjacentHTML('beforeend', '<span class="mill">#匂わせ </span>');
        break;
        case "gag":
            tag.insertAdjacentHTML('beforeend', '<span class="gag">#面白 </span>');
        break;
        case "quarrel":
            tag.insertAdjacentHTML('beforeend', '<span class="quarrel">#小競り合い </span>');
        break;
        case "robinson":
            tag.insertAdjacentHTML('beforeend', '<span class="robinson">#ふたりだけの世界 </span>');
        break;
        case "tShot":
            tag.insertAdjacentHTML('beforeend', '<span class="tShot">#ツーショ </span>');
        break;
        case "selca":
            tag.insertAdjacentHTML('beforeend', '<span class="selca">#セルカ </span>');
        break;
        case "aSelca":
            tag.insertAdjacentHTML('beforeend', '<span class="aSelca">#他撮り </span>');
        break;
        case "team":
            tag.insertAdjacentHTML('beforeend', '<span class="team">#複数 </span>');
        break;
        case "event":
            tag.insertAdjacentHTML('beforeend', '<span class="event">#イベント </span>');
        break;
        case "piano":
            tag.insertAdjacentHTML('beforeend', '<span class="piano">#ピアノ </span>');
        break;
        case "foods":
            tag.insertAdjacentHTML('beforeend', '<span class="foods">#食べ物 </span>');
        break;
        case "muscle":
            tag.insertAdjacentHTML('beforeend', '<span class="muscle">#筋肉 </span>');
        break;
        case "dance":
            tag.insertAdjacentHTML('beforeend', '<span class="dance">#ダンス </span>');
        break;
        case "bb":
            tag.insertAdjacentHTML('beforeend', '<span class="bb">#バスケ </span>');
        break;
        case "tt":
            tag.insertAdjacentHTML('beforeend', '<span class="tt">#卓球 </span>');
        break;
        case "fm":
            tag.insertAdjacentHTML('beforeend', '<span class="fm">#ファンメイド </span>');
        break;
        case "tbd":
            tag.insertAdjacentHTML('beforeend', '<span class="tbd">#情報不足 </span>');
        break;
        default:
            tag.insertAdjacentHTML('beforeend', '<span class="tbd">#error </span>');
        break;
    }
}



// =====caption設定=====
var caption = document.getElementById("caption");

caption.innerHTML = handg_data[idname]['cpt'];