import StateComponent from "@/components/StateComponent";

class NotFoundPage extends StateComponent {
  constructor($element) {
    this.element = $element;
    this.render();
  }

	render() {
		this.$element.innerHTML = `
      <main class="notFoundPage">
        404 NOT FOUND
      </main>
    `;
	};

};

export default NotFoundPage;
