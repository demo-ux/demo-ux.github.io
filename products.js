  //Products
  const products = [
    {
      id: 26,
      title: 'თანამედროვე დიზაინის ორეული ბეჭედი(ზომა 19.5, ჯდება ერთმანეთში) ფასი 700$',
      prob: '585',
      weight: 8.86,
      
      img1: 'img/ocdaeqvsi.jpg',
      img2: 'img/ocdaeqvsiOri.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false,
      description: 'ჯდება ერთმანეთში. ორ ფერში. თეთრი და ყვითელი ოქრო. ბრილიანტები დიდი ბეჭდის - ჯამში 0.20 კარატი(4 ცალი -0.05კტ ბრიილიანტი), პატარა ბეჭდის - 3 ცალი 0.03კტ '
    },
    {
      id: 25,
      title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 16, ჯამში 1 კარატამდე)',
      prob: '14კტ',
      weight: 7.67,
      price: 2500,
      img1: 'img/ocdaxuti.jpg',
      img2: 'img/ocdaxutiOri.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 24,
      title: 'ბეჭედი აქვამარინი ბრილიანტებით(ზომა 19.5)',
      prob: 750,
      weight: 12.82,
      price: 3000,
      img1: 'img/ocdaotxi.jpg',
      img2: 'img/ocdaotxiOri.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 23,
      title: 'ძველი ხელნაკეთი ბეჭედი ონიქსი ბრილიანტებით(ზომა 22)',
      prob: 585,
      weight: 9.9,
      price: 1500,
      img1: 'img/ocdasami.jpg',
      img2: 'img/ocdasamiOri.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 22,
      title: 'ძველი ქარხნული ბეჭედი საფირით(ზომა 24)',
      prob: 583,
      weight: 16.81,
      price: 2500,
      img1: 'img/ocdaori.jpg',
      img2: '',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 21,
      title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 18.5, 10ც ბრილიანტი, ჯამში 0.20 კარატი)',
      prob: 750,
      weight: 9.7,
      price: 2500,
      img1: 'img/ocdaerti.jpg',
      img2: '',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 20,
      title: 'ევროპული ქარხნული ბეჭედი ბრილიანტებით(ზომა 16, 11ც ბრილიანტი, ჯამში 0.30 კარატი)',
      prob: 750,
      weight: 10.46,
      price: 2500,
      img1: 'img/oci.jpg',
      img2: '',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 19,
      title: 'ძველი ხელნაკეთი ბეჭედი მინანქრით, საფირითა და ბრილიანტებით(ზომა 20)',
      prob: 583,
      weight: 9.23,
      price: 2500,
      img1: 'img/19.jpg',
      img2: 'img/19-ori.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 18,
      title: 'ძველი ხელნაკეთი ბეჭედი მინანქრით, საფირითა და ბრილიანტებით(ზომა 20, 12ც ბრილიანტი, ჯამში 1.3 კარატი)',
      prob: 750,
      weight: 13.57,
      price: 4000,
      img1: 'img/18-1.jpg',
      img2: 'img/18-ori.jpg',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
     {
      id: 17,
      title: 'ბეჭედი ძოწი ბრილიანტებით(ზომა 18.5, 15ც ბრილიანტი, ჯამში 0.90 კარატი)',
      prob: 583,
      weight: 16.06,
      price: 3500,
      img1: 'img/17.jpg',
      img2: '',
      category: 'ring',
      gender: 'woman',
      sold: false
    },
    {
      id: 16,
      title: 'ბრილიანტის საყურეები(0.003 კარატი)',
      prob: 585,
      weight: 4.5,
      price: 1000,
      img1: 'img/16.jpg',
      img2: '',
      category: 'earings',
      gender: 'woman',
      sold: false
    },
    {
      id: 15,
      title: 'იტალიური ქარხნული მსხლები',
      prob: 585,
      weight: 5.6,
      price: 900,
      img1: 'img/15.jpg',
      img2: '',
      category: 'earings',
      gender: 'woman',
      sold: false
    },
    {
      id: 14,
      title: 'იტალიური ქარხნული მსხლები',
      prob: 585,
      weight: 10,
      price: 1600,
      img1: 'img/14.jpg',
      img2: '',
      category: 'earings',
      gender: 'woman',
      sold: false
    },
    {
      id: 13,
      title: 'ბრილიანტის საყურეები',
      prob: 585,
      weight: 8.14,
      price: 1500,
      img1: 'img/13.jpg',
      img2: '',
      category: 'earings',
      gender: 'woman',
      sold: false
    },
    {
      id: 12,
      title: 'ძველი ანტიკვარული ცეპი(62სმ)',
      prob: 56,
      weight: 10.31,
      price: 1550,
      img1: 'img/tormeti.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 11,
      title: 'იტალიური ქარხნული ცეპი(57სმ)',
      prob: 585,
      weight: 10.04,
      price: 1400,
      img1: 'img/11.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 10,
      title: 'იტალიური ქარხნული ცეპი(51სმ)',
      prob: 585,
      weight: 7.06,
      price: 1100,
      img1: 'img/10.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 9,
      title: 'ძველი ქარხნული ცეპი(55სმ)',
      prob: 583,
      weight: 12,
      price: 1800,
      img1: 'img/9.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 8,
      title: 'ძველი ქარხნული გრეხილი(50სმ)',
      prob: 583,
      weight: 17.47,
      price: 2600,
      img1: 'img/8-1.jpg',
      img2: 'img/8-ori.jpg',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 7,
      title: 'იტალიური ქარხნული ცეპი(70სმ)',
      prob: 750,
      weight: 15.27,
      price: 2900,
      img1: 'img/7.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false
    },
    {
      id: 6,
      title: 'ბისმარკის ცეპები(55სმ, 65სმ, 62სმ)',
      prob: 583,
      weight: 15,
      price: 1950,
      img1: 'img/6.jpg',
      img2: '',
      category: 'chain',
      gender: 'woman',
      sold: false,
    },
    {
      id:1,
      title: 'ძველი ქარხნული საათი',
      prob: 583,
      weight: 19.74,
      price: 2100,
      img1: 'img/watchWm1.jpg',
      img2: 'img/watchWm.jpg',
      category: 'watch',
      gender: 'woman',
      sold: false
    },
    {
     id:2,
     title: 'ძველი ქარხნული საათის ბრასლეტი',
     prob: 583,
     weight: 13.5,
     price: 2000,
     img1: 'img/watchBracletWm.jpg',
     img2: '',
     category: 'bracelet',
     gender: 'woman',
     sold: false
   },
     {
       id:3,
      title: 'ძველი ქარხნული საათის ბრასლეტი',
      prob: 583,
      weight: 22.15,
      price: 3300,
      img1: 'img/3.jpg',
      img2: '',
      category: 'bracelet',
      gender: 'woman',
      sold: true
     },
     {
       id:4,
       title: 'გრაციელას ბრენდის ბრასლეტი',
       prob: 750,
       weight: 27.3,
       price: 5400,
       img1: 'img/4.jpg',
       img2: '',
       category: 'bracelet',
       gender: 'woman',
       sold: false
     },
     {
      id:5,
      title: 'იტალიური ქარხნული ბრასლეტი',
      prob: 585,
      weight: 42.91,
      price: 6000,
      img1: 'img/5.jpg',
      img2: '',
      category: 'bracelet',
      gender: 'man',
      sold: false
    }
  ];

  //Display All Products on Main Page
  var productsOuterDiv = document.getElementById('productsOuterDiv');
  const productsBox = products.map(product => `<div class='productDiv'>
  <div class='imgDiv'>
  <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>`);
  productsOuterDiv.innerHTML = productsBox.join('');
  
  //Display Searched Products
  let filterInput = document.getElementById('filterInput');
  //Add event listener
  filterInput.addEventListener('keyup', filterProducts);

  function filterProducts(e){
    var productsOuterDiv = document.getElementById('productsOuterDiv');
    //Get Value of Input
    var filteredValue = e.target.value.toLowerCase();

    //Filter through products array
    let searchedProducts = products.filter(product =>{
      if (product.title.toLowerCase().indexOf(filteredValue) > -1) {
        return `<div class='productDiv'>
          <div class='imgDiv'>
            <img src='${product.img1}' alt='${product.title}'>
          </div>
          <h6><strong>${product.title}</strong></h6>
          <p><strong>წონა:</strong> ${product.weight} გრამი</p>
          <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
          <p><strong>ფასი:</strong> ${product.price} ლარი</p>
          <button class='btn btn-details'>დეტალურად</button>
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
    <button class='btn btn-details'>დეტალურად</button>
  </div>`);

    productsOuterDiv.innerHTML = searchedResult.join('');
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


 //Filter Prices on main page
 let select = document.querySelector('.selectMain');
 select.addEventListener('click', onPriceClick);

function onPriceClick(){

  var productsOuterDiv = document.getElementById('productsOuterDiv');

  if(select.value === '1₾ - 300₾'){

    let underThreeHundred = products.filter(product => product.price <= 300)

    let result1 = underThreeHundred.map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  
  productsOuterDiv.innerHTML = result1.join('');
  }else if(select.value === '301₾ - 500₾'){

    let result2 = products.filter(product => product.price > 300 & product.price <= 500)
    .map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  productsOuterDiv.innerHTML = result2.join('');
  }else if(select.value === '501₾ - 800₾'){

    let result3 = products.filter(product => product.price > 500 & product.price <= 800)
    .map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  productsOuterDiv.innerHTML = result3.join('');
}else if(select.value === '801₾ - 1000₾'){

  let result4 = products.filter(product => product.price > 800 & product.price <= 1000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result4.join('');
}else if(select.value === '1001₾ - 1500₾'){

  let result5 = products.filter(product => product.price > 1000 & product.price <= 1500)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result5.join('');
}else if(select.value === '1501₾ - 2000₾'){

  let result6 = products.filter(product => product.price > 1501 & product.price <= 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result6.join('');
}else if(select.value === '2000₾+'){

  let result7 = products.filter(product => product.price > 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result7.join('');
}else if(select.value === 'ყველა'){

  let result8 = products
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result8.join('');
}


}



let btnDetails = document.querySelectorAll('.btn-details');

btnDetails.forEach(btn=>btn.addEventListener('click', onDetailsClick));

 function onDetailsClick(id){
//   document.querySelector('.body').classList.add('innerBody');
//   document.querySelector('.productsSection').style.display="none";
//   document.querySelector('.productInner').style.setProperty("display", "block", "important");
  window.scrollTo(0, 0);
  document.querySelector('.productsSection').innerHTML=`<p style="margin-left: 30px">საიტზე მიმდინარეობს განახლება!<br>ნივთების დეტალური გვერდები მალე დაემატება.</br></p>`;
  
//  
// }
 }