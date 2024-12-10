const texts = document.querySelectorAll('.text-animation');
const parentSection = document.querySelectorAll('.intersecting-section');

export const runAnimation = () => {
	// Wait for DOM content to fully load
	window.addEventListener('DOMContentLoaded', () => {
		// const texts = document.querySelectorAll('.text-animation');

		if (texts) {
			texts.forEach((text, index) => {
				// Add animation class with a delay for staggered effect
				setTimeout(() => {
					text.classList.add('animate-slide-in');
				}, index * 200); // Adjust stagger delay as needed
			});
		}
	});
};

const options = {
	root: null,
	threshold: 1,
	rootMargin: '-100px',
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				console.log('Hello world', entry.target);
			}, 500);
		} else {
			console.log('section out of the viewport');
		}
	});
});

if (parentSection) {
	parentSection.forEach((element) => {
		observer.observe(element);
	});
} else console.log('Parent Element not in the DOM');
