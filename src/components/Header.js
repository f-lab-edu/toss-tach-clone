import '@/assets/scss/Header.scss';
import { $ } from '@/utils/querySelector';

const Header = ({ $element }) => {
	const render = () => {
		$element.innerHTML = `
		<header class="main-header">
			<div class="header-container">
				<div class="header-container-inner">
					<div class="logo-container">
						<img height="100%" alt="로고 아이콘" src="assets/images/logo-image.png" />
					</div>
					<div class="right-container">
						<ul class="p-navbar__menu">
							<li class="p-navbar__item">
								<button class="btn">SLASH</button>
							</li>
							<li class="p-navbar__item">
								<button class="btn">SIMPLICITY</button>
							</li>
							<li class="p-navbar__item p-navbar__button-item">
								<button class="btn button-email">이메일로 소식 받기</button>
							</li>
							<li class="p-navbar__item p-navbar__button-item">
								<button class="btn button-career">채용 바로가기</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	`;
	};

	const test = () => {
		alert('하이');
	};

	render();
	$('.button-career').addEventListener('click', test);
};

export default Header;
