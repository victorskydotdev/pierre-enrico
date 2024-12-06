const texts = document.querySelectorAll('.text-animation');

export const runAnimation = () => {
	// Wait for DOM content to fully load
	window.addEventListener('DOMContentLoaded', () => {
		// const texts = document.querySelectorAll('.text-animation');

		if (texts) {
			texts.forEach((text, index) => {
				// Add animation class with a delay for staggered effect
				setTimeout(() => {
					text.classList.add('animate-slide-in');
				}, index * 400); // Adjust stagger delay as needed
			});
		}
	});
};
