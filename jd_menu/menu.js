$(document).ready(function () {
  var $JS_popCtn = $('.JS_popCtn');

  var $activeRow;
  var $activeMenu;

  var timer;
  var mouseIn = false;

  $JS_popCtn.on('mouseenter', function () {
    mouseIn = true;
    console.log('true');
  }).on('mouseleave', function () {
    mouseIn = false;
    console.log('false');
  });

  $('.J_cate')

    .on('mouseleave', function () {
      $JS_popCtn.hide();

      if ($activeRow) {
        $activeRow.removeClass('cate_menu_item_on');
      }

      if ($activeMenu) {
        $activeMenu.hide();
      }
    })
 
    .on('mouseenter', 'li', function (e) {
      if (!$activeRow) {
        $activeRow = $(e.target).addClass('cate_menu_item_on');
        $activeMenu = $('#' + 'cate_item' + $activeRow.data('index'));
        $activeMenu.show();
      }

      $JS_popCtn.show();

      timer = setTimeout(function () {
        if (mouseIn) {
          return;
        } 

        $activeRow.removeClass('cate_menu_item_on');
        $activeMenu.hide();

        $activeRow = $(e.target);
        console.log($activeRow);
        $activeRow.addClass('cate_menu_item_on');
        $activeMenu = $('#' + 'cate_item' + $activeRow.data('index'));
        $activeMenu.show();
      }, 300)

    })
})