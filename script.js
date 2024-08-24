let lastScrollTop = 0;
const efect = document.querySelector(".efect");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        efect.classList.add("hidden");
    } else {
        efect.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const menu = document.querySelector("#iconomenu");
const navList = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
};
const sr = ScrollReveal({
    distance: "65px",
    duration: 2000,
    delay: 450,
    reset: true,
});
sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 200, origin: "top" });
sr.reveal(".iconos", { delay: 200, origin: "left" });
sr.reveal(".scroll", { delay: 200, origin: "right" });
