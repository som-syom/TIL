- 완성본미리보기 페이지

    ⇒ [http://spartacodingclub.shop/event/xmas2020](http://spartacodingclub.shop/event/xmas2020)

# 😊01

### !!!! 순서 !!!!

1. 봉투 HTML 만들기
2. 편지 HTML 만들기
3. 모바일 버전 처리
4. 봉투를 누르면 편지가 나오도록 js 처리
5. 눈송이 떨어지는 효과
6. hidden 메세지 작업
7. 공유를 하기 위한 이미지, 텍스트 작업

# 😊02 - 봉투 HTML 만들기

- xmas.html 생성
- 배경 색 지정 → div background-color 설정 (#9b070f)
- 봉투 이미지 넣기
- 이미지 하단에 메세지 넣기
- 봉투이미지 + 메세지 div로 묶기

# 😊03 - 웹 폰트 적용하기

- 1일차와 동일

# 😊04 - 편지 HTML 만들기

- 봉투 html 안보이게 만들어놓기

    ⇒ 묶은 div 를 안보이게 설정 (display: none)

- box-shadow: 0px 0px 10px 0px white;

    ⇒ 첫번째 가로, 두번째 세로, 세번째 얼마나 뿌옇게 할지, 네번째  얼마나 길게 뿌옇게 할지

- 폰트 줄간격 띄우기 : line-height: 30px; (항상 폰트사이즈보다 크게 하는게 보기좋음 )
- 마지막에 div로 바꿔주기
- 코드

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
    	<meta charset="UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Christmas Card</title>
    	<link rel="preconnect" href="https://fonts.gstatic.com">
    	<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap" rel="stylesheet">
    	<style>
    		* {
    			font-family: 'Noto Serif KR', serif;
    		}

    		body {
    			background-color: #9b070f;
    		}

    		.envelope {
    			width: 200px;
    			height: 200px;
    			background-image: url('https://pngimg.com/uploads/envelope/envelope_PNG18366.png');
    			background-size: cover;
    			background-position: center;
    			margin: 200px auto 0 auto;
    		}

    		.envelope-msg {
    			color: white;
    			text-align: center;
    		}

    		.letter-close {
    			display: none;
    		}

    		.rtan {
    			background-color: white;
    			width: 200px;
    			height: 200px;
    			;
    			background-image: url('https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/rtan.gif');
    			background-size: cover;
    			background-position: center;
    			margin: 100px auto 0 auto;
    			border-radius: 50%;
    			border: 5px solid white;
    			box-shadow: 0px 0px 10px 0px white;
    		}

    		h1 {
    			color: white;
    			text-align: center;
    			margin-top: 30px;
    			margin-bottom: 30px;
    		}

    		.messagebox {
    			background-color: ivory;
    			color: brown;
    			width: 400px;
    			margin: auto;
    			padding: 30px;
    			font-size: 20px;
    			line-height: 30px;
    			box-shadow: 0px 0px 10px 0px white;
    		}

    		.from {
    			text-align: right;
    			margin-bottom: 0;
    		}
    	</style>
    </head>

    <body>
    	<div class="letter-close">
    		<div class="envelope"></div>
    		<h2 class="envelope-msg">봉투를 열어봐!</h2>
    	</div>
    	<div class="letter-open">
    		<div class="rtan"></div>
    		<h1>2020년 수고 많았어!</h1>
    		<div class="messagebox">
    			친구들에게. <br />
    			올해 이런저런 일이 많았는데 <br />
    			너희 덕분에 하나도 힘들지 않았어 <br />
    			내년에도 우리 우정 변치말자 <br />
    			연말에 다 같이 못 봐서 아쉽다 <br />
    			<p class="from">2020.12.25 다솜</p>
    		</div>
    	</div>
    </body>

    </html>
    ```

# 😊05 - 모바일버전 처리하기

- 개발자도구 → 상단의 버튼 클릭

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2006684b-de3a-4a1f-b3a0-591fcf936fa0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2006684b-de3a-4a1f-b3a0-591fcf936fa0/Untitled.png)

- 적용할 폰 선택 ( ex : iphone X)
- 다시 res
- 미디어쿼리 사용

    ⇒ `@media screen and (max-width: 760px)`

- 개발자도구에서 수정해보면서 확인
- 코드

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
    	<meta charset="UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Christmas Card</title>
    	<link rel="preconnect" href="https://fonts.gstatic.com">
    	<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap" rel="stylesheet">
    	<style>
    		* {
    			font-family: 'Noto Serif KR', serif;
    		}

    		body {
    			background-color: #9b070f;
    		}

    		.envelope {
    			width: 200px;
    			height: 200px;
    			background-image: url('https://pngimg.com/uploads/envelope/envelope_PNG18366.png');
    			background-size: cover;
    			background-position: center;
    			margin: 200px auto 0 auto;
    		}

    		.envelope-msg {
    			color: white;
    			text-align: center;
    		}

    		.letter-close {
    			/* display: none; */
    		}

    		.letter-open {
    			display: none;
    		}

    		.rtan {
    			background-color: white;
    			width: 200px;
    			height: 200px;
    			;
    			background-image: url('https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/rtan.gif');
    			background-size: cover;
    			background-position: center;
    			margin: 100px auto 0 auto;
    			border-radius: 50%;
    			border: 5px solid white;
    			box-shadow: 0px 0px 10px 0px white;
    		}

    		h1 {
    			color: white;
    			text-align: center;
    			margin-top: 30px;
    			margin-bottom: 30px;
    		}

    		.messagebox {
    			background-color: ivory;
    			color: brown;
    			width: 400px;
    			margin: auto;
    			padding: 30px;
    			font-size: 20px;
    			line-height: 30px;
    			box-shadow: 0px 0px 10px 0px white;
    		}

    		.from {
    			text-align: right;
    			margin-bottom: 0;
    		}

    		@media screen and (max-width: 760px) {
    			.messagebox {
    				width: 300px;
    				padding: 20px;
    			}
    			
    			.rtan {
    				width: 150px;
    				height: 150px;
    				margin: 70px auto 0 auto;
    			}

    			h1 {
    				font-size: 28px;
    			}

    			.envelope {
    				margin: 150px auto 0 auto;
    			}
    		}
    	</style>
    </head>

    <body>
    	<div class="letter-close">
    		<div class="envelope"></div>
    		<h2 class="envelope-msg">봉투를 열어봐!</h2>
    	</div>
    	<div class="letter-open">
    		<div class="rtan"></div>
    		<h1>2020년 수고 많았어!</h1>
    		<div class="messagebox">
    			친구들에게. <br />
    			올해 이런저런 일이 많았는데 <br />
    			너희 덕분에 하나도 힘들지 않았어 <br />
    			내년에도 우리 우정 변치말자 <br />
    			연말에 다 같이 못 봐서 아쉽다 <br />
    			<p class="from">2020.12.25 다솜</p>
    		</div>
    	</div>
    </body>

    </html>
    ```

# 😊06 - 간단한 자바스크립트 맛보기

- 봉투 div에 onclick 함수 넣기

    ⇒ `<div class="envelope" **onclick="open_letter()"**></div>`

    ** 함수 코드

    ```jsx
    function open_letter() {
    		document.getElementsByClassName("letter-close")[0].style.display = 'none'
    		document.getElementsByClassName("letter-open")[0].style.display = 'block'
    }
    ```

- 봉투 div 에 포인터 설정

    ⇒ `cursor: pointer`

# 😊07 - 눈오는 효과 붙이기

- 라이브러리 적용
- 코드 바로 붙여넣기

```html
<script src="https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/snow.js"></script>
```

# 😊08 - 히든메세지 넣어보기

- 함수 새로 만들기  ⇒ go_rtan()
- rtan div 에 onclick 으로 함수만들어서 넣기
- alert 으로 팝업창 띄우기

    ⇒ `alert('앗, 어떻게 찾았지!');`

- 링크 이동하게 만들기

    ⇒ `window.location.href='주소';`

# 😊09 - 공유를 위한 기초 작업

- 카톡이나 sns 등에 공유하기로 링크를 올리면 자동으로 이미지+ 텍스트가 나오는 것을 볼 수 있다.
- 미리 HTML에 넣어놔야 붙음

    ⇒ og 태그

    ```html
    <meta property="og:image" content="이미지 주소">
    <meta property="og:title" content="제목">
    <meta property="og:description" content="설명">
    ```

- favicon 도 해보자 (창을 띄웠을때 뜨는 아이콘)

    ```html
    <link rel="shortcut icon" href="이미지 주소">
    ```

# 😊10 - 배포해보기

- [https://xmas.spartacodingclub.kr/rtxlkNCV1KVr/xmas.html](https://xmas.spartacodingclub.kr/rtxlkNCV1KVr/xmas.html)
