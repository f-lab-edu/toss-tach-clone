import Component from '@/core/Component';

interface NotFoundPageProps {}
interface NotFoundPageState {}

class NotFoundPage extends Component<NotFoundPageProps, NotFoundPageState> {
	constructor($element: HTMLElement) {
		super($element);
	}

	render(): string {
		const html = `
		<div class="container d-flex vw-100 h-100 mt-5">
			<img class="img-fluid rounded " height="100%" alt="404 Error" src="/assets/images/not-found.jpg" />
		</div>
    `;
		this.$element.innerHTML = html;
		return html;
	}
}

export default NotFoundPage;
