//colecting variabels
//get slider items | array.from "search"
var sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));

//get num of items in the array(slides)
var slidesCount = sliderImgs.length;

//set current slide
var currentSlide = 1;

//slide num string element
var slideNumEle = document.getElementById("slide-number");

//prev and next btns
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

//handle clicks on prev and next btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

//create main ul element
var paginationElement = document.createElement("ul");

//set id for ul element
paginationElement.setAttribute("id", "pagination-ul");

//loop for li based on slide count
for (var i = 1; i <= slidesCount; i++) {
  //create li
  var paginationItems = document.createElement("li");
  //set custom atr
  paginationItems.setAttribute("date-index", i);
  //set item content
  paginationItems.appendChild(document.createTextNode(i));
  //append items to the main ul list
  paginationElement.appendChild(paginationItems);
}
//add the created ul to the page
document.getElementById("indicators").appendChild(paginationElement);

//next slide function
function nextSlide() {
  console.log("next");
}
//prev slide function
function prevSlide() {
  console.log("prev");
}
