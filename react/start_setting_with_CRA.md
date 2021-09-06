## 01 - 1 . 프로젝트 생성

→ 터미널창에

```
npx create-react-app [폴더이름]
```

입력

→ vs코드로 들어가 폴더를 열기

→ readme 삭제후 movie app 전용으로 새 생성

→ package 파일에서 test eject 삭제가능

→ yarn 파일 삭제가능 (npm 사용)

→ vs코드 내 터미널창에서 

```
npm start
```

입력 (페이지 열림)

→

## 01 - 2 . 깃허브에 올리기

→ 새 래포지터리 생성 ( 가능하다면 패키지 파일의 이름과 같게 하는걸 추천 )

→ 

```
git init

git remote add origin [주소]

git add .

git commit -m "[커밋이름]"

git push origin master
```

## 01 - 3 . 기본 세팅

→ src 에서 index.js 에 있는 3번째줄. 5째줄, 주석 부터 다 지우기

→ src 내의 logo , serviceWorker, index.css, app.test.js, app.css 삭제 

→ 파일들을 삭제했기 때문에 app.js에서  선언한 문장들을 지워줘야함 ( css 나 logo 같은것들 )

→ app.js 내에 헤더 등 상관없는 부분 지우기 ( function app 내에 div classname="App" 만 남게 )
