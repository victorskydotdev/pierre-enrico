import './scss/main.scss';

import { showNavBar } from './app/navbar-temp';
import { loadLandingPageImgs } from './app/img-assets';
import { loadFooterSection } from './app/_footer-template';
import { runAnimation } from './app/animation';
import { popupVideoFrame } from './app/popup-scripts/video-frame';
import { renderPropertyTemplate } from './app/properties/properties';
import { listAvailProps } from './app/prop-listing/listing';

// functions invokation
showNavBar();
loadLandingPageImgs();
loadFooterSection();
runAnimation();
popupVideoFrame();
renderPropertyTemplate();
listAvailProps();
