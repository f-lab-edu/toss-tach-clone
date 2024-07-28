export default abstract class Component<P, S> {
	$element: HTMLElement;
	props: P;
	state: S;

	constructor($element: HTMLElement, props?: P) {
		this.$element = $element;
		this.props = props;
		this.state = this.initState();
		this.render();
	}

	// state 초기화 메서드
	protected initState(): S {
		return {} as S;
	}

	// 반드시 구현해야 하는 메서드
	abstract render(...args: unknown[]): void;

	// state 설정 메서드
	setState(newState: Partial<S>): void {
		this.state = { ...this.state, ...newState };
		this.render();
	}
}
