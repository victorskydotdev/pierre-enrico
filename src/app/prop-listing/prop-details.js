import brandLogo from '../../assets/pierre-enrico-logo.png';
const contactModal = document.querySelector('.contact-modal');

export const renderPropDetails = () => {
	const propertyDeetWrap = document.querySelector(
		'.detailed-properties-container'
	);

	if (propertyDeetWrap) {
		const prop = JSON.parse(sessionStorage.getItem('selectedProperty'));

		// console.log(prop);

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
              <img src="${
								prop.image[6] ? prop.image[6] : brandLogo
							}"  class="img" alt="" />
              <img src="${
								prop.image[7] ? prop.image[7] : brandLogo
							}"  class="img" alt="" />
              <img src="${
								prop.image[8] ? prop.image[8] : brandLogo
							}"  class="img" alt="" />
              <img src="${
								prop.image[9] ? prop.image[9] : brandLogo
							}"  class="img" alt="" />
            </div>

            <div class="more-info-wrap">
              <div class="info">
                <h4 class="heading">Description</h4>
                <p class="info-text">
                  ${prop.longDesc}
                </p>
              </div>

              <div class="pricing-card">
                <div class="price-wrap">
                  <h4 class="price">${prop.price}</h4>

                  <div class="btn-wrap">
                    <div class="contact-wrap">
											<a href="https://wa.me/+2348100784622?text=I want to make an enquiry for a particular property" target="_blank" class="btn contact-btn"><i class="fa-brands fa-whatsapp"></i> <span></span>WhatsApp</span></a>
											
											<a href="tel:+2348100784622" target="_blank" class="btn contact-btn"><i class="fa-solid fa-phone"></i> <span>Call</span></a>
										</div>

                    <button class="btn plan-visit-btn">Plan your visit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="listing-features">
              <div class="text-wrap">
                <h3 class="title">Features</h3>
              </div>
              <div class="features-wrap">
                <span>Bedrooms: ${prop.moreInfo.bedrooms}</span>
                <span>Surface Area: ${prop.moreInfo.surface}</span>
                <span>Land tax: ${prop.moreInfo.landTax}</span>
                <span>Reference: ${prop.moreInfo.ref}</span>
                
              </div>
            </d>
          </div>
        `;
			};

			if (propertyDeetWrap) {
				propertyDeetWrap.innerHTML = propCard();

				const contactBtn = document.querySelector('.plan-visit-btn');
				// const planVisitbtn = document.querySelector('.plan-visit-btn');

				if (contactBtn) {
					contactBtn.addEventListener('click', () => {
						setTimeout(() => {
							contactModal.classList.add('pull-up-modal');
							contactModal.innerHTML = formTemplate();

							const propIDInput = document.querySelector('.prop-id-input');

							// parse the property identifier into the appropiate input field
							if (contactModal) {
								propIDInput.value = prop.propertyObject;
							}

							// initializing the contact modal close button
							const closeBtn = document.querySelector('.close-btn');

							// running the script to close the contact modal
							if (closeBtn) {
								closeBtn.addEventListener('click', () => {
									contactModal.innerHTML = '';
									contactModal.classList.remove('pull-up-modal');
								});
							}
							// end of script to close the contact modal

							// initializing the form elements
							const form = document.querySelector('.form');

							if (form) {
								form.addEventListener('submit', (e) => {
									e.preventDefault();

									const formData = new FormData(form);
									const data = Object.fromEntries(formData.entries());
									console.log(data);

									// sending the form data to the server
									fetch('/.netlify/functions/email-notification', {
										method: 'POST',
										body: JSON.stringify(data),
										headers: {
											'Content-Type': 'application/json',
										},
									})
										.then((response) => response.json())
										.then((data) => {
											console.log('Message:', data.status);
											alert('Form submitted successfully');
											contactModal.innerHTML = '';
											contactModal.classList.remove('pull-up-modal');
										})
										.catch((error) => {
											console.error('Error:', error);
											alert('An error occurred while submitting the form');
										});
								});
							}
						}, 200);
					});
				}
			}
		} else console.log('Property Data not parsed');
	}
};

const formTemplate = (callback) => {
	return `
		<i class="fa-solid fa-xmark close-btn"></i>
		<div class="contact-modal-form">
				<form action="" class="form">
					<!-- visiting date and time elements -->
					<div class="visit-wrap">
						<p class="identifier-text">Your availability</p>

						<div class="container">
							<div class="first-pos-wrap">
								<h4 class="heading">First possibility:</h4>

								<div class="wrapper">
									<label for="date">Date:</label>
									<input type="text" id="date" name="firstVisitDate" />
								</div>

								<div class="wrapper">
									<label for="time">Time:</label>
									<input type="text" id="time" name="firstVisitTime" />
								</div>
							</div>

							<div class="second-pos-wrap">
								<h4 class="heading">Second possibility:</h4>

								<div class="wrapper">
									<label for="date">Date:</label>
									<input type="text" id="date" name="secondVisitDate" />
								</div>

								<div class="wrapper">
									<label for="time">Time:</label>
									<input type="text" id="time" name="secondVisitTime" />
								</div>
							</div>

							<div class="third-pos-wrap">
								<h4 class="heading">Third possibility:</h4>

								<div class="wrapper">
									<label for="date">Date:</label>
									<input type="text" id="date" name="thirdVisitDate" />
								</div>

								<div class="wrapper">
									<label for="time">Time:</label>
									<input type="text" id="time" name="thirdVisitTime" />
								</div>
							</div>
						</div>
					</div>
					<!-- end of visiting time and date elements -->

					<!-- user info begins here -->
					<div class="user-info-wrap">
						<p class="identifier-text">Your information</p>

						<div class="selected-object-wrap">
							<div class="wrapper">
								<label for="property">Selected property:</label>
								<input type="text" class="prop-id-input" id="property" name="selectedProperty" />
							</div>

							<div class="message-wrap">
								<div class="wrapper">
									<label for="message">Message*</label>
									<textarea name="message" id="message"></textarea>
								</div>
							</div>

							<div class="first-name-wrap">
								<div class="wrapper">
									<label for="first-name">First name*</label>
									<input name="firstName" id="first-name" />
								</div>

								<div class="wrapper">
									<label for="last-name">Last name*</label>
									<input name="lastName" id="last-name" />
								</div>
							</div>
						</div>
					</div>
					<!-- end of user info -->

					<div class="btn-wrap">
						<button class="submit-btn">Submit</button>
					</div>
				</form>
			</div>	
	`;
};
