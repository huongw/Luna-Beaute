// Force Page to Top When Refreshed

$(window).on("beforeunload", function () {
	$(window).scrollTop(0);
});

// Preloader

setTimeout(function () {
	$(".preloader-bg").fadeToggle();
}, 1300);

// Header Scroll

const header = document.querySelector("header");
window.addEventListener("scroll", headerScroll);

function headerScroll() {
	if (window.scrollY > header.offsetHeight) {
		header.classList.add("header-scroll");
	} else {
		header.style.transition = "all 0.3s ease-in-out";
		header.classList.remove("header-scroll");
	}
}

// Hamburger Menu

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".hamburger");
const burgerLine1 = document.querySelector(".hamburger .line1");
const burgerLine2 = document.querySelector(".hamburger .line2");
const navLinks = document.querySelectorAll(".nav-links li");

function openMenu() {
	nav.style.transition = "all 0.8s ease";
	nav.classList.toggle("nav-active");

	burgerLine1.style.transition = "all 0.3s ease";
	burgerLine2.style.transition = "all 0.3s ease";
	burger.classList.toggle("toggle");

	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 1s linear forwards ${
				index / 6 + 0.6
			}s`;
		}
	});
}

burger.addEventListener("click", openMenu);

// Service Menu Buttons

$(".clickable").click(function (event) {
	id = $(this).attr("id");
	$(".clickable").removeClass("button-color");
	$(this).addClass("button-color");
	$(".service-menu").removeClass("menu-active");
	$(".service-menu[data-name = " + id + "]").addClass("menu-active");
});

// Animations

gsap.registerPlugin(ScrollTrigger);

// Hero Title Animation

gsap.from("#hero-title", {
	duration: 3.2,
	x: "-150",
	ease: "ease",
});

gsap.from(".hero img", {
	duration: 3.2,
	scale: "1.5",
	ease: "ease",
});

// Parallax Animation

gsap.from(".bg-parallax img", {
	scrollTrigger: {
		trigger: ".bg-parallax",
		start: "top center",
		toggleActions: "restart restart restart restart",
	},
	ease: Power1.ease,
	scale: 2,
	duration: 2,
});

gsap.from(".bg-parallax2 img", {
	scrollTrigger: {
		trigger: ".bg-parallax2",
		toggleActions: "restart restart restart restart",
	},
	ease: Power1.ease,
	scale: 2,
	duration: 2,
});

// Gallery Page

gsap.from(".gallery-bg h2", {
	duration: 2,
	scale: "0.5",
	ease: "ease",
});

gsap.from(".gallery-bg img", {
	duration: 2,
	scale: "1.5",
	ease: "ease",
});

// Service Page

gsap.from(".service-bg h2", {
	duration: 1.5,
	scale: "0.5",
	ease: "ease",
});

gsap.from(".service-bg img", {
	duration: 1.6,
	scale: "1.5",
	ease: "ease",
});
