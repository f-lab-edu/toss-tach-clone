export default abstract class Component {
	$element: HTMLElement;

	constructor($element: HTMLElement) {
		this.$element = $element;
		this.render();
	}

	// 반드시 구현 해야하는 메서드
	abstract render(...args: any[]): void;
}
