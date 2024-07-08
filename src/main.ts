import '@/assets/scss/index.scss';

import App from '@/App';
import { $ } from '@/utils/querySelector';

document.addEventListener('DOMContentLoaded', () => {
	const $element: HTMLElement = $('#app');
	if ($element) {
		(window as any).appInstance = new App($element);
	} else {
		console.error('App container not found');
	}
});
