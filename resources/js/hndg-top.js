// 配列を日付順に並び変える
const sort_hndg = handg_top;
  
  // チーム昇順にしてからスコア降順にしたい
  sort_hndg.sort(function(a, b){
    // 年で並び替え
    if(a['date']['year'] !== b['date']['year']){
      // -1 かけて降順にする
      return (a['date']['year'] - b['date']['year']) * -1
    }
    // 月で並び替え
    if(a['date']['month'] !== b['date']['month']){
      // -1 かけて降順にする
      return (a['date']['month'] - b['date']['month']) * -1
    }
    // 日で並び替え
    if(a['date']['day'] !== b['date']['day']){
        // -1 かけて降順にする
        return (a['date']['day'] - b['date']['day']) * -1
    }
    // 優先度で並び替え
    if(a['date']['priority'] !== b['date']['priority']){
        // -1 かけて降順にする
        return (a['date']['priority'] - b['date']['priority']) * -1
    }
    return 0
  })

$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

var imgfile = '../../resources/img/';
var htmlfile = '../../html/';


var galleryList = document.getElementById("galleryList");
var gallery_html00 = '<li id="';
var gallery_html01 = '"><a href="';
var gallery_html02 = '"><img src="';
var gallery_html03 = '"><p>';
var gallery_html04 = '</p></a></li>';

var galleryhtml = '';

for (let i = 0,cvrpass = '', htmlpass = '',datayear = ''; i < sort_hndg.length; i++) {
    datayear = sort_hndg[i]['date']['year'] - 2000;
    htmlpass = htmlfile + datayear + '/' + sort_hndg[i]['id'] + '.html';
    if(sort_hndg[i]['cover'] === ''){
        cvrpass = imgfile + 'common/cover-null.png'; 
    }else{
        cvrpass = imgfile + datayear + '/' + sort_hndg[i]['id'] + '/' + sort_hndg[i]['cover'];
    }
    galleryhtml += gallery_html00 + sort_hndg[i]['id'] + gallery_html01 + htmlpass + gallery_html02 +  cvrpass + gallery_html03 + sort_hndg[i]['date']['year'] + '/'+ sort_hndg[i]['date']['month'] +'/'+ sort_hndg[i]['date']['day'] + gallery_html04;
}


galleryList.innerHTML = galleryhtml;

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる


//=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
$('.splashbg1').on('animationend', function() { 
//この中に動かしたいJSを記載
});
//=====ここまで背景が伸びた後に動かしたいJSをまとめる

});

function sp_pltClick() {
    sp_plt = document.getElementById('sp_plt');
    if(sp_plt.classList.contains('active') == false) {
        sp_plt.style.display ="none";
        document.querySelector('#sp_plt').classList.toggle('active');
    }else{
        sp_plt.style.display ="block";
        document.querySelector('#sp_plt').classList.toggle('active');
    }
            
}
function sp_sndClick() {
    sp_snd = document.getElementById('sp_snd');
    if(sp_snd.classList.contains('active') == false) {
        sp_snd.style.display ="none";
        document.querySelector('#sp_snd').classList.toggle('active');
    }else{
        sp_snd.style.display ="block";
        document.querySelector('#sp_snd').classList.toggle('active');
    }
            
}
function sp_tagClick() {
    sp_tag = document.getElementById('sp_tag');
    if(sp_tag.classList.contains('active') == false) {
        sp_tag.style.display ="none";
        document.querySelector('#sp_tag').classList.toggle('active');
    }else{
        sp_tag.style.display ="block";
        document.querySelector('#sp_tag').classList.toggle('active');
    }
            
}

// sort
var newclass = document.getElementById('new');
var oldclass = document.getElementById('old');
// platform
var twclass = document.getElementById('tw-f');
var wPclass = document.getElementById('wp-f');
var wLclass = document.getElementById('wl-f');
var ytclass = document.getElementById('yt-f');
var igclass = document.getElementById('ig-f');
var stclass = document.getElementById('st-f');
var tvclass = document.getElementById('tv-f');
var otclass = document.getElementById('ot-f');
// sender
var hndgclass = document.getElementById('hndg-f');
var hnclass = document.getElementById('hn-f');
var dgclass = document.getElementById('dg-f');
var trclass = document.getElementById('tr-f');
var teumeclass = document.getElementById('teume-f');
var galleryList_id = document.getElementById('galleryList');

