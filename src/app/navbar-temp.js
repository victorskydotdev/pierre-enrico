import { navbarWrap } from './variables';

const navbar = `
	<nav class="container">
		<div class="brand-wrap">
			<h3 class="logo-text">
				Pierre 
				Enrico
			</h3>
		</div>

		<ul class="link-wrap poppins-regular">
			<li class="link">
				<a href="/" >Home</a>
			</li>
			<li class="link">
				<a href="#">About</a>
			</li>
			<li class="link">
				<a href="/listings.html">Listings</a>
			</li>
			<li class="link">
				<a href="/#services">Our Services</a>
			</li>
			<li class="link">
				<a href="#">Contact</a>
			</li>
		</ul>
	</nav>
`;

export const showNavBar = () => {
	if (navbarWrap) {
		navbarWrap.innerHTML = navbar;

		const staticPosition = 200;

		window.addEventListener('scroll', () => {
			if (window.scrollY >= staticPosition) {
				navbarWrap.classList.add('background');

				if (window.scrollY >= 600) {
					navbarWrap.classList.add('bg2');
				}
			} else {
				navbarWrap.classList.remove('background');

				if (window.scrollY <= staticPosition) {
					navbarWrap.classList.remove('bg2');
				}
			}
		});
	}
};
