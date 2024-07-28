import '@/assets/scss/Home.scss';
import { getArticleById } from '@/api/index';
import Component from '@/core/Component';
import router from '@/router/router';
import type { Article, ArticleList } from '@/types/ArticleTypes';
import { formatDate } from '@/utils/dateFormat';

interface HomeProps {}

interface HomeState {
	articleList: ArticleList;
	errorMessage?: string;
}

class Home extends Component<HomeProps, HomeState> {
	constructor($element: HTMLElement, props: HomeProps) {
		super($element, props);
		this.init();
	}

	protected initState(): HomeState {
		return {
			articleList: { articles: {} },
		};
	}

	async init(): Promise<void> {
		try {
			const articleList: ArticleList = await getArticleById();
			this.setState({ articleList });
		} catch (error) {
			this.setState({ errorMessage: error.message });
		}
	}

	render(): void {
		const { articleList, errorMessage } = this.state;

		if (errorMessage) {
			this.renderError(errorMessage);
			return;
		}

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

		$element.querySelector('.list-group').addEventListener('click', this.onArticleClick.bind(this));
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
