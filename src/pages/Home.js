class Home {
	constructor($element) {
		this.$element = $element;
		this.render();
	}

	render() {
		this.$element.innerHTML = `
		<div class="container d-flex flex-column">
			<img src="assets/images/toss-tech-banner.png" class="mt-3  rounded float-end" alt="toss-tech-banner">
			<div class="text-xl text-sky-400/100">리스트</div>
		</div>`;
	};

};

export default Home;
