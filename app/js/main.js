const productInfoArr = [
  { id: '101', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-1.jpg' },
  { id: '102', category: 'tulips', price: '130', img: 'images/popular-categories/category-tulips-2.jpg' },
  { id: '103', category: 'tulips', price: '110', img: 'images/popular-categories/category-tulips-3.jpg' },
  { id: '104', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-4.jpg' },
  { id: '105', category: 'tulips', price: '90', img: 'images/popular-categories/category-tulips-5.jpg' },
  { id: '106', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-6.jpg' },
  { id: '107', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-7.jpg' },
  { id: '108', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-8.jpg' },
  { id: '109', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-9.jpg' },
  { id: '110', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-10.jpg' },
  { id: '111', category: 'tulips', price: '90', img: 'images/popular-categories/category-tulips-5.jpg' },
  { id: '112', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-6.jpg' },
  { id: '113', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-7.jpg' },
  { id: '114', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-8.jpg' },
  { id: '115', category: 'tulips', price: '120', img: 'images/popular-categories/category-tulips-9.jpg' },
  { id: '203', category: 'roses', price: '110', img: 'images/popular-categories/category-roses-3.jpg' },
  { id: '204', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-4.jpg' },
  { id: '205', category: 'roses', price: '90', img: 'images/popular-categories/category-roses-5.jpg' },
  { id: '206', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-6.jpg' },
  { id: '207', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-7.jpg' },
  { id: '208', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-8.jpg' },
  { id: '209', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-9.jpg' },
  { id: '210', category: 'roses', price: '120', img: 'images/popular-categories/category-roses-10.jpg' },
  { id: '301', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-1.jpg' },
  { id: '302', category: 'bouquets', price: '130', img: 'images/popular-categories/category-bouquets-2.jpg' },
  { id: '303', category: 'bouquets', price: '110', img: 'images/popular-categories/category-bouquets-3.jpg' },
  { id: '304', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-4.jpg' },
  { id: '305', category: 'bouquets', price: '90', img: 'images/popular-categories/category-bouquets-5.jpg' },
  { id: '306', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-6.jpg' },
  { id: '307', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-7.jpg' },
  { id: '308', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-8.jpg' },
  { id: '309', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-9.jpg' },
  { id: '310', category: 'bouquets', price: '120', img: 'images/popular-categories/category-bouquets-10.jpg' },
  { id: '311', category: 'bouquets', price: '110', img: 'images/popular-categories/category-bouquets-9.jpg' },
  { id: '312', category: 'bouquets', price: '70', img: 'images/popular-categories/category-bouquets-10.jpg' },
  { id: '401', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-1.jpg' },
  { id: '402', category: 'wedding-decor', price: '130', img: 'images/popular-categories/category-wedding_decor-2.jpg' },
  { id: '403', category: 'wedding-decor', price: '110', img: 'images/popular-categories/category-wedding_decor-3.jpg' },
  { id: '404', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-4.jpg' },
  { id: '405', category: 'wedding-decor', price: '90', img: 'images/popular-categories/category-wedding_decor-5.jpg' },
  { id: '406', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-6.jpg' },
  { id: '407', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-7.jpg' },
  { id: '408', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-8.jpg' },
  { id: '409', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-9.jpg' },
  { id: '410', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-10.jpg' },
  { id: '411', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-8.jpg' },
  { id: '412', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-9.jpg' },
  { id: '413', category: 'wedding-decor', price: '120', img: 'images/popular-categories/category-wedding_decor-10.jpg' },
  { id: '501', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-1.jpg' },
  { id: '502', category: 'bridal', price: '130', img: 'images/popular-categories/category-bridal-2.jpg' },
  { id: '503', category: 'bridal', price: '110', img: 'images/popular-categories/category-bridal-3.jpg' },
  { id: '504', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-4.jpg' },
  { id: '505', category: 'bridal', price: '90', img: 'images/popular-categories/category-bridal-5.jpg' },
  { id: '506', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-6.jpg' },
  { id: '507', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-7.jpg' },
  { id: '508', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-8.jpg' },
  { id: '509', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-9.jpg' },
  { id: '510', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-10.jpg' },
  { id: '511', category: 'bridal', price: '120', img: 'images/popular-categories/category-bridal-10.jpg' },
];

////////////////////////////////// functions utilities //////////////////////////////////////

function getBasketLocalStorage() {
  const cartDataJSON = localStorage.getItem('basket');
  return cartDataJSON ? JSON.parse(cartDataJSON) : [];
};
function setBasketLocalStorage(basket) {
  const basketCount = document.querySelector('.user-nav__numb');
  localStorage.setItem('basket', JSON.stringify(basket));
  basketCount.textContent = basket.length;
};
function checkingActiveButtons(basket) {
  const buttons = document.querySelectorAll('.product-card__content-btn');

  buttons.forEach(btn => {
    const card = btn.closest('.product-card');
    const id = card.dataset.productId;
    const isInBasket = basket.includes(id);

    btn.disabled = isInBasket;
    btn.classList.toggle('active-btn', isInBasket);
    btn.textContent = isInBasket ? 'added' : 'add';
  });
};
////////////////////////////////////////////////////////////////////////


/////////////////////////////////// main /////////////////////////////////////

const cursorAnimation = (animSection, animelement) => {
  const animationField = document.querySelector(animSection),
    quantityСoefficient = 15;

  let count = 0,
    topOfset = animationField.getBoundingClientRect().top,
    leftOfset = animationField.getBoundingClientRect().left;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  animationField.addEventListener('mousemove', e => {
    count++;
    let x = (e.pageX - leftOfset),
      y = (e.pageY - topOfset);


    if (count % quantityСoefficient === 0) {
      let animElem = document.createElement('span'),
        size = getRandomInt(50, 80);

      animElem.className = animelement;
      animElem.style.left = `${x}px`;
      animElem.style.top = `${y}px`;
      animElem.style.height = `${size}px`;
      animElem.style.width = `${size}px`;
      animationField.appendChild(animElem);
      setTimeout(() => {
        animElem.remove();
      }, 3000);
    };
  });
};
const menuOpen = (openTriger, closingTrigger, hiddenСontent, activeClass) => {
  const openBtn = document.querySelector(openTriger),
    closingBtn = document.querySelector(closingTrigger),
    content = document.querySelector(hiddenСontent),
    menuMobLinks = document.querySelectorAll('.page-navigation__link');

  menuMobLinks.forEach(elem => {
    elem.addEventListener('click', () => {
      content.classList.remove(activeClass);
      document.body.style.overflow = "";
    });
  });


  openBtn.addEventListener('click', () => {
    content.classList.add(activeClass);
    document.body.style.overflow = "hidden";
  });

  closingBtn.addEventListener('click', () => {
    content.classList.remove(activeClass);
    document.body.style.overflow = "";
  });

  content.addEventListener('click', (e) => {
    if (e.target === content) {
      content.classList.remove(activeClass);
      document.body.style.overflow = "";
    };
  });
};
const categoriesFilter = () => {
  const controlBntsBox = document.querySelector('.popular-categories__control'),
    controlBnts = document.querySelectorAll('.popular-categories__btn'),
    contentBox = document.querySelector('.popular-categories__content'),
    showMoreBtn = document.querySelector('.popular-categories__more'),
    cardsForLoading = 5,
    quantityCards = 10;

  function cardCreate(arr) {
    arr.forEach(card => {
      const { id, img, price } = card;
      let cardItem = document.createElement('li');
      cardItem.className = 'popular-categories__box';

      cardItem.innerHTML = `
        <article class="product-card" data-product-id="${id}">
          <a href="product.html" class="product-card__link"></a>
          <img class="product-card__img" src="${img}" width="140" height="140"
            alt="bouquet image">
          <span class="product-card__price">$${price}</span>
          <button class="product-card__content-btn btn-animation" type="button">Add</button>
        </article>
      `;

      contentBox.append(cardItem);
    });
  };

  function fillingСards(quantity, categoryItems, startIndex = 0) {
    const elemsArr = productInfoArr.filter(item => item.category === categoryItems);
    let cardsAvailable = elemsArr.length;
    const arrToShow = elemsArr.splice(startIndex, quantity);

    cardCreate(arrToShow);

    let visiblCards = contentBox.children.length;
    if (cardsAvailable <= visiblCards) {
      showMoreBtn.style.display = 'none';
    } else {
      showMoreBtn.style.display = 'block';
    };

    const basket = getBasketLocalStorage();
    checkingActiveButtons(basket);
    setBasketLocalStorage(basket);
  };

  function changeСategories(event) {
    let target = event.target;
    if (!target.closest('.popular-categories__btn')) return;

    contentBox.innerHTML = '';
    controlBnts.forEach(elem => {
      elem.classList.remove('popular-categories__btn--active');
    });

    let targetCategory = target.dataset.filter;
    showMoreBtn.dataset.category = targetCategory;
    target.classList.add('popular-categories__btn--active');

    fillingСards(quantityCards, targetCategory);
  };

  function addСards() {
    let visiblCards = document.querySelectorAll('.product-card');
    let category = showMoreBtn.dataset.category;


    fillingСards(cardsForLoading, category, visiblCards.length);
  };

  fillingСards(quantityCards, 'tulips');
  showMoreBtn.addEventListener('click', addСards);
  controlBntsBox.addEventListener('click', changeСategories);
};
const fillingСart = () => {
  const cards = document.querySelector('.popular-categories__content');

  function handleCardClick(event) {
    const targetButton = event.target.closest('.product-card__content-btn');
    if (!targetButton) return;

    const card = targetButton.closest('.product-card');
    const id = card.dataset.productId;
    const basket = getBasketLocalStorage();

    if (basket.includes(id)) return;

    basket.push(id);
    setBasketLocalStorage(basket);
    checkingActiveButtons(basket);
  };

  cards.addEventListener('click', handleCardClick);
};

//////////////////////////////////// cart ////////////////////////////////////////

const cartFunctionality = () => {
  const basketBox = document.querySelector('.cart-info__items');
  
  function cartItemCounter(event) {
    const targetButton = event.target.closest('.cart-info__btn');
    if (!targetButton) return;

    let item = targetButton.closest('.cart-info__card');

    const cunNumb = item.querySelector('.cart-info__quantity');
    const totalItemprice = item.querySelector('.cart-info__price');
    const price = item.dataset.price;
    let sum = +cunNumb.textContent;
    let symbol = targetButton.dataset.symbol;

    if (symbol === 'plus') {
      sum++;
    }
    else if (symbol === 'minus') {
      sum--;
    };

    if (sum <= 0) return;

    cunNumb.textContent = sum;
    totalItemprice.textContent = `${price * sum}$`;
    totalPriCalculation();
  };

  function totalPriCalculation() {
    let sum = 0;
    const totalPrice = document.querySelector('.cart-info__total-price');
    const items = document.querySelectorAll('.cart-info__card');

    items.forEach(elem => {
      let elemPriceStr = elem.querySelector('.cart-info__price').textContent;
      let elemPrice = +elemPriceStr.substring(0, elemPriceStr.length - 1);

      sum += elemPrice;
    });


    totalPrice.textContent = `Total price: ${sum}$`;
  };

  function renderCartPage () {
    const basket = getBasketLocalStorage();

    function loadProductBasket(data) {
      const findProducts = data.filter(item => basket.includes(String(item.id)));

      basketBox.textContent = "";
      if (basket.length <= 0) {
        basketBox.textContent = 'your cart is empty';
        return;
      };
      renderProduktBasket(findProducts);
    };

    function renderProduktBasket(arr) {
      arr.forEach(card => {
        const { id, price, img } = card;
        const cardItem = document.createElement('li');
        cardItem.className = 'cart-info__item'

        cardItem.innerHTML = `
       <article class="cart-info__card" data-product-id="${id}" data-price="${price}">
        <img src="${img}" alt="photo of the bouquet" class="cart-info__img">
        <div class="cart-info__counter">
          <button class="cart-info__btn btn-animation" type="button" data-symbol="minus">
            <svg class="cart-info__count-svg">
              <use xlink:href="images/sprite.svg#icon-minus"></use>
            </svg>
          </button>
          <span class="cart-info__quantity">1</span>
          <button class="cart-info__btn btn-animation" type="button" data-symbol="plus">
            <svg class="cart-info__count-svg">
              <use xlink:href="images/sprite.svg#icon-plus"></use>
            </svg>
          </button>
        </div>
        <span class="cart-info__price">${price}$</span>
        <button class="cart-info__btn-delete">
          <svg class="cart-info__svg">
            <use xlink:href="images/sprite.svg#icon-close"></use>
          </svg>
        </button>
        </article>
      `;

        basketBox.append(cardItem);
      });
    };

    function delProduktBasket(event) {
      const targetButton = event.target.closest('.cart-info__btn-delete');
      if (!targetButton) return;

      const card = targetButton.closest('.cart-info__card');
      const id = card.dataset.productId;

      const newBasket = basket.filter(item => item !== id);
      setBasketLocalStorage(newBasket);

      renderCartPage();
    };


    loadProductBasket(productInfoArr);
    checkingActiveButtons(basket);
    setBasketLocalStorage(basket);
    totalPriCalculation();
    basketBox.addEventListener('click', delProduktBasket);

  };
  
  renderCartPage();
  basketBox.addEventListener('click', cartItemCounter);
};

//////////////////////////////////////////////////////////////////////////////////


window.addEventListener('DOMContentLoaded', () => {
  menuOpen('.burger', '.menu-mob__close', '.menu-mob', 'menu-mob--active');

  if (document.getElementById('cart')) {
    cartFunctionality();
  }
  if (document.getElementById('categories')) {
    fillingСart();
  }
  if (document.getElementById('categories')) {
    categoriesFilter();
  }
  if (document.getElementById('filter')) {
    menuOpen('.catalog__filter-open', '.filter__close', '.filter', 'filter--active');
  };
  if (document.getElementById('top-screen')) {
    cursorAnimation('.top-screen', 'cursor-dekor');
  };
});







//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
$(function () {

  $(".grade").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FD4386"
  });

  $('.tabs__tab').on('click', function (e) {
    e.preventDefault();
    $('.tabs__tab').removeClass('tabs__tab--active');
    $(this).addClass('tabs__tab--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });

  $('.catalog__select').styler({

  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.best-restaurants__list:not(.slick-initialized)').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1500
      });
    } else {
      $('.best-restaurants__list.slick-initialized').slick('unslick');
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.discount__wrap:not(.slick-initialized)').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1500
      });
    } else {
      $('.discount__wrap.slick-initialized').slick('unslick');
    }
  });

  $('.special-offer__slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      }
    ]

  });

  $('.reviews__slider-wrap').slick({
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        dots: false,
      }
    ]
  });
});

window.onscroll = function headerFixed() {
  let header = document.querySelector('.header__wrapper');

  if (window.pageYOffset > 20) {
    header.classList.add('header__wrapper--fixed');
  } else {
    header.classList.remove('header__wrapper--fixed');
  }
}

if (document.getElementById('counter')) {
  let plus = document.querySelector('.product-info__plus');
  let minus = document.querySelector('.product-info__minus');

  plus.addEventListener('click', function () {
    let output = document.querySelector('.product-info__quantity');
    let resault = Number(output.textContent) + 1;
    output.textContent = resault;
  });

  minus.addEventListener('click', function () {
    let output = document.querySelector('.product-info__quantity');
    let resault = Number(output.textContent) - 1;

    if (resault >= 1) {
      output.textContent = resault;
    }
  });
};

var $range = $(".filter-price__input"),
  $inputFrom = $(".filter-price__number--from"),
  $inputTo = $(".filter-price__number--to"),
  instance,
  min = 0,
  max = 1200,
  from = 100,
  to = 1000;

$range.ionRangeSlider({
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});

if (window.location.pathname === '/index.html') {
  document.getElementById('home').href = "#!";
}

if (window.location.pathname === '/catalog.html') {
  document.getElementById('catalog').href = "#!";
  document.getElementById('catalog-bread-crumbs').href = "#!";
  document.getElementById('pagination-active').href = "#!";
  document.getElementById('pagination-active-arrow').href = "#!";
}

if (window.location.pathname === '/product.html') {

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    closeButton: "top",
    Carousel: {
      Dots: true,
    },
  });
};









