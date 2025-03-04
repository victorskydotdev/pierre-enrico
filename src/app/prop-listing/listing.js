import { propertyData } from '../property-imgs';

const listingHeadSec = document.querySelector('.listing-head-section');
const filterBtns = document.querySelectorAll('.cat-filter-btn');

// logic to ensure that the listing head section stays static to enable navigation
window.addEventListener('scroll', () => {
	if (listingHeadSec) {
		if (window.scrollY >= 300) {
			listingHeadSec.classList.add('background-color');
		} else {
			listingHeadSec.classList.remove('background-color');
		}
	}
});

// function to filter the different property categories
const filterProps = () => {
	filterBtns.forEach((btn) => {
		const btnId = btn.getAttribute('filter-btn-id');

		if (btnId === 'all-prop') {
			btn.classList.add('active-btn');
		}

		btn.addEventListener('click', () => {
			filterBtns.forEach((otherBtn) => {
				otherBtn.classList.remove('active-btn');

				const filteredProperties =
					btnId === 'all-prop'
						? propertyData
						: propertyData.filter((property) => property.type === btnId);

				renderProperties(filteredProperties);
			});
		});
	});
};

filterProps(); // function invokation for filterProp function

// Convert image paths to Webpack-imported paths
// const properties = property.map((property) => ({
// 	...property,
// 	image: property.image.map((img) => require(`../assets/${img}`)),
// }));

const listPropTemplate = (property, index) => {
	return `
    <div class="card listed-prop-card ${property.type}" card-prop-id="${
		property.id
	}">
      <div class="img-wrap">
        <img src="${property.image[0]}" alt="${
		property.title
	}" class="property-img" />
      </div>

      <div class="text-wrap">
        <h3 class="heading">${property.title}</h3>

        <p class="desc">${property.shortDesc.slice(0, 50)}...</p> 
        <p class="price">${property.price}</p>
        <button class="see-details-btn" data-property-id="${
					property.id
				}">See Details</button>
      </div>
    </div>
  `;
};

const renderProperties = (propertiesToRender) => {
	const propertyWrap = document.querySelector('.property-wrap .wrap');

	if (!propertyWrap) {
		console.error('Error: .property-wrap .wrap element not found!');
		return;
	}

	propertyWrap.innerHTML = '';

	if (propertiesToRender) {
		propertiesToRender.forEach((property) => {
			const propertyHTML = listPropTemplate(property);
			propertyWrap.innerHTML += propertyHTML;
		});
	} else {
		console.error(
			'Error: propertiesToRender is not an array:',
			propertiesToRender
		);
	}
};

const renderFeaturedProperties = (propertiesToRender) => {
	const featuredPropertyContainer = document.querySelector(
		'.featured-properties-container'
	); // Correct selector

	if (!featuredPropertyContainer) {
		console.error('Featured properties container not found!');
		return;
	}

	featuredPropertyContainer.innerHTML = ''; // Clear existing elements

	if (Array.isArray(propertiesToRender)) {
		// Check if it's an array for featured properties
		propertiesToRender.forEach((property) => {
			const featuredPropertyHTML = `
        <div class="featured-prop-card">
          <img src="${property.image}" alt="${property.title}">
          <h3>${property.title}</h3>
        </div>
      `;
			featuredPropertyContainer.innerHTML += featuredPropertyHTML;
		});
	} else {
		console.error(
			'Error: propertiesToRender (featured) is not an array:',
			propertiesToRender
		);
	}
};

const listAvailProps = () => {
	window.addEventListener('DOMContentLoaded', () => {
		console.log('propertyData:', propertyData); // Debug: Check propertyData!

		if (!Array.isArray(propertyData)) {
			console.error(
				'Error: propertyData is not an array. Check your JSON import and data.'
			);
			return;
		}

		const featuredProperties = propertyData.filter(
			(property) => property.featured === true
		); // Filter featured properties

		renderProperties(propertyData); // Render regular properties
		renderFeaturedProperties(featuredProperties); // Render featured properties

		const propertyWrap = document.querySelector('.property-wrap .wrap');

		if (!propertyWrap) {
			console.error('Error: .property-wrap .wrap element not found!');
			return;
		}

		propertyWrap.addEventListener('click', (event) => {
			if (event.target.classList.contains('see-details-btn')) {
				const propertyId = event.target.dataset.propertyId;
				const selectedProperty = propertyData.find(
					(prop) => prop.id === parseInt(propertyId)
				);

				localStorage.setItem(
					'selectedProperty',
					JSON.stringify(selectedProperty)
				);
				window.location.href = '/prop-details.html';
			}
		});
	});
};

listAvailProps();

window.addEventListener('DOMContentLoaded', () => {
	const storedProperty = localStorage.getItem('selectedProperty');
	if (storedProperty) {
		const property = JSON.parse(storedProperty);
		const detailsContainer = document.getElementById('property-details');

		if (detailsContainer) {
			detailsContainer.innerHTML = `
        <h2>${property.title}</h2>
        <img src="${property.image}" alt="${property.title}" class="detail-image">
        <p>${property.shortDesc}</p>
        <p>Price: ${property.price}</p>
        <p>Bedrooms: ${property.bedrooms}</p>
        <p>Bathrooms: ${property.bathrooms}</p>
        <p>Address: ${property.address}</p>
      `;
		} else {
			console.error(
				"Element with ID 'property-details' not found on this page."
			);
		}
	} else {
		console.log('No property selected.');
	}
});

export { listAvailProps };
