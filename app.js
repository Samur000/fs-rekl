// Год в подвале
document.getElementById('y').textContent = new Date().getFullYear();

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
	entries.forEach(e => {
		if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
	});
}, { threshold: .16 });
revealEls.forEach(el => io.observe(el));

// Modal
const modal = document.getElementById('modal');
const mb = document.getElementById('modal-body');
const mt = document.getElementById('modal-title');
function openModal(message, title = 'Сообщение') { mt.textContent = title; mb.textContent = message; modal.style.display = 'flex'; }
function closeModal() { modal.style.display = 'none'; }

// Пример: якоря плавно
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', (e) => {
		const id = a.getAttribute('href').slice(1);
		if (!id) return;
		const el = document.getElementById(id);
		if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
	});
});

// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

burger.addEventListener('click', () => {
	burger.classList.toggle('open');
	navLinks.classList.toggle('mobile-active');
	body.classList.toggle('no-scroll');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('open');
		navLinks.classList.remove('mobile-active');
		body.classList.remove('no-scroll');
	});
});

// App mockup tab switching
const appTabs = document.querySelectorAll('.app-bottom-nav svg');
const appPages = document.querySelectorAll('.app-page');
let currentTabIndex = 0;
const tabIds = ['home', 'categories', 'cart', 'profile'];

function switchTab(index) {
	const target = tabIds[index];
	
	appPages.forEach(page => {
		page.classList.remove('active');
	});
	document.getElementById(target).classList.add('active');
	
	appTabs.forEach(t => {
		t.classList.remove('active');
	});
	appTabs[index].classList.add('active');
}

appTabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		currentTabIndex = index;
		switchTab(currentTabIndex);
		// Reset auto-switch timer on manual click
		clearInterval(autoSwitch);
		autoSwitch = setInterval(autoSwitchTabs, 3000);
	});
});

// Automatic switching
let autoSwitch = setInterval(autoSwitchTabs, 3000);

function autoSwitchTabs() {
	currentTabIndex = (currentTabIndex + 1) % tabIds.length;
	switchTab(currentTabIndex);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
	item.addEventListener('toggle', (e) => {
		if (e.target.open) {
			faqItems.forEach(el => {
				if (el !== e.target) {
					el.removeAttribute('open');
				}
			});
		}
	});
});

// Initialize GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from(".hero-content > *", {
	duration: 1.2,
	opacity: 0,
	y: 50,
	stagger: 0.3,
	ease: "back.out(1.7)",
	delay: 0.5
});

gsap.from(".app-mockup", {
	duration: 1.5,
	opacity: 0,
	scale: 0.8,
	rotation: -10,
	ease: "elastic.out(1, 0.5)",
	delay: 0.8
});

// Job section
gsap.from(".job h1", {
	scrollTrigger: ".job",
	duration: 1,
	opacity: 0,
	x: -100,
	ease: "power3.out"
});

gsap.from(".pillbar .badge", {
	scrollTrigger: ".job",
	duration: 0.8,
	opacity: 0,
	scale: 0.5,
	stagger: 0.2,
	ease: "back.out(1.7)"
});

gsap.from(".job-stats .stat", {
	scrollTrigger: ".job-stats",
	duration: 1,
	opacity: 0,
	y: 30,
	stagger: 0.2,
	ease: "bounce.out"
});

// Problem section
gsap.from("#problem .item", {
	scrollTrigger: "#problem",
	duration: 0.8,
	opacity: 0,
	y: 40,
	stagger: 0.15,
	ease: "power2.out"
});

// Solution section
gsap.from("#solution .card", {
	scrollTrigger: "#solution",
	duration: 1,
	opacity: 0,
	scale: 0.9,
	rotationY: 15,
	stagger: 0.2,
	ease: "elastic.out(1, 0.75)"
});

// How it works
gsap.from(".steps .card", {
	scrollTrigger: ".steps",
	duration: 1,
	opacity: 0,
	x: (index) => (index % 2 === 0 ? -50 : 50),
	stagger: 0.2,
	ease: "power3.out"
});

// For whom section
gsap.from("section > .container > .card", {
	scrollTrigger: {
		trigger: "section > .container.grid",
		start: "top 80%"
	},
	duration: 1.2,
	opacity: 0,
	y: 60,
	stagger: 0.3,
	ease: "back.out(1.7)"
});

// Quality section
gsap.from(".grid .card ul li", {
	scrollTrigger: ".grid .card",
	duration: 0.6,
	opacity: 0,
	x: -30,
	stagger: 0.1,
	ease: "power2.out"
});

gsap.from(".grid .card:nth-child(2)", {
	scrollTrigger: ".grid .card:nth-child(2)",
	duration: 1.5,
	opacity: 0,
	scale: 1.5,
	ease: "elastic.out(1, 0.5)"
});

// Pricing
gsap.from(".pricing .price", {
	scrollTrigger: ".pricing",
	duration: 1,
	opacity: 0,
	y: 50,
	stagger: 0.2,
	ease: "bounce.out"
});

// FAQ
gsap.from(".faq-item", {
	scrollTrigger: ".faq-grid",
	duration: 0.8,
	opacity: 0,
	y: 30,
	stagger: 0.15,
	ease: "power3.out"
});

// CTA
gsap.from(".cta .card", {
	scrollTrigger: ".cta",
	duration: 1,
	opacity: 0,
	x: (index) => (index === 0 ? -100 : 100),
	stagger: 0.3,
	ease: "power4.out"
});

// Footer
gsap.from("footer > *", {
	scrollTrigger: "footer",
	duration: 1,
	opacity: 0,
	y: 20,
	stagger: 0.2,
	ease: "power2.out"
});