import { navbarWrap } from './variables';
import brandLogo from '../assets/pierre-enrico-logo.png';

// isolated header class for navbar style change
const propDetailsNav = document.querySelector('.prop-details-nav');
console.log(propDetailsNav);

if (propDetailsNav) {
	propDetailsNav.style.background = 'rgba(0, 0, 0, 0.568)';
	propDetailsNav.style.backdropFilter = 'blur(20px';
}

const navbar = `
	<nav class="container" id="nav-container">
		<div class="brand-wrap">
			<a href="/">
				<img src="${brandLogo}" alt="logo" class="brand-logo" />
			</a>
		</div>

		<ul class="nav-link link-wrap poppins-regular">
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
			<li class="link">
				<a href="/#contact-form">Contact</a>
			</li>
		</ul>

		<div class="hamburger-wrap">
			<i class="fa-solid fa-bars"></i>
		</div>
	</nav>
`;

export const showNavBar = () => {
	if (navbarWrap) {
		navbarWrap.innerHTML = navbar;
		const navLink = document.querySelector('.nav-link');

		const navContainer = document.getElementById('nav-container');
		const brandLogoElem = document.querySelector('.brand-logo');

		const modifyLogoSize = () => {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= 200) {
					brandLogoElem.classList.add('change-logo-size');
					navbarWrap.classList.add('blur-navbar');
				} else {
					navbarWrap.classList.remove('blur-navbar');
					brandLogoElem.classList.remove('change-logo-size');
				}
			});
		};

		modifyLogoSize();
	}
};
