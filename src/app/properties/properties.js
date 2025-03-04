import propImg1 from '../../assets/pe-prop1/img1.jpeg';
import propImg2 from '../../assets/pe-prop1/img2.jpeg';
import propImg3 from '../../assets/pe-prop1/img3.jpeg';
import propImg4 from '../../assets/pe-prop1/img4.jpeg';

const images = [
	{
		id: 1,
		src: {
			img1: `${propImg1}`,
			img2: `${propImg2}`,
			img3: `${propImg3}`,
			img4: `${propImg4}`,
		},
		title: 'Bright and modern work studio',
		location: 'France',
		price: '156,000',
	},

	{
		id: 2,
		src: {
			img1: `${propImg1}`,
			img2: `${propImg2}`,
			img3: `${propImg3}`,
			img4: `${propImg4}`,
		},
		title: 'New property in france',
		location: 'France',
		price: '459000',
	},

	{
		id: 3,
		src: {
			img1: `${propImg1}`,
			img2: `${propImg2}`,
			img3: `${propImg3}`,
			img4: `${propImg4}`,
		},
		title: 'New property in france',
		location: 'France',
		price: '450000',
	},
];

const createPropertyTemplate = ({ id, src, title, location, price }) => {
	return `
    <div class="property-card" data-num-id="${id}">
      <div class="img-wrap">
        <div class="img-wrap">
        ${Object.values(src)
					.map(
						(imgSrc, index) => `
          <img src="${imgSrc}" alt="${title}" class="property-image ${
							index === 0 ? 'active' : ''
						}" />
        `
					)
					.join('')}
      </div>
      </div>

      <div class="data-btns">
        ${Object.keys(src)
					.map(
						(_, index) => `
          <button class="data-btn1 ${
						index === 0 ? 'active' : ''
					}" data-index="${index}"></button>
        `
					)
					.join('')}
      </div>

      <div class="details">
        <h5 class="propery-name">${title}</h5>
        <p class="location">${location}</p>
      </div>
    </div>
  `;
};

export const renderPropertyTemplate = () => {
	const featuredPropCard = document.querySelectorAll('.featured-prop-card');

	if (featuredPropCard.length < images.length) {
		console.error(
			'Not enough .featured-prop-card elements to render all images.'
		);

		return;
	}

	images.forEach((property, index) => {
		const propertyTemplate = createPropertyTemplate(property);

		featuredPropCard[index].innerHTML = propertyTemplate;
	});

	// Add event listeners AFTER rendering
	const propertyCards = document.querySelectorAll('.property-card');
	propertyCards.forEach((card) => {
		const propertyImages = card.querySelectorAll('.property-image');
		const dataButtons = card.querySelectorAll('.data-btn1');
		let currentImageIndex = 0;

		dataButtons.forEach((button, index) => {
			button.addEventListener('click', () => {
				// Remove active class from previous image and button
				propertyImages[currentImageIndex].classList.remove('active');
				dataButtons[currentImageIndex].classList.remove('active');

				// Update current index
				currentImageIndex = index;

				// Add active class to new image and button
				propertyImages[currentImageIndex].classList.add('active');
				dataButtons[currentImageIndex].classList.add('active');
			});
		});
	});
};
