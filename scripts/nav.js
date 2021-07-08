// William Chan 2020
// changes nav bar theme if scrolled past 100px

let navBar = document.getElementById("nav");
let navText = document.getElementsByClassName("navText");
let scrollBar = document.getElementsByClassName("scrollContainer")[0];

scrollBar.onscroll = function(event){
    // If the scrollbar has been scrolled change the 
    //  navbar to transparent and make text black
    scrollBar.scrollTop >= 100 ? navBar.style.backgroundColor = "#00000000" :
                                 navBar.style.backgroundColor = "#2faeac";

}  
