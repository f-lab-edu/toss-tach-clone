import '@/assets/scss/index.scss';
// import * as bootstrap from 'bootstrap';

import App from '@/App.js';
import { $ } from '@/utils/querySelector.js';

document.addEventListener('DOMContentLoaded', () => {
	const $element = $('#app');
	if ($element) {
		new App($element);
	} else {
		console.error('App container not found');
	}
});
