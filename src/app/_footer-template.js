import img2 from '../assets/pe-img2.jpg';

const footerWrap = document.querySelector('.footer-section');

const template = `
  <div class="container">
    <div class="top-wrapper">
      <div class="wrap">
        <h4><i class="fa-solid fa-location-dot"></i> St. Something Street, Paris</h4>
      </div>

      <ul class="wrap poppins-medium">
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Listings</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div class="social-media-wrap">
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>

    <div class="footer-img-section">
      <img src="${img2}" />
      <h2 class="poppins-bold">Pierre <br> <span>Enrico</span></h2>

      <p class="copyright poppins-medium">Copyright &copy; 2024. Pierre Enrico LLC. All rights reserved</p>
    </div>
  </div>
`;
export const loadFooterSection = () => {
	if (footerWrap) {
		footerWrap.innerHTML = template;
	}
};
