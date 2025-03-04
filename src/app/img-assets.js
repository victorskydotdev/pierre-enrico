import logo from '../assets/pierre-enrico-logo.png';
import img1 from '../assets/pe-img1.jpg';
import img2 from '../assets/pe-img2.jpg';
import img3 from '../assets/rental-services.jpg';
import img4 from '../assets/real-estate-services.jpg';
import layerBlur from '../assets/layer-blur-1.png';
import layerBlur2 from '../assets/layer-blur-2.png';
import shield from '../assets/shield.png';
import shortletImg from '../assets/short-let.jpg';

import bg1 from '../assets/hero-bg/bg1.png';
import bg2 from '../assets/hero-bg/bg2.jpg';
import bg3 from '../assets/hero-bg/bg3.jpg';
import bg4 from '../assets/hero-bg/bg4.jpg';

export { logo }; // export the logo to be able to use it in the nav template

const credImgWrap = document.querySelector('.cred-img');
const heroImgWrap = document.querySelector('.hero-img-wrap');
const posHeroImgWrap = document.querySelector('.positioned-imgs');
const introSectionWrap = document.querySelector('.intro-img-section');

const rentalImgWrap = document.querySelector('.rental-img-wrap');
const reImgWrap = document.querySelector('.re-img-wrap');
const shortletImgWrap = document.querySelector('.shortlet-img-wrap');

if (posHeroImgWrap) {
	console.log('yes');
}

export function loadLandingPageImgs() {
	const credImgTemp = `
		<img src="${shield}" />
	`;
	const posHeroTemplate = `
		<img src="${layerBlur}" />
		<img src="${layerBlur2}" />
	`;
	const heroImgTemplate = `
		<img src="${img1}" />
	`;
	const introImgTemplate = `
		<img src="${img2}" />
	`;

	const rentalImgTemp = `
		<img src="${img3}" />
	`;
	const reImgTemp = `
		<img src="${img4}" />
	`;

	const shortletTemp = `
		<img src="${shortletImg}" />
	`;

	if (credImgWrap && posHeroImgWrap && introSectionWrap && heroImgWrap) {
		credImgWrap.innerHTML = credImgTemp;
		posHeroImgWrap.innerHTML += posHeroTemplate;
		heroImgWrap.innerHTML += heroImgTemplate;
		introSectionWrap.innerHTML += introImgTemplate;
	}

	if (rentalImgWrap && reImgWrap && shortletImgWrap) {
		rentalImgWrap.innerHTML += rentalImgTemp;
		reImgWrap.innerHTML += reImgTemp;
		shortletImgWrap.innerHTML += shortletTemp;
	}
}
