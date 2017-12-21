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

      $JS_popCtn.show();

      timer = setTimeout(function () {
        if (mouseIn) {
          return;
        } else {
          $activeRow.removeClass('cate_menu_item_on');
          $activeMenu.hide();

          $activeRow = $(this);
          $activeRow.addClass('cate_menu_item_on');
          $activeMenu = $('#' + 'cate_item' + $activeRow.data('index'));
          $activeMenu.show();
        }
      }, 300)

    })
})