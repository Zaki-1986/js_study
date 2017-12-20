$(document).ready(function () {
  var $JS_popCtn = $('.JS_popCtn');

  var $activeRow;
  var $activeMenu;

  $('.J_cate')
    .on('mouseenter', function () {
      $JS_popCtn.show();
    })
    
    .on('mouseleave', function () {
      $JS_popCtn.hide();

      if ($activeRow) {
        $activeRow.removeClass('cate_menu_item_on');
        $activeRow = false;
      }

      if ($activeMenu) {
        $activeMenu.hide();
        $activeMenu = false;
      }
    })

    .on('mouseenter', 'li', function () {
      if (!$activeRow) {
        $activeRow = $(this).addClass('cate_menu_item_on');
        $activeMenu = $('#' + 'cate_item' + $activeRow.data('index'));
        $activeMenu.show();
      }

      $activeRow.removeClass('cate_menu_item_on');
      $activeMenu.hide();

      $activeRow = $(this);
      $activeRow.addClass('cate_menu_item_on');
      $activeMenu = $('#' + 'cate_item' + $activeRow.data('index'));
      $activeMenu.show();
    })
})