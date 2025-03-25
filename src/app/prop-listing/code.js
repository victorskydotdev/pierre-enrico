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
