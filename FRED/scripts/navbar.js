const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
})

const homePage = document.getElementById("navbar-item-1");
const coursesPage = document.getElementById("navbar-item-2");
const volunteerPage = document.getElementById("navbar-item-3");
const shopPage = document.getElementById("navbar-item-4");
const aboutPage = document.getElementById("navbar-item-5");
const profilePage = document.getElementById("navbar-item-6");
const teamPage = document.getElementById("navbar-item-7");
const galleryPage = document.getElementById("navbar-item-8");
const feedbackPage = document.getElementById("navbar-item-9");
const pageEditorPage = document.getElementById("navbar-item-10");

homePage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./index.html";
    }, 1000);
});

coursesPage.addEventListener("change", () =>{
    let intervalTime = setInterval(() => {
        window.location.href = "./courses.html";
    }, 1000);
});

volunteerPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./volunteer.html";
    }, 1000);
});

shopPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./shop.html";
    }, 1000);
});

aboutPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./about.html";
    }, 1000);
});

profilePage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./user-profile.html";
    }, 1000);
});

teamPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./team.html";
    }, 1000);
});

galleryPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./gallery.html";
    }, 1000);
});

feedbackPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./feedback.html";
    }, 1000);
});

pageEditorPage.addEventListener("change", () => {
    let intervalTime = setInterval(() => {
        window.location.href = "./page-editor.html";
    }, 1000);
});