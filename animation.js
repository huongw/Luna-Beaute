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
