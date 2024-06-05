import App from './App.js';
import { $ } from './utils/querySelector.js';

document.addEventListener('DOMContentLoaded', () => {
	const $element = $('#app');
	if ($element) {
		App($element);
	} else {
		console.error('App container not found');
	}
});
