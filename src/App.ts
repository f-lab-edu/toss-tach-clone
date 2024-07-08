import '@/assets/scss/App.scss';
import Header from '@/components/Header';
import router from '@/router/router';
import { $ } from '@/utils/querySelector';

class App {
	$element: HTMLElement;
	header: Header;

	constructor($element: HTMLElement) {
		this.$element = $element;
		this.start();
	}

	start(): void {
		this.$element.innerHTML = `
      <header class="main-header"></header>
      <section>
        <div id="content"></div>
      </section>
    `;

		this.header = new Header($('.main-header'));
		router.route();

		window.addEventListener('popstate', () => router.route());
	}
}

export default App;
