import Component from '@/core/Component';

class NotFoundPage extends Component {
	constructor($element: HTMLElement) {
		super($element);
	}

	render(): void {
		this.$element.innerHTML = `
		<div class="container d-flex vw-100 h-100 mt-5">
			<img class="img-fluid rounded " height="100%" alt="404 Error" src="/assets/images/not-found.jpg" />
		</div>
    `;

		return;
	}
}

export default NotFoundPage;
