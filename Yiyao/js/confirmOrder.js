$.ajax({
  type: "get",
  url: "../api/getCartData.php",
  dataType: "json",
  success: function (res) {
    let data = res.data.goods;
    console.log(data);
    let html = data.map(ele => { //渲染订单列表
      return `<tr data-overseas-shopping="true" class="item_goods">
        <td class="first_td">
          <img class="product-img" src=${ele.src}>
        </td>
        <td class="taLeft">${ele.title}</td>
        <td class="item_num">${ele.num}</td>
        <td class="end_td"><em class="f_a">¥</em>${Math.round(ele.price*ele.num*100)/100}</td>
      </tr>`;
    }).join('');
    $(html).insertAfter($('.tr_parcel'));
    let total_num = 0,
      total_price = 0;
    $('.item_goods').each(function () {
      let goodNum = parseInt($(this).find('.item_num').text());
      let goodPrice = Math.round(parseFloat($(this).find('.end_td').text().slice(1)) * 100) / 100;
      total_num += goodNum, total_price += goodPrice;
    });
    console.log(total_num, total_price);
    $('.info .num').text($('.item_goods').length);
    $('.info .total_num').text(total_num);
    $('#theItemAllMoney').text(total_price);
    $('#theAllMoney').text(total_price);
  }
});

window.onload = function () {
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
  let cUsername, cPassword;

  function checkCookie() {
    cUsername = Cookie.get('username'); //检查cookie
    cPassword = Cookie.get('password');
    if (cUsername && cPassword) return true;
  };

  checkCookie() ? $('#ilogin').text(cUsername) : $('#ilogin').text('请登录');

  const orderStr = () =>{
    const now = new Date()
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    String(month).length < 2 ? (month = Number("0" + month)) : month;
    String(day).length < 2 ? (day = Number("0" + day)) : day;
    String(hour).length < 2 ? (hour = Number("0" + hour)) : hour;
    String(minutes).length < 2 ? (minutes = Number("0" + minutes)) : minutes;
    String(seconds).length < 2 ? (seconds = Number("0" + seconds)) : seconds;
    const yyyyMMddHHmmss = `${year}${month}${day}${hour}${minutes}${seconds}`;
    // return yyyyMMddHHmmss + Math.random().toString(36).substr(2, 9);
    return yyyyMMddHHmmss;
  };

  $('#orderSubmitButton').click(function () {
    location.href = `./orderPay.html?id=${orderStr()}`;
  })
}