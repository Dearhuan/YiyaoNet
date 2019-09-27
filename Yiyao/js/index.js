$.ajax({ //banner图渲染
  type: "get",
  url: "../api/swiper.php",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    (new Banner(data).init());
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //鼠标滑过pagination控制swiper切换
    for (i = 0; i < swiper.pagination.bullets.length; i++) {
      swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
      };
    };
    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    swiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    swiper.pagination.destroy()
    swiper.pagination.init()
    swiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');

    $('.swiper-container').mouseenter(() => { //鼠标移入停止切换
      swiper.autoplay.stop();
    });
    $('.swiper-container').mouseleave(() => { //鼠标移入停止切换
      swiper.autoplay.start();
    });
  }
});

$.ajax({ //hotKeys渲染
  type: "get",
  url: "../api/hotKeys.php",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    let oa = data.map((ele) => {
      return `<a href="#">${ele}</a>`;
    }).join('');
    $('.hotwords').html(oa);
    $('.hotwords').children().first().addClass('red');
  }
});

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
              </li>`
    }));
    $('#sortul').find('i').addClass('iconfont');
    $('#sortul li a').eq(0).attr('href', './goodlist.html');
  }
});

new Promise(function (resolve, reject) {
  $.ajax({ //floor1_2
    type: "get",
    url: "../api/floor1_2.php",
    dataType: "json",
    success: function (data) {
      // console.log(data);
      data.map((ele, index) => {
        // console.log(ele)
        let floor1_2 = `<div class="wrap index_floor floor_${index+1} clearfix">
        <div class="in_floor_l">
          <div class="floor_name floor_name_${index+1} cur">${ele.floor}</div>
          <ul class="clearfix ulist1">${ele.ulist1.map((item=>
            {return `<li><a href="">${item}</a></li>`})).join('')}</ul>
          <ul class="clearfix ulist2">${ele.ulist2.map((item=>
            {return `<li><a href="">${item}</a></li>`})).join('')}</ul>
        </div>
        <div class="in_floor_r">
          <div class="sale clearfix">
            <div class="sale_slider" id="sale_slider_${index+1}">
              <a id="tsSlideLi_${index+1}"><img alt="" src=${ele.simg} title="" class="y_slide_img" style="left:0;z-index:9" id="slideImg_10"></a>
            </div>
            <div class="sale_ads" id="sale_ads_${index+1}">
              <a href=""><img src="${ele.rimglist[0]}" alt=""></a>
              <a href=""><img class="last" src="${ele.rimglist[1]}" alt=""></a></div>
          </div>
          <ul class="sp_show clearfix">${ele.bulist.map(item=>{
            return `<li>
                      <a href=""><img alt="${item.title}" src="${item.src}"></a>
                      <a href="" class="tit" title="${item.title}">${item.title}</a>
                      <p>${item.price}</p>
                    </li>`
          }).join('')}
          </ul>
        </div>
      </div>`
        $('.main_body').append(floor1_2);
        $('.sp_show').children().last().addClass('last');
      });
      resolve();
    }
  });
}).then(function () {
  return new Promise(function (resolve, reject) {
    $.ajax({ //floor3_9
      type: "get",
      url: "../api/floor3_9.php",
      dataType: "json",
      success: function (data) {
        // console.log(data);
        data.map((ele, index) => {
          // console.log(ele)
          let floor3_9 = `<div class="wrap index_floor floor_${index+3} clearfix">
          <div class="in_floor_l">
            <div class="floor_name floor_name_${index+3} cur">${ele.floor}</div>
            <ul class="clearfix ulist1">${ele.ulist1.map((item=>
              {return `<li><a href="">${item}</a></li>`})).join('')}</ul>
            <ul class="clearfix ulist2">${ele.ulist2.map((item=>
              {return `<li><a href=""><img src=${item}></a></li>`})).join('')}</ul>
          </div>
          <div class="in_floor_r">
            <div class="sale clearfix">
              <div class="sale_slider" id="sale_slider_${index+3}">
                <a id="tsSlideLi_${index+3}"><img alt="" src=${ele.simg} title="" class="y_slide_img" style="left:0;z-index:9" id="slideImg_10"></a>
              </div>
              <div class="sale_ads" id="sale_ads_${index+3}">
                <a href=""><img src="${ele.rimglist[0]}" alt=""></a>
                <a href=""><img class="last" src="${ele.rimglist[1]}" alt=""></a></div>
            </div>
            <ul class="sp_show clearfix">${ele.bulist.map(item=>{
              return `<li data-ywpoint="F1001_0_null_null_I1019_0">
                        <a href=""><img alt="${item.title}" src="${item.src}" onerror="imgERROR(this,'no_pic_80_80.jpg');"></a>
                        <a href="" class="tit" title="${item.title}">${item.title}</a>
                        <p>${item.price}</p>
                      </li>`
            }).join('')}
            </ul>
          </div>
        </div>`
          $('.main_body').append(floor3_9);
          $('.sp_show').children().last().addClass('last');
        });
        resolve();
      }
    });
  }).then(function () {
    return new Promise(function (resolve, reject) {
      $.ajax({ //brands
        type: "get",
        url: "../api/brands.php",
        dataType: "json",
        success: function (data) {
          // console.log(data);
          data.map((ele, index) => {
            let brands = `<div class="y_foot">
            <div class="ft_friendlylink wrap">
              <ul class="fri_tit clearfix">
                ${ele.titles.map((item=>{
                  return `<li class="">${item}</li>`
                })).join('')}
              </ul>
              <div class="fri_ct flagship_store clearfix" style="display: block;">
                ${ele.brands.map((item=>{
                  return `<a href="" class=${item.attr}>${item.text}</a>`
                })).join('')}
              </div>
              <div class="fri_ct clearfix friendly" style="display: none;">
                ${ele.friends.map((item=>{
                  return `<a href="" >${item}</a>`
                })).join('')}
              </div>
              </div>
            </div>`
            $('.main_body').append(brands);
          })
        }
      });
    })
  })
});

setTimeout(() => { //TopTips
  $('.safe_warm').slideDown();
}, 1000);

window.onload = function () {
  $('.close_ico').click(function () {
    console.log(this)
    $(this).parent().parent().slideUp();
  });

  $('.y_foot .fri_tit').on('mouseenter', 'li', function () { //brand切换
    console.log(this, $(this).index());
    $(this).stop().animate().addClass('cur').siblings().removeClass('cur');
    $('.ft_friendlylink').children('div').eq($(this).index()).css('display', 'block').siblings('div').css('display', 'none');
  });

  $('#sortul li').hover(function () {
    $(this).addClass('stitle_hover').siblings().removeClass('stitle_hover');
    $(this).children('div').css('display', 'block');
  }, function () {
    $(this).removeClass('stitle_hover');
    $(this).children('div').css('display', 'none');
  })

  $('.f_top').click((e) => { //回到顶部
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });

  let cookieUsername = Cookie.get('username'); //检查cookie
  let cookiePassword = Cookie.get('password');
  let cookiePhone = Cookie.get('phone');
  if (cookieUsername && cookiePassword) {
    $('#ilogin').text(cookieUsername);
  };

  $('.consult_tabMenu').on('click', 'div', function () {
    // console.log(this,$(this).index());
    $(this).addClass('tabMenu_cur').siblings().removeClass('tabMenu_cur');
    $('.consult_text').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
  });

  $('.server_tab').on('click', 'li', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.tab_con').css({
      'display': 'none'
    }).eq($(this).index()).css({
      'display': 'block'
    });
  });

  //1.楼梯什么时候显示，800px scroll--->scrollTop
  $(window).on('scroll', function () {
    var $scroll = $(this).scrollTop();
    if ($scroll >= 700) {
      $('#elevator_n').show();
    } else {
      $('#elevator_n').hide();
    }

    //4.拖动滚轮，对应的楼梯样式进行匹配
    $('.index_floor').each(function (index) {
      var $loutitop = $('.index_floor').eq($(".index_floor").index(this)).offset().top + 100;
      if ($loutitop > $scroll) { //楼层的top大于滚动条的距离
        $('#elevator_n li').removeClass('current');
        $('#elevator_n li').eq($(".index_floor").index(this)).addClass('current');
        return false; //中断循环
      }
    });
  });
  //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left

  var $loutili = $('#elevator_n li')
  $loutili.on('click', function () {
    $(this).addClass('current').siblings('li').removeClass('current');
    var $loutitop = $('.index_floor').eq($(this).index()).offset().top;
    //获取每个楼梯的offsetTop值
    $('html,body').animate({ //$('html,body')兼容问题body属于chrome
      scrollTop: $loutitop
    })
  });
  //3.回到顶部
  $('#itop').on('click', function () {
    $('html,body').animate({ //$('html,body')兼容问题body属于chrome
      scrollTop: 0
    }, 1000)
  });

  $('.fi').hover(function () { //float_box
    $(this).find('i').css('display', 'none');
  }, function () {
    $(this).find('i').css('display', 'block');
  });


  $('.iyaonet').on('mouseenter', function () { //我的医药网（鼠标移入移出）
    $(this).siblings('ul').stop().show();
    // $(this).siblings('ul').on('mouseenter', 'li', function () {});
    $(this).siblings('ul').on('mouseleave', function () {
      $(this).hide();
    })
  });

  $('.favorite').click(function (e) { //收藏本站
    e.preventDefault();
    alert('抱歉，您所使用的的浏览器无法完成此操作 \n 加入收藏失败，请使用Ctrl+D进行添加');
  });

  $('.province_box').hover(function () { //省份
    $(this).children('ul').stop().show();
  }, function () {
    $(this).children('ul').hide();
  });

  $('#headerAllProvince').on('click', 'a', function (e) { //点击省份替换
    e.preventDefault();
    $('.province').children().text($(this).text());
  })

  $('.tell').hover(function () { //手机二维码
    $(this).siblings('.tell_title').stop().show();
    $(this).siblings('#menu_bd_app').stop().show();
  }, function () {
    $(this).siblings('.tell_title').hide();
    $(this).siblings('#menu_bd_app').hide();
  });

  getCartData();  // 页面进来时发送一次请求，获取购物车数据
  function getCartData() {
    $.ajax({
      type: "get",
      url: "../api/getCartData.php",
      dataType: "json",
      success: function (res) {
        console.log(res);
        let num = res.data.goods.length,
          data = res.data.goods;
        console.log(num);
        if (num > 0) {
          $('.cart_num').text(num);
          $('.icartNum').text(num);
          let html = `<div class="list_detail">
          <ul style="display: block;">${data.map((li,index)=>{
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
          $('#minicart_list li').each(function(){
            let goodNum = parseInt($(this).find('.minicart_num').val());
            let goodPrice = Math.round(parseFloat($(this).find('.pro_price').text().slice(1))*100)/100;
            total_num += goodNum;   //当前商品总数量
            total_price += goodPrice*goodNum;   //总价
          });
          console.log(total_num,total_price);
          $('.minicart_list').append(`<div class="checkout_box" style="display: block;">
          <p>
            <span class="fl"> 共<em class="fstrong">${total_num}</em>件商品</span> 合计：<em class="fstrong">¥${total_price}</em>
          </p>
          <a rel="nofollow" class="checkout_btn" href="./cart.html" target="_self"> 去结算 </a>
        </div>
        <div style="display: none;" class="none_tips">
          <i> </i>
          <p>您的购物车里还没有商品，如已添加商品，请 <a rel="nofollow" href="./login.html" target="_self">登录 </a> 。</p>
        </div>`);
        } else if (num == 0) {
          $('.cart_num').text(num);
          $('.icartNum').text(num);
          $('.minicart_list').html(`
          <div class="list_detail">
            <ul style="display: none;"></ul>
            <div class="checkout_box" style="display: none;">
              <p>
                <span class="fl"> 共<em class="fstrong">${num}</em>件商品</span> 合计：<em class="fstrong">¥0</em>
              </p>
              <a rel="nofollow" class="checkout_btn" href="./cart.html" target="_self"> 去结算 </a>
            </div>
            <div style="display: block;" class="none_tips">
              <i> </i>
              <p>您的购物车里还没有商品，如已添加商品，请 <a rel="nofollow" href="./login.html" target="_self">登录 </a> 。</p>
            </div>
          </div>`)
        };
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

  $('.mod_minicart').mouseenter(function () {  //  鼠标移入小购物车
    $(this).children('#minicart_list').stop().show();
    debounce(getCartData,1000)();   //防抖
    
  });

  $('.mod_minicart').mouseleave(function () {
    $(this).children('#minicart_list').hide();
  });

  $('.f_wei').mouseenter(function(){   //鼠标移入右边小购物车
    $('#bottom_minicart_list').stop().show();
  });
  $('.minicart_list').mouseenter(function(){ 
    $(this).stop().show();
    debounce(getCartData,1000)();   //防抖
  });
  $('.minicart_list').mouseleave(function(){
    $(this).hide();
  });
  $('.f_wei').mouseleave(function(){   //鼠标移入右边小购物车
    $('#bottom_minicart_list').hide();
  });
 

}