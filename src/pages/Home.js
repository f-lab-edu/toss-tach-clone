import ARTICLE_LIST from '@/mocks/article-list.json';
import '@/assets/scss/Home.scss';
import dayjs from '@/plugins/dayjs/index.js';

class Home {
	constructor($element) {
		this.$element = $element;
	}

	render() {
		const articleList = ARTICLE_LIST.articles;

		const listItems = Object.keys(articleList)
			.map((key) => {
				const article = articleList[key];
				return `
				<li class="list-group-item d-flex mt-3" id=${key}>
					<div class="contents-container">
						<div class="title">
							<strong>${article.title}</strong>
						</div>
						<div class="summary">
							<span>${article.summary}</span>
						</div>
						<div class="date">
							<span>${dayjs(article.created_date).format('YYYY-MM-DD')}</span>
						</div>
					</div>
					<div class="img-container">
						<img src="${article.thumbnail_image}" class="img-thumbnail" alt="${article.title}">
					</div>
				</li>`;
			})
			.join('');

		this.$element.innerHTML = `
		<div class="container d-flex flex-column">
			<img src="assets/images/toss-tech-banner.png" class="mt-5 rounded float-end" alt="toss-tech-banner">
			<article class="list-item mt-5">
				<ul class="list-group">
					${listItems}
				</ul>
			</article>
		</div>`;

		this.addEventListeners(this.$element);
	}

	addEventListeners($element) {
		if (!$element) return;

		$element.querySelector('.list-group').addEventListener('click', (e) => {
			const listItem = e.target.closest('.list-group-item');
			if (listItem) {
				const articleId = listItem.getAttribute('id');
				console.log('Clicked item:', articleId);
			}
		});
	}
}

export default Home;
