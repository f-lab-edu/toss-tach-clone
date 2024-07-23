import { jest } from '@jest/globals';

import Header from '@/components/Header';
import router from '@/router/router';
import { $ } from '@/utils/querySelector';

describe('Header', () => {
	let header: Header;
	let originalNavigateTo: typeof router.navigateTo;

	beforeEach(() => {
		document.body.innerHTML = '<div class="main-header"></div>';
		const $element: HTMLElement = $('.main-header');

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
		const $element: HTMLElement = $('.main-header');
		expect($element.innerHTML).toContain('logo-container');
		expect($element.innerHTML).toContain('right-container');
	});

	test('로고 클릭 시 navigateTo가 호출되어야 합니다', () => {
		const $element: HTMLElement = $('.main-header');
		const logoContainer: HTMLElement = $element.querySelector('.logo-container');
		logoContainer.click();

		expect(router.navigateTo).toHaveBeenCalledWith(`/`);
	});
});
