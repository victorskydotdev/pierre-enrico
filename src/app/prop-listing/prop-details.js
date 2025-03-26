import brandLogo from '../../assets/pierre-enrico-logo.png';
const contactModal = document.querySelector('.contact-modal');

export const renderPropDetails = () => {
	const propertyDeetWrap = document.querySelector(
		'.detailed-properties-container'
	);

	if (propertyDeetWrap) {
		const prop = JSON.parse(sessionStorage.getItem('selectedProperty'));

		console.log(prop);

		if (prop) {
			const propCard = () => {
				return `
          <div class="wrap">
            <h3 class="prop-title">${prop.title}</h3>
          
            <div class="img-wrap">
              <img src="${
								prop.image[0] ? prop.image[0] : brandLogo
							}" class="img" alt="${prop.title}" />
              <img src="${
								prop.image[1] ? prop.image[1] : brandLogo
							}" class="img" alt="" />
              <img src="${
								prop.image[2] ? prop.image[2] : brandLogo
							}" class="img" alt="" />
              <img src="${
								prop.image[3] ? prop.image[3] : brandLogo
							}" class="img" alt="" />
              <img src="${
								prop.image[4] ? prop.image[4] : brandLogo
							}"  class="img" alt="" />
              <img src="${
								prop.image[5] ? prop.image[5] : brandLogo
							}"  class="img" alt="" />
            </div>

            <div class="more-info-wrap">
              <div class="info">
                <h4 class="heading">More info</h4>
                <p class="info-text">
                  ${prop.longDesc}
                </p>
              </div>

              <div class="pricing-card">
                <div class="price-wrap">
                  <h4 class="price">${prop.price}</h4>

                  <button class="btn contact-btn">Contact us</button>
                </div>
              </div>
            </div>

            <div class="listing-features">
              <div class="text-wrap">
                <h3 class="title">Features</h3>
              </div>
              <div class="features-wrap">
                <span>Bedroom: ${prop.bedrooms}</span>
                <span>Bedroom: ${prop.bedrooms}</span>
                <span>Bedroom: ${prop.bedrooms}</span>
                <span>Bedroom: ${prop.bedrooms}</span>
                <span>Bedroom: ${prop.bedrooms}</span>
                <span>Bedroom: ${prop.bedrooms}</span>
              </div>
            </d>
          </div>
        `;
			};

			if (propertyDeetWrap) {
				propertyDeetWrap.innerHTML = propCard();

				const contactBtn = document.querySelector('.contact-btn');

				if (contactBtn) {
					contactBtn.addEventListener('click', () => {
						contactModal.classList.add('pull-up-modal');

						const closeBtn = document.querySelector('.close-btn');

						if (closeBtn) {
							closeBtn.addEventListener('click', () => {
								contactModal.classList.remove('pull-up-modal');
							});
						}
					});
				}
			}
		} else console.log('Property Data not parsed');
	}
};
