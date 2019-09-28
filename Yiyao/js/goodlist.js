$(function () {
  $.getScript('../js/common.js');
  let iswitch = false; //开关
  let box = $('#allCategoryHeader');

  $('.allSort').mouseenter(function (e) {
    e.preventDefault();
    !iswitch ? box.show() : box.hide();
    iswitch = false;
  });
  $('.allSort').mouseleave(function (e) {
    e.preventDefault();
    !iswitch ? box.hide() : box.show();
    iswitch = false;
  });

  let currentType = 0;
  new Promise(function (resolve, reject) {
    $.ajax({
      type: "get",
      url: "../api/getPageCount.php",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let pageCount = response.data;
        for (let i = 0; i < pageCount; i++) {
          let oPage = $(`<a href="javascript:;">${i+1}</a>`);
          $("#ipage").append(oPage);
        }
        $("#ipage").children("a").first().addClass("active");
        resolve();
      }
    });
  }).then(function () {
    getDatWithPage(currentType, 0);
  });

  /* 002-当拿到数据后根据数据来渲染页面 */
  // new Promise(function (resolve, reject) {
  $("#ipage").on("click", "a", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    /* 先获取当前是第几页 */
    let index = $(this).index();
    getDatWithPage(currentType, index);
  });

  let getDatWithPage = (type, page) => {
    $.ajax({
      type: "get",
      url: "../api/getProductData.php",
      data: `type=${type}&page=${page}`,
      dataType: "json",
      success: function (response) {
        let data = response.data;
        console.log(data);

        let html = data.map((ele) => {
          // console.log(item);
          return `
          <li>
            <div class="itemSearchResultCon" gid=${ele.gid}>
              <a href="./detail.html?product/${ele.gid}" class="product_pic pro_img">
                <img alt="${ele.title}" src="${ele.src}">
              </a>
              <p class="price">
                <span>${ele.price}</span>
              </p>
              <p class="titleBox">
                <a class="productName" href="./detail.html?product/${ele.gid}" target="_blank">
                  <span class=" list_lable_self"></span>
                  ${ele.title}</a>
                <a class="productName" href="" target="_blank">${ele.info}</a>
              </p>
              <div class="sell_type_div">
                <span class="comment comment_right">
                  <a href="">评价<em>${ele.comment}</em>条</a>  
                </span>
                <span class="goldseller_name self_name">${ele.store}</span>
              </div>
              <div id="buyInfo_844162" class="search_list_op">
                <a class="search_list_reduce_gray"></a>
                <input type="text" value="1" class="num" id="">
                <a class="search_list_plus"></a>
                <button class="buy op_right_btn add_cart_btn border_left">加入购物车</button>     
              </div>
              <u class="bg_border"></u>
              </div>
          </li>
              `
        }).join("");
        $("#itemSearchList").html(html);
        changeNum(); //改变页面时调用（改变数量，加购物车）
      },
      error: function () {
        console.log("++");
      }
    });
  }

  $(".typeBtn").click(function (e) {
    e.preventDefault();
    // let index = $(this).index();
    let index = $('.typeBtn').index(this);
    console.log(this)
    currentType = index;
    getDatWithPage(currentType, 0);
    $("#ipage").children("a").first().addClass("active").siblings().removeClass("active");
  });

  $('#itemSearchList').on('mouseenter', 'li', function () {
    $(this).children('.itemSearchResultCon').addClass('backOn');
  });
  $('#itemSearchList').on('mouseleave', 'li', function () {
    $(this).children('.itemSearchResultCon').removeClass('backOn');
  });

  $('.rank a').click(function (e) {
    e.preventDefault();
    // console.log(this)
    $(this).parent().addClass('cur').siblings().removeClass('cur');
  })

  $('.no_bd_b').click(function (e) {
    let index = $('.no_bd_b').index(this);
    console.log(index);
    $('.list_ul').eq(index).slideToggle();
    $('.icon_btn').eq(index).toggleClass('open');
  })

});

function changeNum() {
  let plus = $('.search_list_plus'),
    reduce = $('.search_list_reduce_gray'),
    add_cart = $('.add_cart_btn');
  plus.click(function (e) { //数量加
    e.preventDefault();
    let inputVal = $(this).prev('input'),
      count = parseInt(inputVal.val()) + 1;
    inputVal.val(count);
    if (inputVal.val() > 1) {
      reduce.addClass('search_list_reduce').removeClass('search_list_reduce_gray')
    }
  });
  reduce.click(function (e) { //数量减
    e.preventDefault();
    let inputVal = $(this).next('input'),
      count = parseInt(inputVal.val()) - 1;
    if (inputVal.val() > 1) {
      inputVal.val(count);
      $(this).addClass('search_list_reduce').removeClass('search_list_reduce_gray')
    };
    if (inputVal.val() == 1) {
      $(this).addClass('search_list_reduce_gray').removeClass('search_list_reduce')
    }
  });
  let offset = $('.f_wei').offset(); //飞入位置的终点
  add_cart.click(function (e) {   //点击加入购物车
    e.preventDefault();
    let gid = Number($(this).parent().parent().attr('gid'))
    num = Number($(this).siblings('.num').val()),
      src = $(this).parent().siblings('a').children().attr('src'),
      price = Number($(this).parent().siblings('.price').text().trim()),
      title = $(this).parent().siblings('.titleBox').children('a').first().text().trim(),
      store = $(this).parent().siblings('.sell_type_div').children('span').last().text(),
      comment = Number($(this).parent().siblings('.sell_type_div').children('span').first().children()
        .children().text());
    let flyer = $('<img class="u-flyer" src="' + src + '">');
    flyer.css({
      "display": "block",
      "width": "50px",
      "height": "50px",
      "position": "fixed",
      "z-index": "9999",
    })
    flyer.fly({
      start: {
        /* left: e.pageX,
        top: e.pageY, */
        left: e.clientX,
        top: e.clientY
      },
      end: {
        left: offset.left - 10,
        top: offset.top - 10,
        width: 0,
        height: 0
      },
      onEnd: function(){
        this.destory();
      }
    })
    $.ajax({    //发送请求更新数据库数据
      type: "post",
      url: "../api/cart.php",
      data: {
        gid: gid,
        title: title,
        src: src,
        price: price,
        num: num,
        comment: comment,
        store: store
      }
    });
  });
}

$(window).scroll(() => { //动态吸顶导航栏
  if ($(document).scrollTop() >= 164) {
    $('.head_wrap').addClass('hd_nav_fixed');
  } else {
    $('.head_wrap').removeClass('hd_nav_fixed');
  }
})