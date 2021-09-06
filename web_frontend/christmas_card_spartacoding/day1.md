# 😊01

- 기본적인 설명

# 😊02

- 브라우저 역할
    1. 요청 → 받아온걸 그려줌
- HTML : 뼈대
- CSS : 꾸미기
- JS : 움직이게 하는 것

# 😊03 - HTML, CSS 기본 내용

## HTML

- HTML : 브라우저가 알아들을 수 있는 문서 형식

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ㅇㅅㅇ</title>
</head>
<body>
    와 신기하다!
</body>
</html>
```

열고 닫아야하는 태그도 있고 열기만 하는 태그도 있다.

- 크게 head 와 body로 나뉘어진다
    - head : 우리눈에 안보이는 부분들 (ex 타이틀, 카카오톡에 공유할때 떠야하는 이미지, 구글 검색엔진이 내 웹페이지를 잘 가져갈수 있도록 만드는 코드들 등)
    - body
        - div (division) : 묶음
        - p (paragraph) : 문단 (한줄이 띄워짐
        - ul (unordered list)
            - li (list) : bullet point
        - h1 : 제목을 나타내는 태그
        - h2 : 소제목
        - h3~6 : 점점 작아지는 제목...
        - span : 특정 글자만 찝고 싶을 때
        - a : 하이퍼링크 태그
        - img : 이미지
        - input : 입력칸
        - button : 버튼
        - textarea : 긴 입력칸

# 😊04 - 간단한 로그인 페이지 만들어보기

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인페이지</title>
</head>
<body>
    <h1>로그인 페이지</h1>
    <p>ID: <input type="text"/></p>
    <p>PW: <input type="text"/></p>
    <button>로그인하기</button>
</body>
</html>
```

# 😊05 - CSS 기초

- 뭔가를 꾸밀려면 지정이 필요하다

    ⇒ 태그에도 이름이 필요하다 (id 나 class)

- 코드를 다 외울 필요는 없다! 그때그때 검색해서 찾아 적용하자

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>로그인페이지</title>
	<style>
		.mytitle {
			color: red;
		}
	</style>
</head>
<body>
	<h1 class="mytitle">로그인 페이지</h1>
	<p>ID: <input type="text"/></p>
	<p>PW: <input type="text"/></p>
	<button>로그인하기</button>
</body>
</html>
```

# 😊06 - 자주 쓰이는 CSS 연습하기

- background에 이미지 넣기

    ```css
    background-image: url('');
    background-size: cover;
    background-position: center;
    ```

    img : url 넣기

    size: cover (전체 다 넣기)

    position: center (가운데로 정렬)

    ⇒ 세개가 세트로 자주 쓰임

- margin : 바깥쪽 여백
- padding : 안쪽 여백

    ⇒ 20px 20px 20px 20px : (시계순서) 상 우 하 좌 순서임

- 가운데로 옮기기

    ⇒ div로 한번에 묶어서 옮기기

    → 양쪽 여백이 동일하다 == 가운데로 온다

    → background-color 로 확인하면 꽉차있음

    → 움직이려면 꽉차지않고 줄여야함 (width조정)

    → margin: auto (자동으로 맞춰줌)

- Ctrl / CMD + K + F : 자동 줄맞춤
- 코드

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>로그인페이지</title>
    	<style>
    		.mytitle {
    			width: 300px;
    			height: 200px;
    			color: white;
    			text-align: center;

    			background-image: url('https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg');
    			background-size: cover;
    			background-position: center;

    			border-radius: 10px;
    			padding-top: 20px;
    		}
    		.wrap {
    			width: 300px;
    			margin: auto;
    		}
    	</style>
    </head>
    <body>
    	<div class="wrap">
    		<div class="mytitle">
    			<h1>로그인 페이지</h1>
    			<h5>아이디, 비밀번호를 입력해주세요</h5>
    		</div>
    		<p>ID: <input type="text"/></p>
    		<p>PW: <input type="text"/></p>
    		<button>로그인하기</button>
    	</div>
    </body>
    </html>
    ```

# 😊07 - 폰트 입히기

- 입히는 방법
    1. [https://fonts.google.com/?subset=korean](https://fonts.google.com/?subset=korean) 접속
    2. 마음에 드는 폰트 선택
    3. ++ Select this style 선택

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b498773a-3ccd-4e75-99a2-9ea1422aef02/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b498773a-3ccd-4e75-99a2-9ea1422aef02/Untitled.png)

    4. <link> 내의 코드 복사하여 head 의 title 아래에 붙여넣기

    4-1. CSS rules to specify families 의 코드를 복사하여

    css 나 style 내에 

    ```css
    * {
    붙여넣기
    }
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/acebf98f-4a2b-41c6-94a5-3b0cf4d725b5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/acebf98f-4a2b-41c6-94a5-3b0cf4d725b5/Untitled.png)

    5. 새로고침

# 😊08 - 과제 제출하기

- 완성이미지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c06388b-87a2-4202-bcd7-0465e2f348b7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c06388b-87a2-4202-bcd7-0465e2f348b7/Untitled.png)

- 코드

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>로그인페이지</title>
    	<link rel="preconnect" href="https://fonts.gstatic.com">
    	<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap" rel="stylesheet">
    	<style>
    		* {
    			font-family: 'Do Hyeon', sans-serif;
    		}
    		.mytitle {
    			width: 300px;
    			height: 200px;
    			color: white;
    			text-align: center;

    			background-image: url('https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg');
    			background-size: cover;
    			background-position: center;

    			border-radius: 10px;
    			padding-top: 20px;
    		}
    		.wrap {
    			width: 300px;
    			margin: auto;
    		}
    		.mybtn {
    			width: 300px;
    			height: 50px;
    			background-color: brown;
    			border-radius: 10px;
    			color: white;
    		}
    	</style>
    </head>
    <body>
    	<div class="wrap">
    		<div class="mytitle">
    			<h1>로그인 페이지</h1>
    			<h5>아이디, 비밀번호를 입력해주세요</h5>
    		</div>
    		<p>ID: <input type="text"/></p>
    		<p>PW: <input type="text"/></p>
    		<button class="mybtn">로그인하기</button>
    	</div>
    </body>
    </html>
    ```
