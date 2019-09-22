$.ajax({ //banner图渲染
  type: "get",
  url: "../api/swiper.php",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    (new Banner(data).init());
    let swiper = new Swiper('.swiper-container', {
      loop: true,
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
    })
    //鼠标滑过pagination控制swiper切换
    for (i = 0; i < swiper.pagination.bullets.length; i++) {
      swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
      };
    }
    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    swiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    swiper.pagination.destroy()
    swiper.pagination.init()
    swiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
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

$.ajax({ //tab_ul
  type: "get",
  url: "../api/sortul.php",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    $('#sortul').html(data.map(ele => {
      return `<li class="stitle">
                <a href="#">
                  <i class=${ele.icon}></i>
                  <h4>${ele.title}</h4>
                </a>
              </li>`
    }).join(''));
    $('#sortul').find('i').addClass('iconfont');
    // console.log($('#sortul li a').eq(0));
    $('#sortul li a').eq(0).attr('href','./goodlist.html')
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
})


window.onload = function () { //brand切换
  

  $('.y_foot .fri_tit').on('mouseenter', 'li', function () {
    console.log(this, $(this).index());
    $(this).stop().animate().addClass('cur').siblings().removeClass('cur');
    $('.ft_friendlylink').children('div').eq($(this).index()).css('display', 'block').siblings('div').css('display', 'none');
  });

  $('.f_top').click(() => { //回到顶部
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


}