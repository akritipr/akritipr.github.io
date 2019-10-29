const tabElems = document.querySelectorAll("div.tab-elem");
const tabContents = document.querySelectorAll(".tab-content-elem");
const tabSelected = (val) => {
    tabContents.forEach(val => {
        const id = val.id;
        document.querySelector(`#${id}`).classList.remove("show");
    });
    tabElems.forEach(val => {
        const id = val.id;
        document.querySelector(`#${id}`).classList.remove("tab-active");
    });
    const tabSelectedId = val.srcElement.id || val.target.parentElement.id;
    document.querySelector(`#${tabSelectedId}`).classList.add("tab-active")
    document.querySelector(`#${tabSelectedId}-content`).classList.add("show");
    if(tabSelectedId === "skills"){
        addAnimationToSkills();
    }
};


const addAnimationToSkills = () => {
    const skillBars = document.querySelectorAll(".skill-flex");
    skillBars.forEach((bars) => {
         const barChildOne = bars.children[0];
         const barChilTwo = bars.children[1].innerHTML;
         barChildOne.style.width = barChilTwo;
         barChildOne.style.transition = " width 5s ease";
    });

};

tabElems.forEach(elem => elem.addEventListener('click', tabSelected));
const profileContent = document.querySelector(`#profile-content`);
profileContent.classList.add("show");

$(document).ready(function () {
    $("html,body").animate({scrollTop: 0}, 1000);
});
