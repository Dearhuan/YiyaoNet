$(function () {
  let usernameInput = $('#username');
  let phoneInput = $('#email');
  let passwordAInput = $('#password');
  let passwordBInput = $('#password2');
  let imageCodeInput = $('#validCode');
  let msgCodeInput = $('#verifyCode');
  let msgCodeBtn = $('#btnCode');
  let msgInfoBtn = $('#btnInfo');
  let registBtn = $('#registerButton');

  let usernameVal = "";
  let passwordVal = "";
  let passwordBVal = "";
  let phoneVal = "";
  let imageCodeVal = "";
  let msgCodeVal = "";
  let num;

  let usernameReg = /^[a-zA-Z]{6,8}$/; /* 请设置您的用户名(6~8位字母区分大小写) */
  let phoneReg = /^1[3-9]\d{9}$/; /* 第一位：1 第二位不能为012 11位数字 */
  let passwordReg = /^[a-zA-Z0-9]{6,16}$/;


  (new Captcha({
    lineNum: 5,
    dotNum: 10,
    length: 4,
    fontSize: 30
  })).draw(document.querySelector('#captcha'), r => {
    console.log(r, '验证++++');
    imageCodeVal = r;
  });

  msgCodeBtn.click(function () {   //获取短信验证码
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
          alert(result.showapi_res_code)
        }
      });
    }
  })

  checkUsername(usernameInput, usernameReg);
  checkPhone(phoneInput, phoneReg);
  checkPwd(passwordAInput, passwordReg);
  checkRepwd(passwordBInput);
  checkImgCode(imageCodeInput);
  checkMsgCode(msgCodeInput);

  function checkUsername(iInput, reg) {
    /* 先获取输入框的值，检查和清理(空格|空) */
    iInput.blur(function () {
      var val = $(this).val().trim();
      if (val.length == 0) {
        $(this).siblings('.i_empty').css('display', 'block');
        $(this).siblings('span').css('display', 'none');
        $(this).addClass('empty');
      } else {
        if (!reg.test(val)) {
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'block');
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
          $(this).removeClass("empty");
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'inline');
          usernameVal = val;
        }
      }
    })
  }
  
  function checkPhone(iInput, reg) {
    /* 先获取输入框的值，检查和清理(空格|空) */
    iInput.blur(function () {
      var val = $(this).val().trim();
      if (val.length == 0) {
        $(this).siblings('.i_empty').css('display', 'block');
        $(this).siblings('span').css('display', 'none');
        $(this).addClass('empty');
      } else {
        if (!reg.test(val)) {
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'block');
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
          $(this).removeClass("empty");
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'inline');
          phoneVal = val;
        }
      }
    })
  }

  function checkPwd(iInput, reg) {
    /* 先获取输入框的值，检查和清理(空格|空) */
    iInput.blur(function () {
      var val = $(this).val().trim();
      if (val.length == 0) {
        $(this).siblings('.i_empty').css('display', 'block');
        $(this).siblings('span').css('display', 'none');
        $(this).addClass('empty');
      } else {
        if (!reg.test(val)) {
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'block');
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
          $(this).removeClass("empty");
          $(this).siblings('.i_empty').css('display', 'none');
          $(this).siblings('span').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'inline');
          passwordVal = val;
        }
      }
    })
  }

  function checkRepwd(iInput) {
    iInput.blur(function () {
      var val = $(this).val().trim();
      if (val.length == 0) {
        $(this).siblings('.i_empty').css('display', 'block');
        $(this).addClass('empty');
      } else {
        if (passwordVal != val) {
          $(this).siblings('#password2_error').css('display', 'block');
          $(this).removeClass("i_empty");
          $(this).addClass("error");
        } else {
          $(this).siblings('#password2_error').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'block');
          $(this).removeClass("error");
          passwordBVal = val;
        }
      }
    })
  }

  function checkImgCode(iInput) {
    iInput.blur(function () {
      var val = $(this).val().trim();
      console.log(val, imageCodeVal)
      val = val.toLowerCase();
      imageCodeVal = imageCodeVal.toLowerCase();

      if (val.length == 0) {
        $(this).siblings('.i_false').css('display', 'inline');
        $(this).siblings('.error').text('请输入验证码');
        $(this).siblings('.error').css('display', 'block');
        $(this).addClass('empty');
      } else {
        if (val != imageCodeVal) {
          $(this).siblings('.i_false').css('display', 'inline');
          $(this).siblings('.i_true').css('display', 'none');
          $(this).siblings('.error').text('验证码错误');
          $(this).siblings('.error').css('display', 'block');
          $(this).removeClass('empty');
          $(this).addClass('error');
        } else {
          $(this).removeClass('error');
          $(this).removeClass('empty');
          $(this).siblings('.i_false').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'inline');
          $(this).siblings('.error').css('display', 'none');
          imageCodeVal = val;
        }
      }
    })
  }

  function checkMsgCode(iInput) {
    iInput.blur(function () {
      var val = $(this).val().trim();
      if (val.length == 0) {
        $(this).siblings('.i_false').css('display', 'inline');
        $(this).siblings('.error').text('请输入短信验证码');
        $(this).siblings('.error').css('display', 'block');
        $(this).addClass('empty');
      } else {
        if (val != num) {
          $(this).siblings('.i_false').css('display', 'inline');
          $(this).siblings('.i_true').css('display', 'none');
          $(this).siblings('.error').text('短信验证码错误');
          $(this).siblings('.error').css('display', 'block');
          $(this).removeClass('empty');
          $(this).addClass('error');
        } else {
          $(this).removeClass('error');
          $(this).removeClass('empty');
          $(this).siblings('.i_false').css('display', 'none');
          $(this).siblings('.i_true').css('display', 'inline');
          $(this).siblings('.error').css('display', 'none');
          msgCodeVal = val;
        }
      }
    })
  }
  
  registBtn.click(function(){
    // console.log($('.error').length);
    let len = $('.error').length - 6;
    let isSuccess = 
    len == 0 && usernameVal && phoneVal && passwordVal && passwordBVal && imageCodeVal && msgCodeVal;
    console.log(isSuccess);
    if(!isSuccess){
      alert('请完善信息!');
      return;
    }else{
      console.log('---ok----');
      $.ajax({
        type: "post",
        url: "../api/regist.php",
        data: `username=${usernameVal}&phone=${phoneVal}&password=${passwordVal}`,
        dataType: "json",
        success: function (response) {
          if(response.status == 'success'){
            alert(response.data.msg);
            window.location.href = '../index.html';
          }else{
            alert(response.data.msg);
          }
        }
      });
      
    }
  })

})