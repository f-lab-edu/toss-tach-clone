import './assets/css/App.css';
import Header from './components/Header.js';
import { $ } from './utils/querySelector.js';

const App = ($element) => {
	const start = () => {
		$element.innerHTML = `
			<header class="main-header"></header>
			<section>
      	<div id="content"></div>
    	</section>
		`;

		Header({ $element: $('.main-header') });
	};

	start();
};

export default App;