// sort new の切り替え
function newClick() {
        // newがONでoldがOFFのとき
    if( newclass.classList.contains('n_off') == false){ 
        // newをOFFにoldをONに
        document.querySelector('#new').classList.toggle('n_off');
        document.querySelector('#old').classList.toggle('o_off');
        galleryList_id.style.flexFlow = 'wrap-reverse row-reverse';
        }else{
            document.querySelector('#new').classList.toggle('n_off');
            document.querySelector('#old').classList.toggle('o_off');
            galleryList_id.style.flexDirection = 'row';
            galleryList_id.style.flexFlow = '';
        }
}
// sort old の切り替え
function oldClick() {
    // newがOFFでoldがONのとき
    if( newclass.classList.contains('n_off') == true & oldclass.classList.contains('o_off') == false){ 
        // newをONにoldをOFFに
        document.querySelector('#new').classList.toggle('n_off');
        document.querySelector('#old').classList.toggle('o_off');
        galleryList_id.style.flexDirection = 'row';
        galleryList_id.style.flexFlow = '';
        }else{ 
        // newをOFFにoldをONに
        document.querySelector('#new').classList.toggle('n_off');
        document.querySelector('#old').classList.toggle('o_off');
        galleryList_id.style.flexFlow = 'wrap-reverse row-reverse';
        }
}

// =====filter用設定=====
// platform
let tw_idlist = [];
let wp_idlist = [];
let wl_idlist = [];
let yt_idlist = [];
let ig_idlist = [];
let st_idlist = [];
let tv_idlist = [];
let ot_idlist = [];
// Twitter
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'twitter') {
        tw_idlist[tw_idlist.length] = sort_hndg[i]['id'];
    }
}
// wPost
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'wPost') {
        wp_idlist[wp_idlist.length] = sort_hndg[i]['id'];
    }
}
// wLive
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'wLive') {
        wl_idlist[wl_idlist.length] = sort_hndg[i]['id'];
    }
}
// youtube
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'youtube') {
        yt_idlist[yt_idlist.length] = sort_hndg[i]['id'];
    }
}
// instagram
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'instagram') {
        ig_idlist[ig_idlist.length] = sort_hndg[i]['id'];
    }
}
// stage
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'stage') {
        st_idlist[st_idlist.length] = sort_hndg[i]['id'];
    }
}
// tv
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'tv') {
        tv_idlist[tv_idlist.length] = sort_hndg[i]['id'];
    }
}
// other
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['plt'] === 'other') {
        ot_idlist[ot_idlist.length] = sort_hndg[i]['id'];
    }
}

// sender
let hndg_idlist = [];
let hn_idlist = [];
let dg_idlist = [];
let tr_idlist = [];
let teume_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['sender'] === 'hndg') {
        hndg_idlist[hndg_idlist.length] = sort_hndg[i]['id'];
    }
}
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['sender'] === 'hn') {
        hn_idlist[hn_idlist.length] = sort_hndg[i]['id'];
    }
}
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['sender'] === 'dg') {
        dg_idlist[dg_idlist.length] = sort_hndg[i]['id'];
    }
}
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['sender'] === 'tr') {
        tr_idlist[tr_idlist.length] = sort_hndg[i]['id'];
    }
}
for (let i = 0; i < sort_hndg.length; i++) {
    if(sort_hndg[i]['sender'] === 'teume') {
        teume_idlist[teume_idlist.length] = sort_hndg[i]['id'];
    }
}

// for(var i = 0; i < tw_list.length; i++) {
//     tw_idlist[tw_idlist.length] = document.getElementById(tw_list[i]);
// }
// alert(tw_idlist);


