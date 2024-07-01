import { jest } from '@jest/globals';

import Header from '@/components/Header.js';
import router from '@/router/router';
import { $ } from '@/utils/querySelector.js';

describe('Header', () => {
	let header;
	let originalNavigateTo;

	beforeEach(() => {
		document.body.innerHTML = '<div class="main-header"></div>';
		const $element = $('.main-header');

		// router.navigateTo를 모킹합니다.
		originalNavigateTo = router.navigateTo;
		router.navigateTo = jest.fn();

		header = new Header($element);
		header.render();
	});

	afterEach(() => {
		// 모킹한 navigateTo를 원래 상태로 복원합니다.
		router.navigateTo = originalNavigateTo;
	});

	test('헤더 내용을 렌더링해야 합니다', () => {
		const $element = $('.main-header');
		expect($element.innerHTML).toContain('logo-container');
		expect($element.innerHTML).toContain('right-container');
	});

	test('로고 클릭 시 navigateTo가 호출되어야 합니다', () => {
		const $element = $('.main-header');
		const logoContainer = $element.querySelector('.logo-container');
		logoContainer.click();

		expect(router.navigateTo).toHaveBeenCalledWith(`/`);
	});
});
