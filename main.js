let acc = document.getElementsByClassName("accordion");

var i;
let eachBox = document.getElementById("each-box");



for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function(event) {
        
    var panel =event.target.parentNode.nextSibling.nextSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      event.target.style.fontWeight = "400";
      event.target.nextElementSibling.style.transform = "rotate(0deg)";
    } else {
        panel.style.display = "block"; 
        event.target.style.fontWeight = "700";
        event.target.nextElementSibling.style.transform = "rotate(180deg)";
    }
    
});
}

// rotateX(event.target.nextElementSibling);
// function rotateX(element) {
   
    
//     element.style.transform = "rotate(180deg)";
//     let rotateAttr =element.getAttribute("transform")
//     if (rotateAttr === null || rotateAttr === "rotate(0)"){
//         element.setAttribute("transform", "rotate(180)");
//     }else{
    
    
//     element.setAttribute("transform", "rotate(0)");
    

//     }
// }
