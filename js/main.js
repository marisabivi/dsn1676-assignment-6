var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$showHide.on('click', function () {
    $diamond.toggleClass('js-move');
});