
let arr = [
    {
        imgUrl: './images/img-1.jpg',
        title: 'Tatami Cup',
        origin_price: 'NT$1,200',
        price: 'NT$1,080'
    },
    {
        imgUrl: './images/img-2.jpg',
        title: 'Couple Collection',
        price: '',
        origin_price: 'NT$2,800',
    },
    {
        imgUrl: './images/img-3.jpg',
        title: 'Brotherhood Vase',
        price: '',
        origin_price: 'NT$4,800',
    },
    {
        imgUrl: './images/img-4.jpg',
        title: 'Baifan Bowl',
        price: '',
        origin_price: 'NT$1,800',
    },
];
let wrapper = document.querySelector('.swiper-wrapper');
creaded()

function creaded() {
    let str = '';
    arr.forEach(function (item) {
        str +=
            `
        <div class="swiper-slide">
           <div class="card border-none">
              <img src="${item.imgUrl}" class="card-img-top"  alt="...">
              <div class="card-body mt-2">
                  <h4 class="text-left mb-1">${item.title}</h4>
                  <div class="d-flex">
                  <p class="mr-2 txt  text-dark">${item.origin_price}</p>
                  <p class="txt2 text-dark">${item.price}</p>
                  </div>
               </div>
            </div>
        </div>
        `
    })
    wrapper.innerHTML = str;
}

