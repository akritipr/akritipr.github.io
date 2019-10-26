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
    const id = val.srcElement.id || val.target.parentElement.id;
    document.querySelector(`#${id}`).classList.add("tab-active")
    document.querySelector(`#${id}-content`).classList.add("show");
};

tabElems.forEach(elem => elem.addEventListener('click', tabSelected));
document.querySelector(`#profile-content`).classList.add("show");

// Handle on first scroll event to enable profile tab
const header = document.getElementById("cover");

header.addEventListener('scroll', val => {
    var elmnt = document.getElementById("profile-content");
    console.log("scroll");
    elmnt.scrollIntoView();
});
