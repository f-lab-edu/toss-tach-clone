interface Article {
	thumbnail_image: string;
	title: string;
	summary: string;
	created_date: string;
}

interface Articles {
	[key: string]: Article;
}

interface ArticleList {
	articles: Articles;
}

interface ArticleBody {
	[key: string]: string;
}

interface ArticleData {
	article: Article;
	body: string;
}

export { Article, Articles, ArticleList, ArticleBody, ArticleData };