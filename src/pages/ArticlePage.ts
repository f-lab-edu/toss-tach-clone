// ArticlePage.ts
import '@/assets/scss/ArticlePage.scss';
import Component from '@/core/Component';
import { getArticle } from '@/api';
import type { Article } from '@/types/ArticleTypes';
import type { RouteParam } from '@/types/RouterTypes';
import { formatDate } from '@/utils/dateFormat';

class ArticlePage extends Component {
	articleId: string;
	searchParams: URLSearchParams;

	constructor($element: HTMLElement, params: RouteParam) {
		super($element);
		this.articleId = params.id;
		this.searchParams = params?.searchParams;
		this.init();
	}

	async init(): Promise<void> {
		const { articleContent, article } = await getArticle(this.articleId);
		this.render(article, articleContent);
	}

	render(article: Article, articleContent: string) {
		if (!article) {
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
}

export default ArticlePage;
