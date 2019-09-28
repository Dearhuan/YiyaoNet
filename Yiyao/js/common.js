new Promise(function(resolve){
  $.ajax({ //tabs渲染
    type: "get",
    url: "../api/tabs.php",
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $('#sortul').html(data.map(li => {
        return `<li class="stitle">
                  <a href="#">
                    <i class=${li.icon}></i>
                    <h4>${li.title}</h4>
                  </a>
                  <div class="category" style="display:none">
                    ${li.ulist1.map((div)=>{
                      return `<div class="mode-bd">${div.map(dl=>{
                        return `<dl>
                                  <dt>${dl.name}</dt>
                                  <dd>${dl.emlist.map(em=>{
                                    return `<em><a href="">${em}</a></em>`
                                  }).join('')}</dd>
                                </dl>`
                      }).join('')}   
                              </div>`
                    }).join('')}
                    ${li.ulist2.map((div)=>{
                      return `<div class="mode-bd ads">${div.map(src=>{
                        return `<a href=""><img src=${src}></a>`
                      }).join('')}</div>`
                    }).join('')}
                  </div>
                </li>`;
      }));
      $('#sortul').find('i').addClass('iconfont');
      $('#sortul li a').eq(0).attr('href', './goodlist.html');
      resolve();
    }
  });
}).then(function(){
  return new Promise(function(){
    $('#sortul li').mouseenter(function () {
      $(this).addClass('stitle_hover').siblings().removeClass('stitle_hover');
      $(this).children('div').css('display', 'block');
    });
    $('#sortul li').mouseleave(function () {
      $(this).removeClass('stitle_hover');
      // $('#allCategoryHeader').css('display', 'none');
      $(this).children('div').css('display', 'none');
    });
  })
});

$('.f_top').click((e) => { //回到顶部(commom)
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
});

let cookieUsername = Cookie.get('username'); //检查cookie(commom)
let cookiePassword = Cookie.get('password');
let cookiePhone = Cookie.get('phone');
if (cookieUsername && cookiePassword) {
  $('#ilogin').text(cookieUsername);
};

$('.fi').hover(function () { //float_box(common)
  $(this).find('i').css('display', 'none');
}, function () {
  $(this).find('i').css('display', 'block');
});

$('#logout').on('click',function(e){
  e.preventDefault();
  console.log(this)
  Cookie.clear();  
  location.href = './login.html';
})


$('.iyaonet').on('mouseenter', function () { //我的医药网（鼠标移入移出common）
  $(this).siblings('ul').stop().show();
  // $(this).siblings('ul').on('mouseenter', 'li', function () {});
  $(this).siblings('ul').on('mouseleave', function () {
    $(this).hide();
  })
});

$('.favorite').click(function (e) { //收藏本站(common)
  e.preventDefault();
  confirm('抱歉，您所使用的的浏览器无法完成此操作 \n 加入收藏失败，请使用Ctrl+D进行添加');
});

$('.province_box').hover(function () { //(省份)(common)
  $(this).children('ul').stop().show();
}, function () {
  $(this).children('ul').hide();
});

$('#headerAllProvince').on('click', 'a', function (e) { //点击省份替换(common)
  e.preventDefault();
  $('.province').children().text($(this).text());
})

$('.tell').hover(function () { //手机二维码(common)
  $(this).siblings('.tell_title').stop().show();
  $(this).siblings('#menu_bd_app').stop().show();
}, function () {
  $(this).siblings('.tell_title').hide();
  $(this).siblings('#menu_bd_app').hide();
});

getCartData(); // 页面进来时发送一次请求，获取购物车数据(common)
function getCartData() {
  $.ajax({
    type: "get",
    url: "../api/getCartData.php",
    dataType: "json",
    success: function (res) {
      if(res.status == 'success'){
        let num = res.data.goods.length;
        let data = res.data.goods;
        $('.cart_num').text(num);
        $('.icartNum').text(num);
        let html = `<div class="list_detail">
        <ul style="display: block;">${data.map((li)=>{
          return `<li><a traget="_blank" class="pro_img" href=""><img heigth="40" width="40"
      src=${li.src} onerror="imgERROR(this,'no_pic_50_50.jpg');"></a><a
    traget="_blank" class="pro_name" href="./detail.html?product/${li.gid}">${li.title}</a><span class="pro_price">¥${li.price}</span>
  <div class="num_box"><b name="editName_${li.gid}" class="minusDisable"></b><input type="text" class="minicart_num" value="${li.num}">
    <b name="editName_${li.gid}" class="plus" ></b><a target="_self" style="display:block;" href="">删除</a></div>
</li>`;
    }).join('')}</ul></div>`
        $('.minicart_list').html(html);
        let total_num = 0;
        let total_price = 0;
        $('#minicart_list li').each(function () {
          let goodNum = parseInt($(this).find('.minicart_num').val());
          let goodPrice = Math.round(parseFloat($(this).find('.pro_price').text().slice(1)) * 100) / 100;
          total_num += goodNum; //当前商品总数量
          total_price += goodPrice * goodNum; //总价
        });
        console.log(total_num, total_price);
        $('.minicart_list').append(`<div class="checkout_box" style="display: block;">
        <p>
          <span class="fl"> 共<em class="fstrong">${total_num}</em>件商品</span> 合计：<em class="fstrong">¥${total_price.toFixed(2)}</em>
        </p>
        <a rel="nofollow" class="checkout_btn" href="./cart.html" target="_self"> 去结算 </a>
      </div>
      <div style="display: none;" class="none_tips">
        <i> </i>
        <p>您的购物车里还没有商品，如已添加商品，请 <a rel="nofollow" href="./login.html" target="_self">登录 </a> 。</p>
      </div>`);
      }else if(res.status == 'none'){
        let num = res.data.length;
        $('.cart_num').text(num);
        $('.icartNum').text(num);
        $('.minicart_list').html(`
        <div class="checkout_box" style="display: none;">
        <p>
          <span class="fl"> 共<em class="fstrong"></em>件商品</span> 合计：<em class="fstrong">¥</em>
        </p>
        <a rel="nofollow" class="checkout_btn" href="./cart.html" target="_self"> 去结算 </a>
      </div>
      <div style="display: block;" class="none_tips">
        <i> </i>
        <p>您的购物车里还没有商品，如已添加商品，请 <a rel="nofollow" href="./login.html" target="_self">登录 </a> 。</p>
      </div>`);
      }
    }
  });
};

function debounce(fun, delay) { //防抖函数
  let timer;
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
};

$('.mod_minicart').mouseenter(function () { //  鼠标移入小购物车(common)
  $(this).children('#minicart_list').css('display','block');
  getCartData();
});

$('.mod_minicart').mouseleave(function () {
  $(this).children('#minicart_list').hide();
});

$('.f_wei').mouseenter(function () { //鼠标移入右边小购物车(common)
  $('#bottom_minicart_list').css('display','block');
});
$('.minicart_list').mouseenter(function () {
  $(this).stop().show();
});
$('.minicart_list').mouseleave(function () {
  $(this).hide();
});
$('.f_wei').mouseleave(function () { //鼠标移入右边小购物车(common)
  $('#bottom_minicart_list').hide();
});