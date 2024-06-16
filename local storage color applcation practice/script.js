let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");


if(window.localStorage.getItem("color")) { //if theres color in local storage
    //1- add color to dive 
    exp.style.backgroundColor = window.localStorage.getItem("color");
    //2- replace active class
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    //3-add active class to current
    document.querySelector(`[data-color ="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        //remove active class from all lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        //add active class to current element
        e.currentTarget.classList.add("active");
        //add current color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        //change div color
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});