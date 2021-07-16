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

function heroAnim() {
	const timeline = gsap.timeline();

	timeline
		.from(
			".hero img",
			{
				scale: 1.5,
				duration: 1,
				delay: 0.5,
				ease: "ease",
			},
			1
		)
		.from("#hero-title", {
			xPercent: 20,
			opacity: 0,
			duration: 1,
		})
		.from("#cta", {
			opacity: 0,
			duration: 0.1,
		});
}

heroAnim();

// Intro

function introSectionAnim() {
	gsap.from(".intro-section .img-container .large-img", {
		scrollTrigger: {
			trigger: ".intro-section",
			start: "top center",
			end: "bottom center",
			toggleActions: "play none none reverse",
		},
		ease: "ease",
		x: -300,
		opacity: 0,
		duration: 1,
	});

	gsap.from(".small-img", {
		scrollTrigger: {
			trigger: ".intro-section",
			start: "top center",
			end: "bottom center",
			toggleActions: "play none none reverse",
		},
		ease: "ease",
		y: 300,
		opacity: 0,
		duration: 1.5,
	});

	ScrollTrigger.saveStyles(".intro-txt");

	ScrollTrigger.matchMedia({
		"(min-width: 1920px)": function () {
			gsap.from(".intro-txt", {
				scrollTrigger: {
					trigger: ".intro-section",
					start: "top center",
					end: "bottom bottom",
					toggleActions: "play none none reverse",
				},
				x: 100,
				opacity: 0,
				duration: 1.5,
				ease: "ease",
			});
		},
		"(max-width: 1919px)": function () {
			gsap.from(".intro-txt", {
				scrollTrigger: {
					trigger: ".intro-txt",
					start: "top center+=400",
					end: "bottom center",
					toggleActions: "play none none reverse",
				},
				y: 100,
				opacity: 0,
				duration: 1.5,
				ease: "ease",
			});
		},
	});
}

introSectionAnim();

// Parallax Animation

function parallaxAnim() {
	gsap.from(".bg-parallax img", {
		scrollTrigger: {
			trigger: ".bg-parallax",
			start: "top center",
			end: "bottom center",
			toggleActions: "restart none restart none",
		},
		ease: Power1.ease,
		scale: 2,
		duration: 2,
	});

	gsap.from(".bg-parallax2 img", {
		scrollTrigger: {
			trigger: ".bg-parallax2",
			start: "top center",
			end: "bottom center",
			toggleActions: "restart none restart none",
		},
		ease: Power1.ease,
		scale: 2,
		duration: 2,
	});
}

parallaxAnim();

//menu section

function menuSectionAnim() {
	const menuTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".menu-section",
			start: "top center",
			ease: "ease",
			toggleActions: "play none none reverse",
		},
	});
	menuTl
		.from(".menu-section .img-container .menu-stag", {
			opacity: 0,
			duration: 1,
			stagger: 0.5,
			ease: "ease",
		})
		.from(".menu-section .span-titles", {
			y: 300,
			opacity: 0,
			ease: "ease",
		})
		.from(
			".menu-section .span-titles span",
			{
				y: 100,
				opacity: 0,
				stagger: 0.2,
				ease: "ease",
			},
			"label"
		);
}

menuSectionAnim();

// Gallery Page

function galleryAnim() {
	gsap.from(".gallery-bg h2", {
		duration: 1,
		scale: "0.5",
		delay: 0.5,
		ease: "ease",
	});

	gsap.from(".gallery-bg img", {
		duration: 1,
		delay: 0.5,
		scale: "1.5",
		ease: "ease",
	});
}

galleryAnim();

// Service Page

function serviceAnim() {
	gsap.from(".service-bg h2", {
		duration: 1,
		scale: "0.5",
		delay: 0.5,
		ease: "ease",
	});

	gsap.from(".service-bg img", {
		duration: 1,
		delay: 0.5,
		scale: "1.5",
		ease: "ease",
	});
}

serviceAnim();

// Contact Page

function contactAnim() {
	const contactTl = gsap.timeline({ delay: 0.1 });

	contactTl
		.set(".img-container .redgirl", {
			zIndex: 2,
		})
		.from(
			".img-container #sunflowers",
			{
				yPercent: 50,
				opacity: 0,
				duration: 1.2,
			},
			"contact"
		)
		.from(
			".img-container .redgirl",
			{
				xPercent: 50,
				opacity: 0,
				duration: 1.2,
			},
			"contact"
		)
		.from(".contact-container img", {
			xPercent: 50,
			opacity: 0,
			duration: 1.2,
		})
		.from(
			".contact-container h2",
			{
				xPercent: 50,
				opacity: 0,
				duration: 1.2,
			},
			"contact"
		)
		.from(
			".contact-container p",
			{
				opacity: 0,
				duration: 1,
			},
			0.9
		);

	gsap.from(".stag", {
		scrollTrigger: {
			trigger: ".contact-info",
			start: "top center+=300",
			end: "bottom center",
			toggleActions: "play none none none",
		},
		ease: "ease",
		y: 100,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
	});
}

contactAnim();

// About
function aboutAnim() {
	const aboutTl = gsap.timeline();

	aboutTl
		.set(".about .img-container img", {
			zIndex: -1,
		})
		.from(".about .img-container img", {
			y: 300,
			duration: 1,
			opacity: 0,
		})
		.from(
			"#frame",
			{
				duration: 1,
				opacity: 0,
			},
			0.2
		)
		.from(
			".about-container h2",
			{
				opacity: 0,
				x: 300,
				duration: 1.2,
			},
			0.2
		)
		.from(".about-container p", {
			opacity: 0,
			duration: 1,
		});
}

aboutAnim();
