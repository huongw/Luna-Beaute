// Force Page to Top When Refreshed

$(window).on("beforeunload", function () {
	$(window).scrollTop(0);
});

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
