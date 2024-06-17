export default class Component {
	constructor($element) {
		if (new.target === Component) {
			throw new Error('추상 클래스를 인스턴스화할 수 없습니다.');
		}
		this.$element = $element;
		this.setup();
		this.render();
		this.addEventListeners();
	}

	// 선택적으로 설정 로직...
	setup() {
		console.log('setup...');
	}

	// 반드시 구현 해야하는 메서드
	render() {
		console.log('render...');
		throw new Error('렌더링 방법을 구현해야 합니다.');
	}

	// 선택적으로 이벤트 리스너 추가..
	addEventListeners() {
		console.log('addEventListeners...');
	}
}
