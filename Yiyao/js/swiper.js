class Banner{
  constructor(data,root = document.querySelector('#tsSlideid')){
    this.data = data;
    this.root = root;
    this.container = null;
    this.wrapper = null;
    this.pagination = null;
    this.prev = null;
    this.next = null;
  }
  init(){
    this.createEle();
    this.root.appendChild(this.container);
  }
  createEle(){
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'swiper-wrapper';
    this.wrapper.innerHTML = this.data.map((ele)=>{
      return `<div class="swiper-slide"><img src=${ele}></div>`
    }).join('');
    // console.log(this.wrapper);
    
    this.pagination = document.createElement('div');
    this.pagination.className = 'swiper-pagination';

    this.prev = document.createElement('div');
    this.next = document.createElement('div');
    this.prev.className = 'swiper-button-prev';
    this.next.className = 'swiper-button-next';

    this.container = document.createElement('div');
    this.container.className = 'swiper-container';
    this.container.appendChild(this.wrapper);
    this.container.appendChild(this.pagination);
    this.container.appendChild(this.prev);
    this.container.appendChild(this.next);
                              
  }
}


/* var ul = document.querySelector('#show_pic');
var imgs = ul.querySelectorAll('.blur-img-wrap');
// console.log(imgs);
var arr = [];
Array.from(imgs).forEach((ele)=>{
  arr.push(ele.querySelector('img').src);
})
console.log(arr);
 */

