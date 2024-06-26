import '@/assets/scss/Home.scss';
import Component from '@/core/Component.js';
import ARTICLE_LIST from '@/mocks/article-list.json';
import router from '@/router/router.js';
import { formatDate } from '@/utils/dateFormat';

class Home extends Component {
	constructor($element) {
		super($element);
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
							<span>${formatDate(article.created_date)}</span>
						</div>
					</div>
					<div class="img-container">
						<img src="${article.thumbnail_image}" class="img-thumbnail" alt="${article.title}">
					</div>
				</li>`;
			})
			.join('');

		const html = `
		<div class="container d-flex flex-column">
			<img src="/assets/images/toss-tech-banner.png" class="mt-5 rounded float-end" alt="toss-tech-banner">
			<article class="list-item mt-5">
				<ul class="list-group">
					${listItems}
				</ul>
			</article>
		</div>`;
		this.$element.innerHTML = html;
		this.addEventListeners(this.$element);
		return html;
	}

	addEventListeners($element) {
		if (!$element) return;

		$element.querySelector('.list-group').addEventListener('click', this.onArticleClick);
	}

	onArticleClick(e) {
		const listItem = e.target.closest('.list-group-item');
		if (listItem) {
			const articleId = listItem.getAttribute('id');
			const queryParams = new URLSearchParams({ ref: 'homepage' }).toString();
			router.navigateTo(`/articles/${articleId}?${queryParams}`);
		}
	}
}

export default Home;
