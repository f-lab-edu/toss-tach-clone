import '../assets/css/Header.css';

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
										<button>
											SLASH
										</button>
								</li>
								<li class="p-navbar__item">
										<button>
											SIMPLICITY
										</button>
								</li>
								<li class="p-navbar__item p-navbar__button-item">
									<button class="button-email">
										이메일로 소식 받기
									</button>
								</li>
								<li class="p-navbar__item p-navbar__button-item">
									<button class="button-career">
										채용 바로가기
									</button>
								</li>
							</ul>
						</div>
          </div>
        </div>
      </header>
    `;
	};

	render();
};

export default Header;
