const NotFoundPage = ({ $element }) => {
	render = () => {
		$element.innerHTML = `
      <main class="notFoundPage">
        404 NOT FOUND
      </main>
    `;
	};

	render();
};

export default NotFoundPage;
