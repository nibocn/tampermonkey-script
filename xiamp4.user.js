// ==UserScript==
// @name         xiamp4
// @namespace    http://nibo.me
// @version      0.1.1
// @description  迅播影院显示、打印下载地址
// @author       NiBo
// @match        http://www.xiamp4.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js
// ==/UserScript==

function show_download_url() {
    var item = $('.ndownlist > ul > li[class!="ckbox"]');
    item.each(function (index) {
        var download_url = $(':checkbox', this).val();
        var span = $('span', this);
        var html = '<a href="'+ download_url +'" class="d3" title="下载链接">下载</a>';
        span.prepend(html);

    });
}

show_download_url();

function print_download_url() {

    $('.ndownlist > ul').each(function (index) {
        console.log('下载地址 ' + (index + 1));
        var text='';
        $('li[class!="ckbox"] input', this).each(function (index) {
            text += $(this).val() + '\n';
        });
        console.log(text);
    });
}

print_download_url();
