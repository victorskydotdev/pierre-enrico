import { propertyData } from '../property-imgs';

const listingHeadSec = document.querySelector('.listing-head-section');
const filterBtns = document.querySelectorAll('.cat-filter-btn');

// sticky header on scroll event
window.addEventListener('scroll', () => {
	if (listingHeadSec) {
		if (window.scrollY >= 300) {
			listingHeadSec.classList.add('background-color');
		} else {
			listingHeadSec.classList.remove('background-color');
		}
	}
});
// end of sticky header on scroll event

// function to filter the different property categories
// const filterProps = () => {
// 	const nameOfFilterId = ['all-prop', 'for-sale-prop', 'short-let-prop'];

// 	filterBtns.forEach((btn) => {
// 		const btnId = btn.getAttribute('filter-btn-id');

// 		if (nameOfFilterId.includes(btnId)) {
// 			if (btnId === 'all-prop') {
// 				btn.classList.add('active-btn');
// 			} else {
// 				btn.classList.remove('active-btn');
// 			}

// 			btn.addEventListener('click', () => {
// 				filterBtns.forEach((otherBtn) =>
// 					otherBtn.classList.remove('active-btn')
// 				);

// 				btn.classList.add('active-btn');

// 				const filteredProperties = propertyData.filter(
// 					(property) => property.type === btnId
// 				);
// 			});
// 		}
// 	});

// 	// On page load, render only properties with type 'all-prop'.
// 	const initialFilteredProperties = propertyData.filter(
// 		(property) => property.type === 'all-prop'
// 	);
// 	// renderProperties(initialFilteredProperties);
// };

// filterProps();

const createPropertyTemplate = ({
	id,
	title,
	shortDesc,
	image,
	price,
	bedrooms,
	bathrooms,
	address,
	type,
}) => {
	return `
    <div class="property-card" data-id="${id}">
      <div class="img-wrap">
        <img src="${image[0]}" alt="${title}" class="property-image" />
      </div>
      <div class="property-info">
        <h3 class="property-title">${title}</h3>
        <p class="property-desc">${shortDesc}</p>
        <!-- <p class="property-price">${price}</p>
      	<p class="property-details">Bedrooms: ${bedrooms}, Bathrooms: ${bathrooms}</p> 
        <p class="property-address">${address}</p> -->

				<button class="expand-btn">See Property Details</button>
      </div>
    </div>
  `;
};

export const renderPropertyListings = () => {
	const propertyWrap = document.querySelector('.property-wrap');

	if (propertyWrap) {
		// Clear any existing content.
		propertyWrap.innerHTML = '';

		// Loop over each property in the propertyData array.
		propertyData.forEach((property) => {
			// Generate HTML for the property.
			const propertyHTML = createPropertyTemplate(property);
			// Append the generated HTML to the propertyWrap container.
			propertyWrap.innerHTML += propertyHTML;

			const expandBtn = document.querySelectorAll('.expand-btn');

			expandBtn.forEach((btn) => {
				btn.addEventListener('click', () => {
					loadPropertyDetails(event);
				});
			});
		});
	} else {
		console.error('Error: .property-wrap element not found!');
	}
};

// find the property id of the button clicked and effectively find the object of that id and parse the data into session storage and migrate into the property details page
const loadPropertyDetails = (event) => {
	// alert('Hello, See details button has been clicked!');
	const location = '/prop-details.html';

	const propertyCardId = event.target
		.closest('.property-card')
		.getAttribute('data-id');

	const selectedProperty = propertyData.find(
		(property) => property.id === Number(propertyCardId)
	);

	if (selectedProperty) {
		sessionStorage.setItem(
			'selectedProperty',
			JSON.stringify(selectedProperty)
		);

		window.location.href = location;
	} else {
		console.error('Error: Property not found!');
	}
};
