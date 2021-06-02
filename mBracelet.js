const products = [
  {
    id: 28,
    title: 'იტალიური ქარხნული ბრასლეტი',
    prob: 585,
    weight: 7.8,
    price: 1200,
    img1: 'https://www.dropbox.com/s/1fdxdr7fcazexvs/ocdarva.jpg?raw=1',
    img2: 'https://www.dropbox.com/s/im46bqbidfyq5dm/ocdarvaOri.jpg?raw=1',
    category: 'bracelet',
    gender: 'man',
    sold: false,
    description: 'იყიდება იტალიური ქარხნული ოქროს ბრასლეტი.'
  },
{
  id: 27,
  title: 'ბრასლეტი',
  prob: 585,
  weight: 9.3,
  price: 1300,
  img1: 'https://www.dropbox.com/s/kvw68q2920d9hvs/ocdashvidi.jpg?raw=1',
  img2: '',
  category: 'bracelet',
  gender: 'man',
  sold: false,
  description: 'იყიდება ოქროს ბრასლეტი.'
},

{
  id: 26,
  title: 'თანამედროვე დიზაინის ორეული ბეჭედი(ჯდება ერთმანეთში) 700$',
  prob: '585',
  weight: 8.86,
  img1: 'https://www.dropbox.com/s/1dnre53xbcjw5w2/ocdaeqvsi.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/34ij3kivc6bpfro/ocdaeqvsiOri.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება თანამედროვე დიზაინის ორეული ბეჭედი(ზომა 19.5, ჯდება ერთმანეთში) ფასი 700$. ორ ფერში. თეთრი და ყვითელი ოქრო. ბრილიანტები დიდი ბეჭდის - ჯამში 0.20 კარატი(4 ცალი -0.05კტ ბრილიანტი), პატარა ბეჭდის - 3 ცალი 0.03კტ ბრილიანტი. შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 25,
  title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით',
  prob: '14კტ',
  weight: 7.67,
  price: 2500,
  img1: 'https://www.dropbox.com/s/0bxh57dyvd56fy0/ocdaxuti.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/wih0f0tmu0e419u/ocdaxutiOri.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 16, ჯამში 1 კარატამდე). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 24,
  title: 'ბეჭედი აქვამარინი ბრილიანტებით',
  prob: 750,
  weight: 12.82,
  price: 3000,
  img1: 'https://www.dropbox.com/s/i6h8yjy2gv62v8b/ocdaotxi.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/5wem3saohqxysrt/ocdaotxiOri.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბეჭედი აქვამარინი ბრილიანტებით(ზომა 19.5). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 23,
  title: 'ძველი ხელნაკეთი ბეჭედი ონიქსი ბრილიანტებით',
  prob: 585,
  weight: 9.9,
  price: 1500,
  img1: 'https://www.dropbox.com/s/of5g23ia8g6d1v0/ocdasami.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/fu2enu4kg3c0lws/ocdasamiOri.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ხელნაკეთი ბეჭედი ონიქსი ბრილიანტებით(ზომა 22). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 22,
  title: 'ძველი ქარხნული ბეჭედი საფირით',
  prob: 583,
  weight: 16.81,
  price: 2500,
  img1: 'https://www.dropbox.com/s/g3ihxc03tkfpc2o/ocdaori.jpg?raw=1',
  img2: '',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ქარხნული ბეჭედი საფირით(ზომა 24). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 21,
  title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით',
  prob: 750,
  weight: 9.7,
  price: 2500,
  img1: 'https://www.dropbox.com/s/hzikm5rvknfp5eq/ocdaerti.jpg?raw=1',
  img2: '',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 18.5, 10ც ბრილიანტი, ჯამში 0.20 კარატი). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 20,
  title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით',
  prob: 750,
  weight: 10.46,
  price: 2500,
  img1: 'https://www.dropbox.com/s/pes8030nok9r809/oci.jpg?raw=1',
  img2: '',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 16, 11ც ბრილიანტი, ჯამში 0.30 კარატი). შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 19,
  title: 'ძველი ხელნაკეთი ბეჭედი მინანქრით, საფირითა და ბრილიანტებით',
  prob: 583,
  weight: 9.23,
  price: 2500,
  img1: 'https://www.dropbox.com/s/4xf53dhdx2i1hk8/19.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/0lbglm0g8vyptpp/19-ori.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ხელნაკეთი ბეჭედი მინანქრით საფირითა და ბრილიანტებით. ზომა: 20. შესაძლებელია ზომის გადაკეთება.',
},
{
  id: 18,
  title: 'ბეჭედი ძველი დაწახნაგების საფირი ბრილიანტებით',
  prob: 750,
  weight: 13.57,
  price: 4000,
  img1: 'https://www.dropbox.com/s/52oewaduf8p6lo5/18-1.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/52oewaduf8p6lo5/18-1.jpg?raw=1',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბეჭედი ძველი დაწახნაგების საფირი ბრილიანტებიით. ზომა 20. 12ც ბრილიანტი, ჯამში 1.3 კარატი. შესაძლებელია ზომის გადაკეთება.'
},
 {
  id: 17,
  title: 'ბეჭედი ძოწი ბრილიანტებით',
  prob: 583,
  weight: 16.06,
  price: 3500,
  img1: 'https://www.dropbox.com/s/2p6qvolgursqmlk/17.jpg?raw=1',
  img2: '',
  category: 'ring',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბეჭედი ძოწი ბრილიანტებით. ზომა 18.5, 15ცალი ბრილიანტი, ჯამში 0.90 კარატი. შესაძლებელია ზომის გადაკეთება.'
},
{
  id: 16,
  title: 'ბრილიანტის საყურეები',
  prob: 585,
  weight: 4.5,
  price: 1000,
  img1: 'https://www.dropbox.com/s/i41zhjx1gzkwksz/16.jpg?raw=1',
  img2: '',
  category: 'earings',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბრილიანტის საყურეები. 0.03 კარატი.'
},
{
  id: 15,
  title: 'იტალიური ქარხნული მსხლები',
  prob: 585,
  weight: 5.6,
  price: 900,
  img1: 'https://www.dropbox.com/s/yxe1o5nldx9pvse/15.jpg?raw=1',
  img2: '',
  category: 'earings',
  gender: 'woman',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ოქროს მსხლები საყურეები.'
},
{
  id: 14,
  title: 'იტალიური ქარხნული მსხლები',
  prob: 585,
  weight: 10,
  price: 1600,
  img1: 'https://www.dropbox.com/s/6biwi1nj6yvqbm3/14.jpg?raw=1',
  img2: '',
  category: 'earings',
  gender: 'woman',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ოქროს მსხლები საყურეები.'
},
{
  id: 13,
  title: 'ბრილიანტის საყურეები',
  prob: 585,
  weight: 8.14,
  price: 1500,
  img1: 'https://www.dropbox.com/s/muk03dxxq6k66am/13.jpg?raw=1',
  img2: '',
  category: 'earings',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბრილიანტის საყურეები.'
},
{
  id: 12,
  title: 'ძველი ანტიკვარული ცეპი',
  prob: 56,
  weight: 10.31,
  price: 1550,
  img1: 'https://www.dropbox.com/s/upswrdxhkeeipu8/tormeti.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ანტიკვარული ცეპი. სიგრძე: 62სმ.'
},
{
  id: 11,
  title: 'იტალიური ქარხნული ცეპი',
  prob: 585,
  weight: 10.04,
  price: 1400,
  img1: 'https://www.dropbox.com/s/qx9n6moravn6y8s/11.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ცეპი. სიგრძე: 57სმ.'
},
{
  id: 10,
  title: 'იტალიური ქარხნული ცეპი',
  prob: 585,
  weight: 7.06,
  price: 1100,
  img1: 'https://www.dropbox.com/s/g5ue7g8dy4idcrb/10.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ოქროს ცეპი. სიგრძე: 51სმ.'
},
{
  id: 9,
  title: 'ძველი ქარხნული ცეპი',
  prob: 583,
  weight: 12,
  price: 1800,
  img1: 'https://www.dropbox.com/s/v1ayu51lxbpail3/9.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ქარხნული ოქროს ცეპი. სიგრძე: 55სმ.'
},
{
  id: 8,
  title: 'ძველი ქარხნული გრეხილი',
  prob: 583,
  weight: 17.47,
  price: 2600,
  img1: 'https://www.dropbox.com/s/o6qvsxk5pb3t1zq/8-1.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/klhj87uj5kwxh2f/8-ori.jpg?raw=1',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ქარხნული ოქროს გრეხილი. სიგრძე: 50სმ.'
},
{
  id: 7,
  title: 'იტალიური ქარხნული ცეპი',
  prob: 750,
  weight: 15.27,
  price: 2900,
  img1: 'https://www.dropbox.com/s/z5n4sby2y2mv2if/7.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ოქროს ცეპი. სიგრძე: 70სმ.'
},
{
  id: 6,
  title: 'ბისმარკის ცეპები',
  prob: 583,
  weight: 15,
  price: 1950,
  img1: 'https://www.dropbox.com/s/cu9qa4cb6n7yxcu/6.jpg?raw=1',
  img2: '',
  category: 'chain',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ბისმარკის ოქროს ცეპები. სიგრძე: 55სმ, 65სმ, 62სმ.'
},

 {
  id:5,
  title: 'იტალიური ქარხნული ბრასლეტი',
  prob: 585,
  weight: 42.91,
  price: 6000,
  img1: 'https://www.dropbox.com/s/e26q1iy1ya1g103/5.jpg?raw=1',
  img2: '',
  category: 'bracelet',
  gender: 'man',
  sold: false,
  description: 'იყიდება იტალიური ქარხნული ოქროს ბრასლეტი.'
},

