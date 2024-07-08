import Component from '@/core/Component';

interface RouteParam {
	id?: string;
	searchParams?: URLSearchParams;
}

interface Route {
	path: string;
	name: string;
	element: new ($container: HTMLElement, params?: RouteParam) => Component;
	param?: RouteParam;
}

interface Router {
	findMatchingRoute(pathname: string, searchParams?: URLSearchParams): Route | null;
	navigateTo(path: string, searchParams?: URLSearchParams, replace?: boolean): void;
	route(): void;
	routes?: Route;
}

export { RouteParam, Route, Router };
