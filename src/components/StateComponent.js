export default class StateComponent {
	constructor(props = {}) {
		this.props = props;
		this.state = {};

		this.init();
	}

	init() {
		this.state = this.initState();
		this.render();
	}

	initState() {
		return {};
	}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	render() {
		console.log('StateComponent render');
	}
}
