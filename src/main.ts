import '@/assets/scss/index.scss';
// import * as bootstrap from 'bootstrap';

import App from '@/App';
import { $ } from '@/utils/querySelector';

document.addEventListener('DOMContentLoaded', () => {
	const $element: HTMLElement = $('#app');
	if ($element) {
		new App($element);
	} else {
		console.error('App container not found');
	}
});
