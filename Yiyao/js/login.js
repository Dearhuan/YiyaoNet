/* SVN.committedRevision=653628 */

/**
 * 切换登录选择tab页
 */
function switchLoginTab(type) {
  if (type == 1) {
    //普通登录
    $("#commonLogin").show();
    $("#quickLogin").hide();
    $("#commonLoginTab").addClass("cur");
    $("#quickLoginTab").removeClass("cur");
  } else if (type == 2) {
    //快捷登录
    $("#commonLogin").hide();
    $("#quickLogin").show();
    $("#commonLoginTab").removeClass("cur");
    $("#quickLoginTab").addClass("cur");
  }
}
window.onload = function () {



  let usernameInput = $('#userName');
  let passwordInput = $('#userPass');
  let imageCodeInput = $('#vcd');
  let phoneInput = $('#phoneNum4QuickLogin');
  let msgCodeInput = $('#smsCode4QuickLogin');

  let msgCodeBtn = $('#getSmsCodeBtn');
  let msgInfoBtn = $('#SmsCodeInfoBtn');
  let loginBtn = $('#btnSubmit');
  let quickLogin = $('#btnSubmit4QuickLogin');

  let rememberBtn = $('#rememberPwd');

  let usernameVal = "";
  let passwordVal = "";
  let phoneVal = "";
  let imageCodeVal = "";
  let msgCodeVal = "";
  let num;

  let usernameReg = /^[a-zA-Z]{6,8}$/; /* 请设置您的用户名(6~8位字母区分大小写) */
  let phoneReg = /^1[3-9]\d{9}$/; /* 第一位：1 第二位不能为012 11位数字 */
  let passwordReg = /^[a-zA-Z0-9]{6,16}$/;

  (new Captcha({ //画出验证码
    lineNum: 5,
    dotNum: 10,
    length: 4,
    fontSize: 30
  })).draw(document.querySelector('#captcha'), r => {
    console.log(r, '验证++++');
    imageCodeVal = r;
  });

  $('#getSmsCodeBtn').click(function () { //获取短信验证码
    phoneInput.trigger('blur');
    let flag = phoneInput.hasClass('error');
    if (flag) {
      alert('手机号码不正确！请重新输入');
      return;
    } else {
      let timeCount = 60;
      msgCodeBtn.stop().hide();
      msgInfoBtn.stop().show();
      let timer = setInterval(function () {
        timeCount--;
        msgInfoBtn.text(`${timeCount}秒`);
        if (timeCount == 0) {
          clearInterval(timer);
          msgCodeBtn.stop().show();
          msgInfoBtn.stop().hide();
          msgCodeBtn.text('获取短信验证码');
        }
      }, 1000);

      //获取随机数
      function getRandNum(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
      }

      function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear() +
          "" // "年"
          +
          (month >= 10 ? month : "0" + month) +
          "" // "月"
          +
          (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate()) +
          "" +
          (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours()) +
          "" +
          (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes()) +
          "" +
          (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
        return datetime;
      }

      num = getRandNum(1000, 9999); //生成四位随机验证码
      console.log(num);
      // msgCodeVal = num;   //存短信验证码
      $.ajax({
        type: 'post',
        url: 'http://route.showapi.com/28-1',
        dataType: 'json',
        data: {
          "showapi_timestamp": formatterDateTime(),
          "showapi_appid": '105009', //这里需要改成自己的appid
          "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
          "mobile": phoneInput.val().trim(),
          "content": `{\"name\":\"牛二\",\"code\":\"${num}\",\"minute\":\"3\",\"comName\":\"千峰教育\"}`,
          "tNum": "T150606060601",
          "big_msg": ""
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
          alert("操作失败!");
        },
        success: function (result) {
          console.log(result) //console变量在ie低版本下不能用
          // alert(result.showapi_res_code);
          alert('发送成功');
        }
      });
    }
  })

  phoneInput.blur(function () { //手机号校验
    let val = $(this).val().trim();
    if (val.length == 0) {
      $(this).siblings('.i_empty').css('display', 'block');
      $(this).siblings('span').css('display', 'block');
      $(this).addClass('ierror');
    } else {
      if (!phoneReg.test(val)) {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('span').css('display', 'block');
        $(this).addClass('ierror');

      } else {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('span').css('display', 'none');
        $(this).removeClass('ierror');

        phoneVal = val;
      }
    }
  });

  msgCodeInput.blur(function () { //短信验证码校验
    let val = $(this).val().trim();
    if (val.length == 0) {
      $(this).siblings('.i_empty').css('display', 'block');
      $(this).siblings('span').css('display', 'block');
      $(this).addClass('ierror');

    } else {
      if (val != num) {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('span').css('display', 'block');
        $(this).addClass('ierror');

      } else {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('span').css('display', 'none');
        $(this).removeClass('ierror');

        msgCodeVal = val;
      }
    }
  });

  usernameInput.blur(function () {
    let val = $(this).val().trim();
    if (val.length == 0) {
      $(this).siblings('.i_empty').css('display', 'block');
      $(this).siblings('.error').css('display', 'block');
      $(this).addClass('ierror');
    } else {
      $(this).siblings('.i_empty').css('display', 'none');
      $(this).siblings('.error').css('display', 'none');
      $(this).removeClass('ierror');
      usernameVal = val;
    }
  })
  passwordInput.blur(function () {
    let val = $(this).val().trim();
    if (val.length == 0) {
      $(this).siblings('.i_empty').css('display', 'block');
      $(this).siblings('.error').css('display', 'block');
      $(this).addClass('ierror');
    } else {
      if (!passwordReg.test(val)) {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('.error').css('display', 'block');
        $(this).addClass('ierror');
      } else {
        $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('.error').css('display', 'none');
        $(this).removeClass('ierror');
        passwordVal = val;
      }
    };
  })

  imageCodeInput.blur(function () {
    let val = $(this).val().trim();
    val = val.toLowerCase();
    imageCodeVal = imageCodeVal.toLowerCase();
    if (val.length == 0) {
      // $(this).siblings('.i_empty').css('display', 'block');
      $(this).siblings('.error').css('display', 'block');
      $(this).addClass('ierror');

    } else {
      if (val != imageCodeVal) {
        // $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('.error').css('display', 'block');
        $(this).addClass('ierror');

      } else {
        // $(this).siblings('.i_empty').css('display', 'none');
        $(this).siblings('span').css('display', 'none');
        $(this).removeClass('ierror');

        imageCodeVal = val;
      }
    }
  })

  loginBtn.click(function () {
    console.log(usernameVal, passwordVal);
    let len = $('.ierror').length;
    console.log(len);
    let isSuccess = len == 0 && usernameVal && passwordVal;
    console.log(isSuccess);
    if (!isSuccess) {
      alert('请完善信息！');
      return;
    } else {
      $.ajax({
        type: "post",
        url: "../api/login.php",
        data: `username=${usernameVal}&password=${passwordVal}`,
        dataType: "json",
        success: function (response) {
          if (response.status == "success") {
            // alert(response.data.msg);
            if (rememberBtn.is(':checked')) {
              Cookie.set('username', usernameVal, '/', 14);
              Cookie.set('password', passwordVal, '/', 14);
            }else{
              Cookie.set('username', usernameVal, '/', 1);
              Cookie.set('password', passwordVal, '/', 1);
            }
            window.location.href = "./index.html";
          } else {
            alert(response.data.msg);
          }
        }
      });
    }
  })

  quickLogin.click(function () {
    console.log(phoneVal, msgCodeVal);
    let len = $('.ierror').length;
    console.log(len);

    let isSuccess =
      len == 0 && phoneVal && msgCodeVal;
    console.log(isSuccess);
    if (!isSuccess) {
      alert('请完善信息!');
      return;
    } else {
      console.log('---ok----');
      $.ajax({
        type: "post",
        url: "../api/loginByPhone.php",
        data: `phone=${phoneVal}`,
        dataType: "json",
        success: function (response) {
          if (response.status == "success") {
            // alert(response.data.msg);
            Cookie.set('phone', phoneVal, '/', 1);
            window.location.href = "./index.html";
          } else {
            alert(response.data.msg);
          }

        }
      });
    }
  })

  $('.moreWeb').hover(function () {
    $(this).siblings('.moreTab').show();
  }, function () {
    $(this).siblings('.moreTab').hide();
  })
}