{
  id:4,
  title: 'გრაციელას ბრენდის ბრასლეტი',
  prob: 750,
  weight: 27.3,
  price: 5400,
  img1: 'https://www.dropbox.com/s/yx7befndyd99zfu/4.jpg?raw=1',
  img2: '',
  category: 'bracelet',
  gender: 'woman',
  sold: false,
  description: 'იყიდება გრაციელას ბრენდის ოქროს ბრასლეტი.'
},
{
  id:3,
 title: 'ძველი ქარხნული საათის ბრასლეტი',
 prob: 583,
 weight: 22.15,
 price: 3300,
 img1: 'https://www.dropbox.com/s/v3dq8qcfu6fdvp0/3.jpg?raw=1',
 img2: '',
 category: 'bracelet',
 gender: 'woman',
 sold: true,
 description: 'იყიდება ძველი ქარხნული ოქროს საათის ბრასლეტი.'
},

{
  id:2,
  title: 'ძველი ქარხნული საათის ბრასლეტი',
  prob: 583,
  weight: 13.5,
  price: 2000,
  img1: 'https://www.dropbox.com/s/gaqa9oh2ujauj48/watchBracletWm.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/xt655yxk80yevhd/watchBracletWm2.jpg?raw=1',
  category: 'bracelet',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ქარხნული ოქროს საათის ბრასლეტი.'
},
{
  id:1,
  title: 'ძველი ქარხნული საათი',
  prob: 583,
  weight: 19.74,
  price: 2100,
  img1: 'https://www.dropbox.com/s/a1farva0x5jgvlu/watchWm1.jpg?raw=1',
  img2: 'https://www.dropbox.com/s/60h6xbb4cal3646/watchWm.jpg?raw=1',
  category: 'watch',
  gender: 'woman',
  sold: false,
  description: 'იყიდება ძველი ქარხნული ოქროს საათი.'
}

];

  
  //Display Products on Woman Bracelet Page
  let outerDivProducts = document.querySelector('.productsOuterDiv');
  
  let womanBracelets = products.filter(product => product.category === 'bracelet')
  let mapWmBracelets = womanBracelets.map(product => `<div class='productDiv'>
  <div class='imgDiv'>
  <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  
  outerDivProducts.innerHTML = mapWmBracelets.join('');
  
  
  //Display Searched Products
  let filterInput = document.querySelector('.filterInput');
  //Add event listener
  filterInput.addEventListener('keyup', filterProducts);
  
  function filterProducts(e){
  var productsOuterDiv = document.querySelector('productsOuterDiv');
  //Get Value of Input
  var filteredValue = e.target.value.toLowerCase();
  
  //Filter through products array
  let searchedProducts = womanBracelets.filter(product =>{
    if (product.title.toLowerCase().indexOf(filteredValue) > -1) {
      return `<div class='productDiv'>
        <div class='imgDiv'>
          <img src='${product.img1}' alt='${product.title}'>
        </div>
        <h6><strong>${product.title}</strong></h6>
        <p><strong>წონა:</strong> ${product.weight} გრამი</p>
        <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
        <p><strong>ფასი:</strong> ${product.price} ლარი</p>
        <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
      </div>`;
    }
    
  });
  //Map throug searched results
  let searchedResult = searchedProducts.map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>`);
  
  outerDivProducts.innerHTML = searchedResult.join('');
  }
  
  //Btn search click
  let btnSearch = document.querySelector('.btn-search');
  btnSearch.addEventListener('click', onSearchClick);
  
  function onSearchClick(e){
  e.preventDefault();
  //Hide categories menu
  hiddenMenu.style.setProperty("display", "none", "important");
  //Change burger style 
  let burger = document.querySelector('.burger');
  burger.classList.remove('change');
  }
  
  
  
  //Filter Prices on woman bracelet page
  let select = document.querySelector('.selectWmBrc');
  select.addEventListener('click', onPriceClick);
  
  function onPriceClick(){
  
  var productsOuterDiv = document.getElementById('productsOuterDiv');
  
  if(select.value === '1₾ - 300₾'){
  
   let underThreeHundred = womanBracelets.filter(product => product.price <= 300)
  
   let result1 = underThreeHundred.map(product => `<div class='productDiv'>
   <div class='imgDiv'>
     <img src='${product.img1}' alt='${product.title}'>
   </div>
   <h6><strong>${product.title}</strong></h6>
   <p><strong>წონა:</strong> ${product.weight} გრამი</p>
   <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
   <p><strong>ფასი:</strong> ${product.price} ლარი</p>
   <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result1.join('');
  }else if(select.value === '301₾ - 500₾'){
  
   let result2 = womanBracelets.filter(product => product.price > 300 & product.price <= 500)
   .map(product => `<div class='productDiv'>
   <div class='imgDiv'>
     <img src='${product.img1}' alt='${product.title}'>
   </div>
   <h6><strong>${product.title}</strong></h6>
   <p><strong>წონა:</strong> ${product.weight} გრამი</p>
   <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
   <p><strong>ფასი:</strong> ${product.price} ლარი</p>
   <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result2.join('');
  }else if(select.value === '501₾ - 800₾'){
  
   let result3 = womanBracelets.filter(product => product.price > 500 & product.price <= 800)
   .map(product => `<div class='productDiv'>
   <div class='imgDiv'>
     <img src='${product.img1}' alt='${product.title}'>
   </div>
   <h6><strong>${product.title}</strong></h6>
   <p><strong>წონა:</strong> ${product.weight} გრამი</p>
   <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
   <p><strong>ფასი:</strong> ${product.price} ლარი</p>
   <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result3.join('');
  }else if(select.value === '801₾ - 1000₾'){
  
  let result4 = womanBracelets.filter(product => product.price > 800 & product.price <= 1000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
   <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result4.join('');
  }else if(select.value === '1001₾ - 1500₾'){
  
  let result5 = womanBracelets.filter(product => product.price > 1000 & product.price <= 1500)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
   <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result5.join('');
  }else if(select.value === '1501₾ - 2000₾'){
  
  let result6 = womanBracelets.filter(product => product.price > 1501 & product.price <= 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
   <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result6.join('');
  }else if(select.value === '2000₾+'){
  
  let result7 = womanBracelets.filter(product => product.price > 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
   <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result7.join('');
  }else if(select.value === 'ყველა'){
  
  let result8 = womanBracelets
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details' onclick='onDetailsClick(${product.id})'>დეტალურად</button>
  </div>` );
  outerDivProducts.innerHTML = result8.join('');
  }
  }
  
  
//on button details click
 function onDetailsClick(id){
  let productsSection = document.querySelector('.productsSection');
  let filter= document.querySelector('.filter');
  productsSection.style.display='none';
  filter.style.display='none';
  window.scrollTo(0, 0);
  let productInner = document.querySelector('.productInner');
    productInner.innerHTML= `<div class="container">
    <div class="row">
      <div class="col-md-4">
        <section>
            <a href="index.html" class="goBack"><img src="./img/goBack.svg"></a>
            <h6><strong>${products[products.length-id].title}</strong></h6>
            <p class="priceInDetails">${products[products.length-id].price} ლარად</p>
            <hr>
            <p>${products[products.length-id].description}</b>
            </p>
        </section>
      </div>
      <div class="col-md-8">
          <img src="${products[products.length-id].img1}">
          <img style="margin-top: 20px" src="${products[products.length-id].img2}">
      </div>
    </div>
  </div>`;
  
  }