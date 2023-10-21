var slideshow = new Flickity(".main-carousel", {
  cellAlign: "left",
  contain: true,
});

var our_services = new Flickity(".services-crousel", {
  cellAlign: "left",
  contain: true,
  pageDots: false,
});

// var plywood = new Flickity(".plywood-brands-wrapper", {
//   cellAlign: "left",
//   contain: true,
//   watchCSS: true,
//   prevNextButtons: false,
//   wrapAround: true,
// });

// var laminates = new Flickity(".lamination-brands-wrapper", {
//   cellAlign: "center",
//   contain: true,
//   watchCSS: true,
//   wrapAround: true,
// });

let mybutton = document.getElementById("top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", topFunction);
