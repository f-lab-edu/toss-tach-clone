import Component from '@/core/Component';

interface RouteParam {
	id?: string;
	searchParams?: URLSearchParams;
}

interface Route<P, S> {
	path: string;
	name: string;
	element: new ($container: HTMLElement, params?: RouteParam) => Component<P, S>;
	param?: RouteParam;
}

interface Router {
	findMatchingRoute(
		pathname: string,
		searchParams?: URLSearchParams,
	): Route<unknown, unknown> | null;
	navigateTo(path: string, searchParams?: URLSearchParams, replace?: boolean): void;
	route(): void;
	routes?: Route<unknown, unknown>[];
}

export { RouteParam, Route, Router };
