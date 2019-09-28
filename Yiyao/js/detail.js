$(function () {
  /* 获取商品列表页传过来的商品id，根据gid向后端发请求拿当前商品数据 */
  let url = location.href;
  let gid = Number(decodeURI(location.search.slice(1)).split('product/')[1]);
  console.log(gid);
  $.ajax({ //获取商品gid
    type: "get",
    url: "../api/getProductDetail.php",
    data: `gid=${gid}`,
    dataType: "json",
    success: function (res) {
      let data = res.data;
      console.log(data);
      $('.middle_property').html(data.map(ele => {

        return `<span class="detail_self" title=${ele.store}>自营</span>
    <h1 data-src=${ele.src}>${ele.title}</h1>
    <span class="red giftRed">${ele.info}</span>
    <a class="red" style="text-decoration: underline;" target="_blank" href=""></a>
    <div class="shangpin_info">
      <div id="coupon"></div>
      <dl class="clearfix">
        <dt class="price_dt">药网价：</dt>
        <dd>
          <span class="good_price">￥${ele.price}</span>
          <span style=" float: left;line-height: 19px;margin: 7px 40px 0 0;"></span>
          <span id="fristReviewCount" class="commentsBox">累计评论：
            <span class="numComments">
              <a href="#itemComments" name="reviewCount">${ele.comment}</a>
            </span>
          </span>
        </dd>
      </dl>
      <div class="xianshigou_part"></div>

      <div id="newpromotion2">
      </div>

      <div class="xiliping" a="1"></div>
      <dl class="clearfix taocanBox">
        <dt>套餐：</dt>
        <dd id="tc_attribute_list">
          <ul class="taocan">
            <li class="select-pro"><a href=""><span class="fl fb num">1件</span><em class="fl">
              <i class="qian">¥</i>${ele.price}/1件</em><span class="iconSelect"></span></a></li>
          </ul>
        </dd>
      </dl>

      <div class="shuliang">
        <dl class="clearfix">
          <dt>数 量：</dt>
          <dd>
            <div class="num_section clearfix">
              <div class="num_box">
                <input type="text" value="1" class="num" name="product_amount" id="product_amount" limit="5" moq="0"
                  itemid="${ele.gid}">
                <input type="button" class="num_pre">
                <input type="button" class="num_next">
              </div>
              <p name="showLimit"></p>
            </div>
          </dd>
        </dl>
      </div>

      <div class="mobPrice" id="mobPrice" style="display: block;">
        <i></i>
        <span><em class="text">手机扫扫更方便</em>&nbsp;<em class="mobNum" id="mobNum"></em>，&nbsp;<a
            href="" class="mobBuy" id="mobBuyA">立即扫码</a>&gt;</span>
        <div class="erdCode" id="erdCodeD">
          <img src="https://s.maiyaole.com/mpTdCode/50703005.png" alt="扫二维码，专享手机价" width="150" height="150">
        </div>
      </div>

      <dl class="clearfix btnCartDl">
        <dd>
          <input class="btn_shopping_cart" id="seriesCartButton" type="button" value="加入购物车">
        </dd>
        <dd>
          <p class="proTips">
            本商品由1药网销售和发货
            <br>
            18:00前下单预计当天出库，部分城市支持次日达。
            <a target="_blank" href="" rel="nofollow">运费详情
              &gt;&gt;</a>
          </p>
        </dd>
      </dl>

      <div class="promise">
        <span class="fl m0">支持</span>
        <span class="zhengping_100">
          <a rel="nofollow" target="_blank" href=""><i></i>100%正品</a>
        </span>
        <span class="men_100">
          <a rel="nofollow" target="_blank" href=""><i></i>满69包邮</a>
        </span>
        <span class="yaojian"><a rel="nofollow" target="_blank" href=""><i></i>药监认证</a></span>
      </div>
    </div>`
      }).join(''));

      $('.detailnav').html(data.map(ele => {
        return `<span class="linkhome"><a href="./index.html">首页</a></span>
                <span class="arrow">&gt;</span>
                <span><a href="./goodlist.html">中西药品</a></span>
                <span class="arrow">&gt;</span>
                <span><a href="./detail.html?product/${ele.gid}">${ele.title}</span>`
      }).join(''))
    }
  });
  new Promise(function (resolve, reject) {
    $.ajax({ //获取放大镜图片资源
      type: "get",
      url: "../api/bigmirror.php",
      data: `gid=${gid}`,
      dataType: "json",
      success: function (res) {
        let data = res.data;
        console.log(data);
        $('.exzoom_img_ul').html(data.map(li => {
          return `<li style="width: 300px;"><img style="margin-top: 0px; width: 300px;" src=${li.bimg} /></li>`
        }));
        resolve();
      }
    });
  }).then(function () {
    return new Promise(function (resolve, reject) {
      $('#exzoom').exzoom({ //放大镜
        autoPlay: false,
      });
    })
  }).then(function () {
    return new Promise(function (resolve, reject) {
      console.log($('.btnCartDl'))
      $('#seriesCartButton').click(function () {
        console.log(this);
        window.location.href = './cart.html';
      });
    })
  })


  /* -------------------tab菜单切换------------------- */
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

  /* -------------------tab菜单切换------------------- */
  $('.navList li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.detail_tab').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
  });

  /* ----------------------lazyLoad---------------------- */
  start();
  $(window).scroll(() => start());

  function start() {
    $('.largeArea img').not('[li-isLoaded]').each(function(){
      let node = $(this);
      if(isShow(node)) loadContent(node);
    });
  };

  function isShow(node){
    return node.offset().top <= $(window).height() + $(window).scrollTop();
  };

  function loadContent(content){
    let img = content;
    img.attr('li-isLoaded',1);
    img.attr('src',img.attr('data-src'));
  };
   /* ----------------------lazyLoad---------------------- */
});

