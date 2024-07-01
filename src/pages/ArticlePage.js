import '@/assets/scss/ArticlePage.scss';

import Component from '@/core/Component.js';
import ARTICLE from '@/mocks/article-body.json';
import ARTICLE_LIST from '@/mocks/article-list.json';
import { formatDate } from '@/utils/dateFormat';

class ArticlePage extends Component {
	constructor($element, articleId, searchParams) {
		super($element);
		this.articleId = articleId;
		this.searchParams = searchParams;
	}

	render() {
		if (!this.articleId) {
			return;
		}

		const articleBody = ARTICLE[this.articleId];
		const article = ARTICLE_LIST.articles[this.articleId];

		this.$element.innerHTML = `
			<article class="content-inner">
				<header>
					<div>
						<img src="${article.thumbnail_image}" class="rounded img-fluid" alt="이미지" />
					</div>
					<div class="mt-5 header-title-container">
						<h1 class="title">${article.title}</h1>
					</div>
					<div class="header-created-date-container"}">
          <span>${formatDate(article.created_date)}</span>
        </div>

				</header>
				<div class="mt-5 article-body">${articleBody}</div>
			</article>
		`;
	}
}

export default ArticlePage;
