import '@/assets/scss/index.scss';

import App from '@/App';
import { $ } from '@/utils/querySelector';

document.addEventListener('DOMContentLoaded', () => {
	const $element: HTMLElement = $('#app');
	if ($element) {
		// SonarQube 경고 무시
		// eslint-disable-next-line no-new
		new App($element);
	} else {
		console.error('App container not found');
	}
});
