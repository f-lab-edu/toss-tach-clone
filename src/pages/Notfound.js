// import StateComponent from '@/components/StateComponent';

class NotFoundPage {
	constructor($element) {
		this.$element = $element;
	}

	render() {
		this.$element.innerHTML = `
		<div class="container d-flex vw-100 h-100 mt-5">
			<img class="img-fluid rounded " height="100%" alt="404 Error" src="/assets/images/not-found.jpg" />
		</div>
    `;
	}
}

export default NotFoundPage;
