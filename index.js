
// variables

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

let sectionCart = document.querySelector('#section-cart');
let cart = document.querySelector('#cart');
let cartItems = document.querySelector('#cart-items');
let addCartBtn = document.querySelector('#cart-btn');

let heroImg = document.querySelector('#hero-img');

let slides = document.querySelectorAll(".product");
let thumbs = document.querySelectorAll(".thumb");

let btnClose = document.querySelector('.close');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let modal = document.querySelector('#modal');
let modals = document.querySelectorAll('.modal');

let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus-btn');
let minusBtn = document.querySelector('#minus-btn');

let slideIndex = 1;

let countProduct = 0;



// create Cart div
const createCartDiv = function() {

  let div = document.createElement('div');
  let header = document.createElement('h1');
  let img = document.createElement('img');
  let description = document.createElement('h2');
  let price = document.createElement('p');
  let button = document.createElement('button');
  let deleteButton = document.createElement('img');
  let checkOut = document.createElement('button');
 
  header.innerText = 'Cart';
  header.setAttribute('id', 'cart-header');

  img.setAttribute('src', './images/image-product-1-thumbnail.jpg');
  img.setAttribute('id', 'thumbinal-cart');

  description.innerText = 'Fall Limited Edition Sneakers';
  description.setAttribute('id', 'title-cart');
  
  price.setAttribute('id', 'actual-price');
  
  button.setAttribute('id', 'delete-cart');
  deleteButton.setAttribute('src', './images/icon-delete.svg');
  
  checkOut.innerText = 'Checkout';
  checkOut.setAttribute('id', 'checkout-btn');

  div.appendChild(header);  
  div.appendChild(img);
  div.appendChild(description);
  div.appendChild(price);
  div.appendChild(button);
  button.appendChild(deleteButton);
  div.appendChild(checkOut);

  sectionCart.appendChild(div);
}
createCartDiv();


// hero img index
const showSlides = function(n) {
    console.log(slideIndex);

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " active";
}


// modal index
const showModal = function(n) {
  console.log(slideIndex);

  if (n > modals.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = modals.length;
  }

  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = 'none';
  }

  modals[slideIndex - 1].style.display = 'block';
  modal.style.display = 'block';
  btnClose.style.display = 'block';
  prev.style.display = 'block';
  next.style.display = 'block';
}



// add 1 to counter product
const addProduct = function() {
  countProduct++;
  counter.innerHTML = countProduct;

  let price = document.querySelector('p#actual-price');
  let actualPrice = countProduct * 125;



  price.innerText = '$125 ' + 'x ' + countProduct + ' = ' + actualPrice + ' $';

  addCartBtn.addEventListener('click', function() {
    cartItems.innerHTML = countProduct;
  });
}

// minus 1 to counter product
const minusProduct = function() {
  countProduct--;
  counter.innerHTML = countProduct;

  let price = document.querySelector('p#actual-price');
  let actualPrice = countProduct * 125;
 
  price.innerText = '$125 ' + 'x ' + countProduct + ' = ' + actualPrice + ' $';

 
  addCartBtn.addEventListener('click', function(){
    cartItems.innerHTML = countProduct;
  });
}

const deleteBasket = function() {
  countProduct = 0
  counter.innerHTML = 0 

  let price = document.querySelector('p#actual-price');
  let actualPrice = countProduct / 125;

  cartItems.innerText = countProduct;

  price.innerHTML = '$125 ' + 'x ' + countProduct + ' = ' + actualPrice + ' $';
}


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("actives");
  navMenu.classList.toggle("actives");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("actives");
  navMenu.classList.remove("actives");
}))

let deleteBtn = document.querySelector('button#delete-cart');
deleteBtn.addEventListener('click', deleteBasket);

// open checkout event
cart.addEventListener('click', function() {
  sectionCart.classList.toggle('show');
});


// open modal event
heroImg.addEventListener('click', function() {
  showModal(slideIndex);
});

// close modal event
btnClose.addEventListener('click', function() {
  modal.style.display = 'none';
})


// previous modal event
prev.addEventListener('click', function() {
  showModal(slideIndex -= 1);
  showSlides(slideIndex);
});

// next modal event
next.addEventListener('click', function() {
  showModal(slideIndex += 1);
  showSlides(slideIndex);
});



// add product
plusBtn.addEventListener('click', addProduct);

// minus product 
minusBtn.addEventListener('click', minusProduct);




// circle between thumbinal
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener('click', function() {
    
    slideIndex = i;
    slideIndex++;

    showSlides(slideIndex);
  })
}


showSlides(slideIndex);