window.onload = function () {
  $.getScript('../js/common.js');

  $('#mobBuyA').hover(function () { //扫一扫
    $('#erdCodeD').animate({
      top: '-171px',
    }, 300)
  }, function () {
    $('#erdCodeD').animate({
      top: '-200px',
    });
  });

  $('#mobBuyA').hover(function () {
    $('#erdCodeD').css({
      'display': 'block',
    })
  }, function () {
    $('#erdCodeD').css({
      'display': 'none',
    })
  });

  let num = 1;
  $('.num_pre').click(function (e) {
    let inputVal = $(this).siblings('.num'),
      count = parseInt(inputVal.val()) + 1;
    inputVal.val(count);
    num = count;
  });
  $('.num_next').click(function (e) {
    let inputVal = $(this).siblings('.num'),
      count = parseInt(inputVal.val()) - 1;
    if (inputVal.val() > 1) {
      inputVal.val(count);
      num = count;
    }
  });

  $('#seriesCartButton').click(function () { //加入购物车
    let addCartInfo = $('#addCartInfo');
    let gid = Number(decodeURI(location.search.slice(1)).split('product/')[1]);
    let price = Number($('.good_price').text().slice(1));
    let totalPrice = price * num;
    let title = $('.middle_property h1').text();
    let comment = Number($('.numComments').text());
    let store = $('.detail_self').attr('title');
    // let src = $('.exzoom_nav_inner').children().first().find('img').attr('src');
    let src = $('.middle_property h1').attr('data-src');
    console.log(gid, price, title, comment, store, src);
    addCartInfo.html(`<input type="hidden" value="success" id="addProductResult">
<div class="spop" id="addCartWin">
  <div class="spoptop">
    <a class="popwinClose" onclick="jQuery('#addCartInfo').hide();" href="javascript:void(0);">关闭</a>
    <font>${num}件商品加入购物车</font>
  </div>
  <div class="spopro">
    <div class="spopimg"><img width="115" onerror="imgERROR(this,'no_pic_160_160.jpg');"
        src=${src}></div>
    <div class="spopbox">
      <p class="spopstitle"></p>
      <span>加入数量：${num}</span>
      <span>总计金额：<span><i class="qian">¥</i>${totalPrice}</span></span>
      <div class="spopbtn"><a class="red_btn" href="javascript:void(0)"
          onclick="jQuery('#addCartInfo').hide();">继续购物</a><a
          class="red_border_btn" href="./cart.html">去结算</a></div>
    </div>
    <div class="clear"></div>
  </div>
</div>`)
    addCartInfo.stop().show();
    $.ajax({    //传递当前点击商品的信息
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
      },
      dataType: "json",
      success: function (res) {
        console.log(res);
      }
    });
  });

  $('#sortul li').mouseenter(function () {
    $(this).addClass('stitle_hover').siblings().removeClass('stitle_hover');
    $(this).children('div').css('display', 'block');
  });
  $('#sortul li').mouseleave(function () {
    $(this).removeClass('stitle_hover');
    // $('#allCategoryHeader').css('display', 'none');
    $(this).children('div').css('display', 'none');
  });

  $('.f_top').click((e) => { //回到顶部
    console.log('=======')
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}