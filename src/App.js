import '@/assets/scss/App.scss';
import Header from '@/components/Header.js';
import router from '@/router/router';
import { $ } from '@/utils/querySelector.js';

class App {
	constructor($element) {
		this.$element = $element;
		this.start();
	}

	start() {
		if (!this.$element) return;

		this.$element.innerHTML = `
      <header class="main-header"></header>
      <section>
        <div id="content"></div>
      </section>
    `;

		new Header($('.main-header'));
		router.route();

		window.addEventListener('popstate', () => {
			router.route();
		});
	}
}

export default App;
