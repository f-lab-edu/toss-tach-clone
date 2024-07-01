# toss-tach-clone

이 프로젝트는 바닐라 자바스크립트로 토스 기술블로그를 구현 하는 프로젝트 입니다.
Node.js 버전은 ^18.19.0 이상 입니다.

## 목차

- [설치](#설치)
- [실행 방법](#실행-방법)
- [개발](#개발)
- [테스트](#테스트)
- [코드 스타일 검사](#코드-스타일-검사)

## 설치

```bash
npm i
```

## 실행 방법

다음 명령어를 사용하여 개발서버를 실행할 수 있습니다.

```bash
npm run dev
```

## 개발

#### 프로젝트 구조

- src/: 애플리케이션의 소스 코드

  - assets/: CSS 및 이미지 파일
  - components/: 공통 컴포넌트
  - core/: 기본 JavaScript 파일 및 기본 부모 클래스 컴포넌트 파일
  - pages/: 페이지 컴포넌트
    - tests/: 페이지 테스트 파일
  - router/: 라우팅 로직

    - findMatchingRoute(pathname, searchParams)
      - 이 메서드는 인자로 경로와, 검색파라미터를 사용하여 적절한 라우트를 찾습니다.
      - routes 배열에서 pathname과 일치하는 경로를 찾습니다.
      - 경로의 각 부분이 동일하거나 :로 시작하는 동적 경로인 경우를 매칭합니다.
      - article 라우트의 경우 pathname에서 id를 추출하여 파라미터로 추가합니다.
      - 반환 값은 매칭된 라우트 이며, 매칭된 라우트가 없을 경우 notfound를 반환합니다.
    - navigateTo(path, replace = false)
      - 이 메서드는 애플리케이션의 URL을 변경하고, 변경된 URL에 따라 적절한 컴포넌트를 렌더링합니다.
      - replace가 true인 경우 window.history.replaceState를 사용하여 현재 URL을 대체합니다.
      - URL이 변경된 후 route 메서드를 호출하여 새 URL에 맞는 컴포넌트를 렌더링합니다.
    - route()
      - 이 메서드는 현재 URL을 분석하고, 적절한 컴포넌트를 찾아 렌더링합니다.
      - 현재 브라우저의 URL을 URL 객체로 분석하여 pathname과 searchParams를 추출합니다.
      - 매칭된 라우트가 notfound인 경우, navigateTo를 호출하여 notfound 페이지로 이동합니다.
      - 그렇지 않은 경우, 라우트의 컴포넌트를 생성하여 render 메서드를 호출합니다.
    - tests/: 라우팅 테스트 파일

  - utils/: 유틸리티 함수
  - tests/: App.js 테스트 파일

#### 스크립트

- `npm run dev`: 개발 서버 시작
- `npm run test`: 테스트 실행
- `npm run lint`: ESLint를 사용하여 코드 스타일 검사

## 테스트

다음 명령어를 사용하여 테스트를 실행할 수 있습니다.

```bash
npm run test
```

## 코드 스타일 검사

```bash
npm run lint
```
