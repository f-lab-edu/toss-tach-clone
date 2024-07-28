import '@/assets/scss/ArticlePage.scss';
import Component from '@/core/Component';
import { getArticle } from '@/api';
import type { Article, ArticleData } from '@/types/ArticleTypes';
import type { RouteParam } from '@/types/RouterTypes';
import { formatDate } from '@/utils/dateFormat';

interface ArticlePageProps extends RouteParam {}

interface ArticlePageState {
	article?: Article;
	articleContent?: string;
	errorMessage?: string;
}

class ArticlePage extends Component<ArticlePageProps, ArticlePageState> {
	articleId: string;
	searchParams: URLSearchParams;

	constructor($element: HTMLElement, props: ArticlePageProps) {
		super($element, props);
		this.articleId = props.id;
		this.searchParams = props.searchParams;
		this.init();
	}

	async init(): Promise<void> {
		try {
			const { article, articleContent }: ArticleData = await getArticle(this.articleId);
			this.setState({ article, articleContent });
		} catch (error) {
			this.setState({ errorMessage: error.message });
		}
	}

	render(): void {
		const { article, articleContent, errorMessage } = this.state;

		if (errorMessage) {
			this.renderError(errorMessage);
			return;
		}

		if (!article || !articleContent) {
			this.$element.innerHTML = '<p>Loading...</p>';
			return;
		}

		this.$element.innerHTML = `
			<article class="content-inner">
				<header>
					<div>
						<img src="${article.thumbnail_image}" class="rounded img-fluid" alt="이미지" />
					</div>
					<div class="mt-5 header-title-container">
						<h1 class="title">${article.title}</h1>
					</div>
					<div class="header-created-date-container">
						<span>${formatDate(article.created_date)}</span>
					</div>
				</header>
				<div class="mt-5 article-body">${articleContent}</div>
			</article>
		`;
	}

	renderError(errorMessage: string): void {
		this.$element.innerHTML = `
		<div class="container d-flex flex-column">
			<p class="error-message">${errorMessage}</p>
		</div>`;
	}
}

export default ArticlePage;
