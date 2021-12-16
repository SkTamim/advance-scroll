gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	toggleActions: "restart reverse restart reverse",
	scroller: "body",
});

// section-1
gsap.to(".create", {
	y: "0%",
	duration: 0.5,
	scrollTrigger: {
		trigger: ".headings-1",
		toggleActions: "restart reverse restart reverse",
	},
});

gsap.to(".create-img", {
	y: "0%",
	duration: 0.5,
	ease: "back.out(1.7)",
	scrollTrigger: {
		trigger: ".headings-1",
		toggleActions: "restart reverse restart reverse",
	},
});

// section-2
gsap.to(".create-2", {
	y: "0%",
	duration: 0.5,
	scrollTrigger: {
		trigger: ".headings-2",
		toggleActions: "restart reverse restart reverse",
	},
});

gsap.to(".create-img-2", {
	y: "0%",
	duration: 0.5,
	ease: "slow(0.7, 0.7, false)",
	scrollTrigger: {
		trigger: ".headings-2",
		toggleActions: "restart reverse restart reverse",
	},
});

// section-3
gsap.to(".create-3", {
	y: "0%",
	duration: 0.5,
	scrollTrigger: {
		trigger: ".headings-3",
		toggleActions: "restart reverse restart reverse",
	},
});

gsap.to(".create-img-3", {
	y: "0%",
	duration: 0.5,
	ease: "slow(0.7, 0.7, false)",
	scrollTrigger: {
		trigger: ".headings-3",
		toggleActions: "restart reverse restart reverse",
	},
});
