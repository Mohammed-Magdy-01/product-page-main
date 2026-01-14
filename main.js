let cartdiv = document.querySelector(".header .right div:first-child");
let cart = document.querySelector(".header .right .cart");

cartdiv.addEventListener("click", () => {
  cartdiv.classList.toggle("active");
  if (cartdiv.classList.contains("active")) {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
});

let imgs = document.querySelectorAll(".body .left .others div");
let mainImg = document.querySelector(".body .left .main-img img");
RAactive(imgs);
changeImg(mainImg, imgs);

// show Big img
let mainImg2 = document.querySelector(".second-main-img img:nth-child(2)");
let minImg2 = document.querySelectorAll(".min-img div");
RAactive(minImg2);
changeImg(mainImg2, minImg2);

// close img
let closeBtn = document.querySelector(".big-img .close");
mainImg.addEventListener("click", () => {
  if (
    parseFloat(getComputedStyle(document.querySelector(".container")).width) <=
    800
  ) {
    return;
  }
  document.querySelector(".big-img .second-main-img img:nth-child(2)").src =
    mainImg.src;
  // create overlay
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  // Show main div
  document.querySelector(".big-img").style.display = "block";

  if (document.querySelector(".big-img").style.display === "block") {
    minImg2.forEach((img) => {
      img.classList.remove("active");
    });
    let activeImg = document.querySelector(".others div.active").dataset.img;
    document
      .querySelector(`.min-img div[data-img="${activeImg}"]`)
      .classList.add("active");
  }

  closeBtn.addEventListener("click", () => {
    overlay.remove();
    document.querySelector(".big-img").style.display = "none";
  });
});
// change active in mine img
minImg2.forEach((ele) => {});
// Next and previous
let next = document.querySelector(".big-img .next");
let previous = document.querySelector(".big-img .previous");

// next => nextElementSibling
next.addEventListener("click", () => {
  let current = document.querySelector(".min-img .active");
  let nextele = current.nextElementSibling;
  if (!nextele) return;
  current.classList.remove("active");
  nextele.classList.add("active");
  mainImg2.src = nextele.dataset.img;
});

// previous => previousElementSibling
previous.addEventListener("click", () => {
  let current = document.querySelector(".min-img .active");
  let prevImg = current.previousElementSibling;
  if (!prevImg) return;
  current.classList.remove("active");
  prevImg.classList.add("active");
  mainImg2.src = prevImg.dataset.img;
});

// increase
let minus = document.querySelector(".opration:first-child");
let plus = document.querySelector(".opration:last-child");
let zero = document.querySelector(".body .right .bottom .count p");
let value = 1;
plus.addEventListener("click", (e) => {
  if (value < 30) {
    value++;
    zero.textContent = value;
  }
});

minus.addEventListener("click", (e) => {
  if (value > 1) {
    value--;
    zero.textContent = value;
  }
});

// Add Product to cart
let addBtn = document.querySelector(".body .right .bottom .add");
let countbag = document.querySelector(".header .right .count");
let countnum = 0;

addBtn.addEventListener("click", (e) => {
  if (document.querySelector(".header .right .cart .empty ")) {
    document.querySelector(".header .right .cart .empty ").remove();
  }
  // creat elemnts
  // cart order
  let order = document.createElement("div");
  order.classList.add("order");
  // cart first img
  let cartFImg = document.createElement("img");
  // change img
  cartFImg.src = document.querySelector(
    ".body .left .others div.active"
  ).dataset.img;
  order.appendChild(cartFImg);
  // cart info div
  let info = document.createElement("div");
  info.classList.add("info");
  // cart ele in info div
  // First Par
  let fP = document.createElement("p");
  fP.innerHTML = "Fall Limited Edition Sneakers";
  info.appendChild(fP);
  // Second Par
  let sP = document.createElement("p");
  sP.innerHTML = `$125.00 x`;
  // span 1
  let span1 = document.createElement("span");
  span1.innerHTML = value;
  sP.appendChild(span1);
  // edit sp
  sP.innerHTML += " = ";
  // span 2
  let span2 = document.createElement("span");
  span2.innerHTML = `$${value * 125}.00`;
  sP.appendChild(span2);
  info.appendChild(sP);
  order.appendChild(info);
  // cart last img
  let cartLImg = document.createElement("img");
  cartLImg.src = "images/icon-delete.svg";
  order.appendChild(cartLImg);
  document.querySelector(".header .right .cart .box").appendChild(order);

  // checkout
  if (!document.querySelector(".header .right .cart .btn").hasChildNodes()) {
    let btn = document.createElement("button");
    btn.innerHTML = "chechout";
    document.querySelector(".header .right .cart .btn").appendChild(btn);
  }

  // delete item
  cartLImg.addEventListener("click", () => {
    order.remove();
    countnum--;
    countbag.innerHTML = countnum;

    if (!document.querySelector(".header .right .cart .box").hasChildNodes()) {
      // Creat Empty section
      let empty = document.createElement("div");
      empty.classList.add("empty");
      let emptyP = document.createElement("p");
      emptyP.innerHTML = "Your cart is empty.";
      empty.appendChild(emptyP);
      cart.appendChild(empty);
      document.querySelector(".header .right .cart button").remove();
    }
  });

  countnum++;
  countbag.innerHTML = countnum;
  value = 1;
  zero.textContent = value;
});

// checkout And delet items
document
  .querySelector(".header .right .cart .btn")
  .addEventListener("click", (e) => {
    document.querySelectorAll(".header .right .cart .order").forEach((ele) => {
      ele.remove();
      countbag.innerHTML = 0;
    });
    document.querySelector(".header .right .cart .btn button").remove();

    // creat Empty Div
    if (!document.querySelector(".header .right .cart .box").hasChildNodes()) {
      // Creat Empty section
      let empty = document.createElement("div");
      empty.classList.add("empty");
      let emptyP = document.createElement("p");
      emptyP.innerHTML = "Your cart is empty.";
      empty.appendChild(emptyP);
      cart.appendChild(empty);
    }

    console.log("Mission Done!");
  });

// menu
let menuImg = document.querySelector(".header .left > img");
let menu = document.querySelector(".header .left .menu");
let menuClose = document.querySelector(".header .left .menu > img");
// open
menuImg.addEventListener("click", () => {
  menu.style.left = "0";
  // create overlay
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
});

menuClose.addEventListener("click", () => {
  menu.style.left = "-240px";
  document.querySelector(".overlay").remove();
});

let arrowR = document.querySelector(".body .left .main-img .next ");
let arrowL = document.querySelector(".body .left .main-img .previous ");
let currentImg = 1;

let imgArray = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

arrowR.addEventListener("click", (e) => {
  mainImg.src = imgArray[currentImg];

  if (currentImg >= 3) {
    currentImg = -1;
  }
  currentImg++;
});

arrowL.addEventListener("click", (e) => {
  mainImg.src = imgArray[currentImg];
  if (currentImg <= 0) {
    currentImg = 4;
  }
  currentImg--;
});

// Functions
// Remove and Add Active
function RAactive(ele) {
  ele.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.parentElement.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
}

// change big Img
function changeImg(main, imgs) {
  imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        main.src = img.dataset.img;
      }
    });
  });
}
