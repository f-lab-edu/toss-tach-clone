import '@/assets/scss/Home.scss';
import { getArticles } from '@/api/index';
import Component from '@/core/Component';
import router from '@/router/router';
import type { Article, ArticleList } from '@/types/ArticleTypes';
import { formatDate } from '@/utils/dateFormat';

class Home extends Component {
	constructor($element: HTMLElement) {
		super($element);
		this.init();
	}

	async init(): Promise<void> {
		try {
			const articleList: ArticleList = await getArticles();
			this.render(articleList);
		} catch (error) {
			this.renderError(error.message);
		}
	}

	render<T>(...args: T[]): string {
		const articleList = (args[0] as ArticleList) || { articles: {} };
		const listItems: string = Object.keys(articleList.articles)
			.map((key) => {
				const article: Article = articleList.articles[key];
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

		const html: string = `
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

	renderError(errorMessage: string): void {
		const html: string = `
		<div class="container d-flex flex-column">
			<p class="error-message">${errorMessage}</p>
		</div>`;
		this.$element.innerHTML = html;
	}

	addEventListeners($element: HTMLElement): void {
		if (!$element) return;

		$element.querySelector('.list-group').addEventListener('click', this.onArticleClick);
	}

	onArticleClick(e: MouseEvent): void {
		const listItem: HTMLElement = (e.target as HTMLElement).closest('.list-group-item');
		if (listItem) {
			const articleId: string = listItem.getAttribute('id');
			const queryParams: URLSearchParams = new URLSearchParams({ ref: 'homepage' });
			router.navigateTo(`/articles/${articleId}`, queryParams);
		}
	}
}

export default Home;
