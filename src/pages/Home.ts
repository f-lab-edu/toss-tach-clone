import '@/assets/scss/Home.scss';
import { getArticleById } from '@/api/index';
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
			const articleList: ArticleList = await getArticleById();
			this.render(articleList);
		} catch (error) {
			this.renderError(error.message);
		}
	}

	isArticleList(arg: unknown): arg is ArticleList {
		return arg && typeof arg === 'object' && 'articles' in arg;
	}

	render<T>(...args: T[]): string {
		const articleList = args[0];
		if (!this.isArticleList(articleList)) {
			this.renderError('Invalid article list data');
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

// PR 일단 머지

// 1. API 랩핑
// 2. 타입스크립트 적용

// 타입스크립트 소스맵 찾아보기
// 타입시그니처, 호출시그니처
// 자바스크립트에서 파라미터를 가변적으로 받을수있는방법?
// 제네릭을 활용하는 방법과 공통점

// 웹팩에서 코드 스플리팅 어떻게 하는지만 찾아보기.
// 웹팩 트리쉐이킹 찾아보기.
// npm 팬텀 디펜던시, npm 패키지 중복 찾아보기
// yarn 베리 한번 더 찾아보기

// 리액트 프로젝트
// 트렐로 벤치마킹
