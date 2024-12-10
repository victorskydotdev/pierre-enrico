const videoFrameModal = document.querySelector('.video-frame-modal');
const playBtn = document.querySelector('#intro-play-btn');

export const popupVideoFrame = () => {
	if (playBtn && videoFrameModal) {
		playBtn.addEventListener('click', () => {
			videoFrameModal.classList.add('show-video-frame');
		});
	}
};
