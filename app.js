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

burger.addEventListener('click', () => {
	burger.classList.toggle('open');
	navLinks.classList.toggle('mobile-active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('open');
		navLinks.classList.remove('mobile-active');
	});
});