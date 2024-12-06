import logo from '../assets/pierre-enrico-logo.png';
import img1 from '../assets/pe-img1.jpg';
import img2 from '../assets/pe-img2.jpg';
import img3 from '../assets/rental-services.jpg';
import img4 from '../assets/real-estate-services.jpg';
import layerBlur from '../assets/layer-blur-1.png';
import layerBlur2 from '../assets/layer-blur-2.png';

export { logo }; // export the logo to be able to use it in the nav template

const heroImgWrap = document.querySelector('.hero-img-wrap');
const posHeroImgWrap = document.querySelector('.positioned-imgs');
const introSectionWrap = document.querySelector('.intro-img-section');

const rentalImgWrap = document.querySelector('.rental-img-wrap');
const reImgWrap = document.querySelector('.re-img-wrap');

export function loadLandingPageImgs() {
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

	if (posHeroImgWrap && introSectionWrap && heroImgWrap) {
		posHeroImgWrap.innerHTML += posHeroTemplate;
		heroImgWrap.innerHTML += heroImgTemplate;
		introSectionWrap.innerHTML += introImgTemplate;
	}

	if (rentalImgWrap && reImgWrap) {
		rentalImgWrap.innerHTML += rentalImgTemp;
		reImgWrap.innerHTML += reImgTemp;
	}
}
