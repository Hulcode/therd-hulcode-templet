let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skill span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
// event time last of the year

let endOfYear= new Date("Dec 31, 2026 23:59:59").getTime();

let counter=setInterval(()=>
{
let dateNew=new Date().getTime();
let dateDifference= endOfYear - dateNew;
let day=Math.floor(dateDifference / 1000 / 60 / 60 / 24) ;
document.querySelector(".days span").innerHTML=day;

let hours=Math.floor((dateDifference %  ( 1000 * 60 * 60 * 24)) / 1000 / 60 / 60 );
document.querySelector(".hours span").innerHTML=hours;

let minutes=Math.floor((dateDifference %  ( 1000 * 60 * 60 )) / 1000 / 60  );
document.querySelector(".minutes span").innerHTML=minutes;

let seconds=Math.floor((dateDifference %  ( 1000 * 60  )) / 1000  );
document.querySelector(".seconds span").innerHTML=seconds;
if(dateDifference<=0)
{
  clearInterval(counter);
}
},1000)

