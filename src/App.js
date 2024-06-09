import './assets/scss/App.scss';
import Header from '@/components/Header.js';
import Home from '@/pages/Home.js';
import { $ } from '@/utils/querySelector.js';

const App = ($element) => {
	const start = () => {
		$element.innerHTML = `
			<header class="main-header"></header>
			<section>
      	<div id="content"></div>
    	</section>
		`;

		Header({ $element: $('.main-header') });
		Home({ $element: $('#content') });
	};

	start();
};

export default App;