// filters
// Twitter
function twClick() {
    for(var i = 0,id =""; i < tw_idlist.length; i++) {
        id = document.getElementById(tw_idlist[i]);
        id.style.display ="block";
    }
    if( twclass.classList.contains('tw_off') == true ){
       
        document.querySelector('#tw-f').classList.toggle('tw_off');
        document.querySelector('#sp_tw-f').classList.toggle('tw_off');
    }else{
        for(var i = 0,id =""; i < tw_idlist.length; i++) {
            id = document.getElementById(tw_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tw-f').classList.toggle('tw_off');
        document.querySelector('#sp_tw-f').classList.toggle('tw_off');

    }
}
// wp
function wpClick() {
    if( wPclass.classList.contains('wp_off') == true ){
        for(var i = 0,id =""; i < wp_idlist.length; i++) {
            id = document.getElementById(wp_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#wp-f').classList.toggle('wp_off');
        document.querySelector('#sp_wp-f').classList.toggle('wp_off');
    }else{
        for(var i = 0,id =""; i < wp_idlist.length; i++) {
            id = document.getElementById(wp_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#wp-f').classList.toggle('wp_off');
        document.querySelector('#sp_wp-f').classList.toggle('wp_off');
    }
}
// wl
function wlClick() {
    if( wLclass.classList.contains('wl_off') == true ){
        for(var i = 0,id =""; i < wl_idlist.length; i++) {
            id = document.getElementById(wl_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#wl-f').classList.toggle('wl_off');
        document.querySelector('#sp_wl-f').classList.toggle('wl_off');
    }else{
        for(var i = 0,id =""; i < wl_idlist.length; i++) {
            id = document.getElementById(wl_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#wl-f').classList.toggle('wl_off');
        document.querySelector('#sp_wl-f').classList.toggle('wl_off');
    }
}
// youtube
function ytClick() {
    if( ytclass.classList.contains('yt_off') == true ){
        for(var i = 0,id =""; i < yt_idlist.length; i++) {
            id = document.getElementById(yt_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#yt-f').classList.toggle('yt_off');
        document.querySelector('#sp_yt-f').classList.toggle('yt_off');
    }else{
        for(var i = 0,id =""; i < yt_idlist.length; i++) {
            id = document.getElementById(yt_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#yt-f').classList.toggle('yt_off');
        document.querySelector('#sp_yt-f').classList.toggle('yt_off');
    }
}
// Instagram
function igClick() {
    if( igclass.classList.contains('ig_off') == true ){
        for(var i = 0,id =""; i < ig_idlist.length; i++) {
            id = document.getElementById(ig_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#ig-f').classList.toggle('ig_off');
        document.querySelector('#sp_ig-f').classList.toggle('ig_off');
    }else{
        for(var i = 0,id =""; i < ig_idlist.length; i++) {
            id = document.getElementById(ig_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#ig-f').classList.toggle('ig_off');
        document.querySelector('#sp_ig-f').classList.toggle('ig_off');
    }
}
// stage
function stClick() {
    if( stclass.classList.contains('st_off') == true ){
        for(var i = 0,id =""; i < st_idlist.length; i++) {
            id = document.getElementById(st_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#st-f').classList.toggle('st_off');
        document.querySelector('#sp_st-f').classList.toggle('st_off');
    }else{
        for(var i = 0,id =""; i < st_idlist.length; i++) {
            id = document.getElementById(st_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#st-f').classList.toggle('st_off');
        document.querySelector('#sp_st-f').classList.toggle('st_off');
    }
}
// tv
function tvClick() {
    if( tvclass.classList.contains('tv_off') == true ){
        for(var i = 0,id =""; i < tv_idlist.length; i++) {
            id = document.getElementById(tv_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#tv-f').classList.toggle('tv_off');
        document.querySelector('#sp_tv-f').classList.toggle('tv_off');
    }else{
        for(var i = 0,id =""; i < tv_idlist.length; i++) {
            id = document.getElementById(tv_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tv-f').classList.toggle('tv_off');
        document.querySelector('#sp_tv-f').classList.toggle('tv_off');
    }
}
// ot
function otClick() {
    if( otclass.classList.contains('ot_off') == true ){
        for(var i = 0,id =""; i < ot_idlist.length; i++) {
            id = document.getElementById(ot_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#ot-f').classList.toggle('ot_off');
        document.querySelector('#sp_ot-f').classList.toggle('ot_off');
    }else{
        for(var i = 0,id =""; i < ot_idlist.length; i++) {
            id = document.getElementById(ot_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#ot-f').classList.toggle('ot_off');
        document.querySelector('#sp_ot-f').classList.toggle('ot_off');
    }
}
// filter hndg-f の切り替え
function hndgClick() {
    if( hndgclass.classList.contains('hndg_off') == true ){
        for(var i = 0,id =""; i < hndg_idlist.length; i++) {
            id = document.getElementById(hndg_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#hndg-f').classList.toggle('hndg_off');
        document.querySelector('#sp_hndg-f').classList.toggle('hndg_off');
    }else{
        for(var i = 0,id =""; i < hndg_idlist.length; i++) {
            id = document.getElementById(hndg_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#hndg-f').classList.toggle('hndg_off');
        document.querySelector('#sp_hndg-f').classList.toggle('hndg_off');
    }
}
// filter hn-f の切り替え
function hnClick() {
    if( hnclass.classList.contains('hn_off') == true ){
        for(var i = 0,id =""; i < hn_idlist.length; i++) {
            id = document.getElementById(hn_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#hn-f').classList.toggle('hn_off');
        document.querySelector('#sp_hn-f').classList.toggle('hn_off');
    }else{
        for(var i = 0,id =""; i < hn_idlist.length; i++) {
            id = document.getElementById(hn_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#hn-f').classList.toggle('hn_off');
        document.querySelector('#sp_hn-f').classList.toggle('hn_off');
    }
}
// filter dg-f の切り替え
function dgClick() {
    if( dgclass.classList.contains('dg_off') == true ){
        for(var i = 0,id =""; i < dg_idlist.length; i++) {
            id = document.getElementById(dg_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#dg-f').classList.toggle('dg_off');
        document.querySelector('#sp_dg-f').classList.toggle('dg_off');
    }else{
        for(var i = 0,id =""; i < dg_idlist.length; i++) {
            id = document.getElementById(dg_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#dg-f').classList.toggle('dg_off');
        document.querySelector('#sp_dg-f').classList.toggle('dg_off');
    }
}
// filter tr の切り替え
function trClick() {
    if( trclass.classList.contains('tr_off') == true ){
        for(var i = 0,id =""; i < tr_idlist.length; i++) {
            id = document.getElementById(tr_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#tr-f').classList.toggle('tr_off');
        document.querySelector('#sp_tr-f').classList.toggle('tr_off');
    }else{
        for(var i = 0,id =""; i < tr_idlist.length; i++) {
            id = document.getElementById(tr_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tr-f').classList.toggle('tr_off');
        document.querySelector('#sp_tr-f').classList.toggle('tr_off');
    }
}
// filter teume-f の切り替え
function teumeClick() {
    if( teumeclass.classList.contains('teume_off') == true ){
        for(var i = 0,id =""; i < teume_idlist.length; i++) {
            id = document.getElementById(teume_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#teume-f').classList.toggle('teume_off');
        document.querySelector('#sp_teume-f').classList.toggle('teume_off');
    }else{
        for(var i = 0,id =""; i < teume_idlist.length; i++) {
            id = document.getElementById(teume_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#teume-f').classList.toggle('teume_off');
        document.querySelector('#sp_teume-f').classList.toggle('teume_off');
    }
}
// tag
// filter bitter の切り替え
var bitterclass = document.getElementById('bitter-f');
let bitter_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let bittertags = sort_hndg[i]['tag'];
        for (let e = 0; e < bittertags.length; e++) {
            if(bittertags[e] === 'bitter') {
                bitter_idlist[bitter_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'bitter') {
            bitter_idlist[bitter_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function bitterClick() {
    if( bitterclass.classList.contains('bitter_off') == true ){
        for(var i = 0,id =""; i < bitter_idlist.length; i++) {
            id = document.getElementById(bitter_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#bitter-f').classList.toggle('bitter_off');
        document.querySelector('#sp_bitter-f').classList.toggle('bitter_off');
    }else{
        for(var i = 0,id =""; i < bitter_idlist.length; i++) {
            id = document.getElementById(bitter_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#bitter-f').classList.toggle('bitter_off');
        document.querySelector('#sp_bitter-f').classList.toggle('bitter_off');
    }
}
// filter sweet-f の切り替え
var sweetclass = document.getElementById('sweet-f');
let sweet_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let sweettags = sort_hndg[i]['tag'];
        for (let e = 0; e < sweettags.length; e++) {
            if(sweettags[e] === 'sweet') {
                sweet_idlist[sweet_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'sweet') {
            sweet_idlist[sweet_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function sweetClick() {
    if( sweetclass.classList.contains('sweet_off') == true ){
        for(var i = 0,id =""; i < sweet_idlist.length; i++) {
            id = document.getElementById(sweet_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#sweet-f').classList.toggle('sweet_off');
        document.querySelector('#sp_sweet-f').classList.toggle('sweet_off');
    }else{
        for(var i = 0,id =""; i < sweet_idlist.length; i++) {
            id = document.getElementById(sweet_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#sweet-f').classList.toggle('sweet_off');
        document.querySelector('#sp_sweet-f').classList.toggle('sweet_off');
    }
}
// filter youth-f の切り替え
var youthclass = document.getElementById('youth-f');
let youth_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let youthtags = sort_hndg[i]['tag'];
        for (let e = 0; e < youthtags.length; e++) {
            if(youthtags[e] === 'youth') {
                youth_idlist[youth_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'youth') {
            youth_idlist[youth_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function youthClick() {
    if( youthclass.classList.contains('youth_off') == true ){
        for(var i = 0,id =""; i < youth_idlist.length; i++) {
            id = document.getElementById(youth_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#youth-f').classList.toggle('youth_off');
        document.querySelector('#sp_youth-f').classList.toggle('youth_off');
    }else{
        for(var i = 0,id =""; i < youth_idlist.length; i++) {
            id = document.getElementById(youth_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#youth-f').classList.toggle('youth_off');
        document.querySelector('#sp_youth-f').classList.toggle('youth_off');
    }
}
// filter mill の切り替え
var millclass = document.getElementById('mill-f');
let mill_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let milltags = sort_hndg[i]['tag'];
        for (let e = 0; e < milltags.length; e++) {
            if(milltags[e] === 'mill') {
                mill_idlist[mill_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'mill') {
            mill_idlist[mill_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function millClick() {
    if( millclass.classList.contains('mill_off') == true ){
        for(var i = 0,id =""; i < mill_idlist.length; i++) {
            id = document.getElementById(mill_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#mill-f').classList.toggle('mill_off');
        document.querySelector('#sp_mill-f').classList.toggle('mill_off');
    }else{
        for(var i = 0,id =""; i < mill_idlist.length; i++) {
            id = document.getElementById(mill_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#mill-f').classList.toggle('mill_off');
        document.querySelector('#sp_mill-f').classList.toggle('mill_off');
    }
}
// filter gag-f の切り替え
var gagclass = document.getElementById('gag-f');
let gag_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let gagtags = sort_hndg[i]['tag'];
        for (let e = 0; e < gagtags.length; e++) {
            if(gagtags[e] === 'gag') {
                gag_idlist[gag_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'gag') {
            gag_idlist[gag_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function gagClick() {
    if( gagclass.classList.contains('gag_off') == true ){
        for(var i = 0,id =""; i < gag_idlist.length; i++) {
            id = document.getElementById(gag_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#gag-f').classList.toggle('gag_off');
        document.querySelector('#sp_gag-f').classList.toggle('gag_off');
    }else{
        for(var i = 0,id =""; i < gag_idlist.length; i++) {
            id = document.getElementById(gag_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#gag-f').classList.toggle('gag_off');
        document.querySelector('#sp_gag-f').classList.toggle('gag_off');
    }
}
// filter quarrel-f の切り替え
var quarrelclass = document.getElementById('quarrel-f');
let quarrel_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let quarreltags = sort_hndg[i]['tag'];
        for (let e = 0; e < quarreltags.length; e++) {
            if(quarreltags[e] === 'quarrel') {
                quarrel_idlist[quarrel_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'quarrel') {
            quarrel_idlist[quarrel_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function quarrelClick() {
    if( quarrelclass.classList.contains('quarrel_off') == true ){
        for(var i = 0,id =""; i < quarrel_idlist.length; i++) {
            id = document.getElementById(quarrel_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#quarrel-f').classList.toggle('quarrel_off');
        document.querySelector('#sp_quarrel-f').classList.toggle('quarrel_off');
    }else{
        for(var i = 0,id =""; i < quarrel_idlist.length; i++) {
            id = document.getElementById(quarrel_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#quarrel-f').classList.toggle('quarrel_off');
        document.querySelector('#sp_quarrel-f').classList.toggle('quarrel_off');
    }
}
// filter robinson-f の切り替え
var robinsonclass = document.getElementById('robinson-f');
let robinson_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let robinsontags = sort_hndg[i]['tag'];
        for (let e = 0; e < robinsontags.length; e++) {
            if(robinsontags[e] === 'robinson') {
                robinson_idlist[robinson_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'robinson') {
            robinson_idlist[robinson_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function robinsonClick() {
    if( robinsonclass.classList.contains('robinson_off') == true ){
        for(var i = 0,id =""; i < robinson_idlist.length; i++) {
            id = document.getElementById(robinson_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#robinson-f').classList.toggle('robinson_off');
        document.querySelector('#sp_robinson-f').classList.toggle('robinson_off');
    }else{
        for(var i = 0,id =""; i < robinson_idlist.length; i++) {
            id = document.getElementById(robinson_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#robinson-f').classList.toggle('robinson_off');
        document.querySelector('#sp_robinson-f').classList.toggle('robinson_off');
    }
}
// filter tShot-f の切り替え
var tShotclass = document.getElementById('tShot-f');
let tShot_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let tShottags = sort_hndg[i]['tag'];
        for (let e = 0; e < tShottags.length; e++) {
            if(tShottags[e] === 'tShot') {
                tShot_idlist[tShot_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'tShot') {
            tShot_idlist[tShot_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function tShotClick() {
    if( tShotclass.classList.contains('tShot_off') == true ){
        for(var i = 0,id =""; i < tShot_idlist.length; i++) {
            id = document.getElementById(tShot_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#tShot-f').classList.toggle('tShot_off');
        document.querySelector('#sp_tShot-f').classList.toggle('tShot_off');
    }else{
        for(var i = 0,id =""; i < tShot_idlist.length; i++) {
            id = document.getElementById(tShot_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tShot-f').classList.toggle('tShot_off');
        document.querySelector('#sp_tShot-f').classList.toggle('tShot_off');
    }
}
// filter selca-f の切り替え
var selcaclass = document.getElementById('selca-f');
let selca_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let selcatags = sort_hndg[i]['tag'];
        for (let e = 0; e < selcatags.length; e++) {
            if(selcatags[e] === 'selca') {
                selca_idlist[selca_idlist.length] = sort_hndg[i]['id'];
                break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'selca') {
            selca_idlist[selca_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function selcaClick() {
    if( selcaclass.classList.contains('selca_off') == true ){
        for(var i = 0,id =""; i < selca_idlist.length; i++) {
            id = document.getElementById(selca_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#selca-f').classList.toggle('selca_off');
        document.querySelector('#sp_selca-f').classList.toggle('selca_off');
    }else{
        for(var i = 0,id =""; i < selca_idlist.length; i++) {
            id = document.getElementById(selca_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#selca-f').classList.toggle('selca_off');
        document.querySelector('#sp_selca-f').classList.toggle('selca_off');
    }
}
// filter aSelca-f の切り替え
var aSelcaclass = document.getElementById('aSelca-f');
let aSelca_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let aSelcatags = sort_hndg[i]['tag'];
        for (let e = 0; e < aSelcatags.length; e++) {
            if(aSelcatags[e] === 'aSelca') {
                aSelca_idlist[aSelca_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'aSelca') {
            aSelca_idlist[aSelca_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function aSelcaClick() {
    if( aSelcaclass.classList.contains('aSelca_off') == true ){
        for(var i = 0,id =""; i < aSelca_idlist.length; i++) {
            id = document.getElementById(aSelca_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#aSelca-f').classList.toggle('aSelca_off');
        document.querySelector('#sp_aSelca-f').classList.toggle('aSelca_off');
    }else{
        for(var i = 0,id =""; i < aSelca_idlist.length; i++) {
            id = document.getElementById(aSelca_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#aSelca-f').classList.toggle('aSelca_off');
        document.querySelector('#sp_aSelca-f').classList.toggle('aSelca_off');
    }
}
// filter team-f の切り替え
var teamclass = document.getElementById('team-f');
let team_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let teamtags = sort_hndg[i]['tag'];
        for (let e = 0; e < teamtags.length; e++) {
            if(teamtags[e] === 'team') {
                team_idlist[team_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'team') {
            team_idlist[team_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function teamClick() {
    if( teamclass.classList.contains('team_off') == true ){
        for(var i = 0,id =""; i < team_idlist.length; i++) {
            id = document.getElementById(team_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#team-f').classList.toggle('team_off');
        document.querySelector('#sp_team-f').classList.toggle('team_off');
    }else{
        for(var i = 0,id =""; i < team_idlist.length; i++) {
            id = document.getElementById(team_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#team-f').classList.toggle('team_off');
        document.querySelector('#sp_team-f').classList.toggle('team_off');
    }
}
// filter event-f の切り替え
var eventclass = document.getElementById('event-f');
let event_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let eventtags = sort_hndg[i]['tag'];
        for (let e = 0; e < eventtags.length; e++) {
            if(eventtags[e] === 'event') {
                event_idlist[event_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'event') {
            event_idlist[event_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function eventClick() {
    if( eventclass.classList.contains('event_off') == true ){
        for(var i = 0,id =""; i < event_idlist.length; i++) {
            id = document.getElementById(event_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#event-f').classList.toggle('event_off');
        document.querySelector('#sp_event-f').classList.toggle('event_off');
    }else{
        for(var i = 0,id =""; i < event_idlist.length; i++) {
            id = document.getElementById(event_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#event-f').classList.toggle('event_off');
        document.querySelector('#sp_event-f').classList.toggle('event_off');
    }
}
// filter piano-f の切り替え
var pianoclass = document.getElementById('piano-f');
let piano_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let pianotags = sort_hndg[i]['tag'];
        for (let e = 0; e < pianotags.length; e++) {
            if(pianotags[e] === 'piano') {
                piano_idlist[piano_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'piano') {
            piano_idlist[piano_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function pianoClick() {
    if( pianoclass.classList.contains('piano_off') == true ){
        for(var i = 0,id =""; i < piano_idlist.length; i++) {
            id = document.getElementById(piano_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#piano-f').classList.toggle('piano_off');
        document.querySelector('#sp_piano-f').classList.toggle('piano_off');
    }else{
        for(var i = 0,id =""; i < piano_idlist.length; i++) {
            id = document.getElementById(piano_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#piano-f').classList.toggle('piano_off');
        document.querySelector('#sp_piano-f').classList.toggle('piano_off');
    }
}
// filter foods-f の切り替え
var foodsclass = document.getElementById('foods-f');
let foods_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let foodstags = sort_hndg[i]['tag'];
        for (let e = 0; e < foodstags.length; e++) {
            if(foodstags[e] === 'foods') {
                foods_idlist[foods_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'foods') {
            foods_idlist[foods_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function foodsClick() {
    if( foodsclass.classList.contains('foods_off') == true ){
        for(var i = 0,id =""; i < foods_idlist.length; i++) {
            id = document.getElementById(foods_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#foods-f').classList.toggle('foods_off');
        document.querySelector('#sp_foods-f').classList.toggle('foods_off');
    }else{
        for(var i = 0,id =""; i < foods_idlist.length; i++) {
            id = document.getElementById(foods_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#foods-f').classList.toggle('foods_off');
        document.querySelector('#sp_foods-f').classList.toggle('foods_off');
    }
}
// filter muscle の切り替え
var muscleclass = document.getElementById('muscle-f');
let muscle_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let muscletags = sort_hndg[i]['tag'];
        for (let e = 0; e < muscletags.length; e++) {
            if(muscletags[e] === 'muscle') {
                muscle_idlist[muscle_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'muscle') {
            muscle_idlist[muscle_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function muscleClick() {
    if( muscleclass.classList.contains('muscle_off') == true ){
        for(var i = 0,id =""; i < muscle_idlist.length; i++) {
            id = document.getElementById(muscle_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#muscle-f').classList.toggle('muscle_off');
        document.querySelector('#sp_muscle-f').classList.toggle('muscle_off');
    }else{
        for(var i = 0,id =""; i < muscle_idlist.length; i++) {
            id = document.getElementById(muscle_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#muscle-f').classList.toggle('muscle_off');
        document.querySelector('#sp_muscle-f').classList.toggle('muscle_off');
    }
}
// filter dance-f の切り替え
var danceclass = document.getElementById('dance-f');
let dance_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let dancetags = sort_hndg[i]['tag'];
        for (let e = 0; e < dancetags.length; e++) {
            if(dancetags[e] === 'dance') {
                dance_idlist[dance_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'dance') {
            dance_idlist[dance_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function danceClick() {
    if( danceclass.classList.contains('dance_off') == true ){
        for(var i = 0,id =""; i < dance_idlist.length; i++) {
            id = document.getElementById(dance_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#dance-f').classList.toggle('dance_off');
        document.querySelector('#sp_dance-f').classList.toggle('dance_off');
    }else{
        for(var i = 0,id =""; i < dance_idlist.length; i++) {
            id = document.getElementById(dance_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#dance-f').classList.toggle('dance_off');
        document.querySelector('#sp_dance-f').classList.toggle('dance_off');
    }
}
// filter bb-f の切り替え
var bbclass = document.getElementById('bb-f');
let bb_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let bbtags = sort_hndg[i]['tag'];
        for (let e = 0; e < bbtags.length; e++) {
            if(bbtags[e] === 'bb') {
                bb_idlist[bb_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'bb') {
            bb_idlist[bb_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function bbClick() {
    if( bbclass.classList.contains('bb_off') == true ){
        for(var i = 0,id =""; i < bb_idlist.length; i++) {
            id = document.getElementById(bb_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#bb-f').classList.toggle('bb_off');
        document.querySelector('#sp_bb-f').classList.toggle('bb_off');
    }else{
        for(var i = 0,id =""; i < bb_idlist.length; i++) {
            id = document.getElementById(bb_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#bb-f').classList.toggle('bb_off');
        document.querySelector('#sp_bb-f').classList.toggle('bb_off');
    }
}
// filter tt-f の切り替え
var ttclass = document.getElementById('tt-f');
let tt_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let tttags = sort_hndg[i]['tag'];
        for (let e = 0; e < tttags.length; e++) {
            if(tttags[e] === 'tt') {
                tt_idlist[tt_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'tt') {
            tt_idlist[tt_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function ttClick() {
    if( ttclass.classList.contains('tt_off') == true ){
        for(var i = 0,id =""; i < tt_idlist.length; i++) {
            id = document.getElementById(tt_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#tt-f').classList.toggle('tt_off');
        document.querySelector('#sp_tt-f').classList.toggle('tt_off');
    }else{
        for(var i = 0,id =""; i < tt_idlist.length; i++) {
            id = document.getElementById(tt_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tt-f').classList.toggle('tt_off');
        document.querySelector('#sp_tt-f').classList.toggle('tt_off');
    }
}
// filter fm-f の切り替え
var fmclass = document.getElementById('fm-f');
let fm_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let fmtags = sort_hndg[i]['tag'];
        for (let e = 0; e < fmtags.length; e++) {
            if(fmtags[e] === 'fm') {
                fm_idlist[fm_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'fm') {
            fm_idlist[fm_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function fmClick() {
    if( fmclass.classList.contains('fm_off') == true ){
        for(var i = 0,id =""; i < fm_idlist.length; i++) {
            id = document.getElementById(fm_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#fm-f').classList.toggle('fm_off');
        document.querySelector('#sp_fm-f').classList.toggle('fm_off');
    }else{
        for(var i = 0,id =""; i < fm_idlist.length; i++) {
            id = document.getElementById(fm_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#fm-f').classList.toggle('fm_off');
        document.querySelector('#sp_fm-f').classList.toggle('fm_off');
    }
}
// filter tbd-f の切り替え
var tbdclass = document.getElementById('tbd-f');
let tbd_idlist = [];
for (let i = 0; i < sort_hndg.length; i++) {
    if(Array.isArray(sort_hndg[i]['tag'])) {
        let tbdtags = sort_hndg[i]['tag'];
        for (let e = 0; e < tbdtags.length; e++) {
            if(tbdtags[e] === 'tbd') {
                tbd_idlist[tbd_idlist.length] = sort_hndg[i]['id'];
            break;
            }
        }
    }else{
        if(sort_hndg[i]['tag'] === 'tbd') {
            tbd_idlist[tbd_idlist.length] = sort_hndg[i]['id'];
        }
    }
}
function tbdClick() {
    if( tbdclass.classList.contains('tbd_off') == true ){
        for(var i = 0,id =""; i < tbd_idlist.length; i++) {
            id = document.getElementById(tbd_idlist[i]);
            id.style.display ="block";
        }
        document.querySelector('#tbd-f').classList.toggle('tbd_off');
        document.querySelector('#sp_tbd-f').classList.toggle('tbd_off');
    }else{
        for(var i = 0,id =""; i < tbd_idlist.length; i++) {
            id = document.getElementById(tbd_idlist[i]);
            id.style.display ="none";
        }
        document.querySelector('#tbd-f').classList.toggle('tbd_off');
        document.querySelector('#sp_tbd-f').classList.toggle('tbd_off');
    }
}

