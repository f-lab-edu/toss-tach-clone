import '@/assets/scss/Header.scss';
import Component from '@/core/Component.js';
import router from '@/router/router';
class Header extends Component {
	constructor($element) {
		super($element);
	}

	render() {
		const html = `
		<header class="main-header">
			<div class="header-container">
				<div class="header-container-inner">
					<div class="logo-container">
						<img height="100%" alt="로고 아이콘" src="/assets/images/logo-image.png" />
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
		this.$element.innerHTML = html;
		this.addEventListeners(this.$element);
		return html;
	}

	addEventListeners($element) {
		if (!$element) return;

		$element.querySelector('.logo-container').addEventListener('click', this.onLogoClick);
	}

	onLogoClick() {
		router.navigateTo(`/`);
	}
}

export default Header;
