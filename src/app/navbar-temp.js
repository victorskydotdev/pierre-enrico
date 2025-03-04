import { navbarWrap } from './variables';
import brandLogo from '../assets/pierre-enrico-logo.png';

const navbar = `
	<nav class="container" id="nav-container">
		<div class="brand-wrap">
			<a href="/">
				<img src="${brandLogo}" alt="logo" class="brand-logo" />
			</a>
		</div>

		<ul class="link-wrap poppins-regular">
			<li class="link">
				<a href="/" >Home</a>
			</li>
			<!-- <li class="link">
				<a href="#">About</a>
			</li> -->
			<li class="link">
				<a href="/listings.html">Listings</a>
			</li>
			<li class="link">
				<a href="/#services">Our Services</a>
			</li>
			<!-- <li class="link">
				<a href="#">Contact</a>
			</li> -->
		</ul>
	</nav>
`;

export const showNavBar = () => {
	if (navbarWrap) {
		navbarWrap.innerHTML = navbar;

		const navContainer = document.getElementById('nav-container');
		const brandLogoElem = document.querySelector('.brand-logo');

		const modifyLogoSize = () => {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= 200) {
					// navContainer.classList.add('resize-nav');
					// console.log(navContainer);
					brandLogoElem.classList.add('change-logo-size');
				} else brandLogoElem.classList.remove('change-logo-size');
			});
		};

		modifyLogoSize();
	}
};
