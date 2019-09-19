$.ajax({ //banner图渲染
  type: "get",
  url: "./api/swiper.php",
  dataType: "json",
  success: function (data) {
    console.log(data);
    (new Banner(data).init());
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
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
  }
});

$.ajax({ //hotKeys渲染
  type: "get",
  url: "./api/hotKeys.php",
  dataType: "json",
  success: function (data) {
    console.log(data);
    let oa = data.map((ele) => {
      return `<a href="#">${ele}</a>`;
    }).join('');
    $('.hotwords').html(oa);
    $('.hotwords').children().first().addClass('red');
  }
});

$.ajax({   //tab_ul
  type: "get",
  url: "./api/sortul.php",
  dataType: "json",
  success: function (data) {
    console.log(data);
    $('#sortul').html(data.map(ele => {
      return `<li class="stitle">
                <a href="#">
                  <i class=${ele.icon}></i>
                  <h4>${ele.title}</h4>
                </a>
              </li>`
    }).join(''));
    $('#sortul').find('i').addClass('iconfont');   
  }
});

$.ajax({
  type: "get",
  url: "./api/floor1_2.php",
  dataType: "json",
  success: function (data) {
    console.log(data);
    data.map((ele,index)=>{
      let floor = $(`<div class="wrap index_floor floor_${index+1} clearfix">`);
      $('.main_body').append(floor);
      let fl = $(`<div class="in_floor_l">`);
      let fr = $(`<div class="in_floor_r">`);
      let ulist1,ulist2 = $(`<ul class="clearfix">`);
      floor.append(fl);
      floor.append(fr);
      fl.append($(`<div class="floor_name floor_name_${index+1} cur">${ele[index].floor}</div>`))
      fl.append(ulist1);
      fl.append(ulist2);

    })
  }
});