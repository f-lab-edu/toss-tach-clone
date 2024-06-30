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
