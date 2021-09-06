## 1. **HTML이란?**

- HyperText Markup Language의 약자
- 다양한 정보를 쉽게 보여주게 하기 위해서 포맷을 생성 → Markup 언어
- 정보를 쉽게 표현하기 위해서 잘 구조화한 언어

### 1-1. **기본 형태**

- html
- head //화면에 보여지기 위한 추가적인 정보(메타정보)를 담고 있는 부분
- body //화면에 보여지는 부분

### 1-2. **태그, 속성과 값**

```html
<a href = "www.naver.com">네이버로 갑니다</a>
```

- <a ~> : anchor 태그, 링크를 표시
- 네이버로 갑니다: 화면에 표시되는 부분

### 1-3. **HTML tag의 종류**

태그는 그 의미에 맞춰서 사용해야 한다.

- 링크
- 이미지
- 목록
- 제목

### 1-4. 리스트

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet"
        href="index.css" />
    </head>
    <body>
        <div>
			<h1>안녕하세요 과일있어요</h1>
			<ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
			</ul>
		</div>
        <script src="index.js"></script>
    </body>
</html>
```

- 모든 명령어는 <> 빼고 입력후 탭 이나 엔터누르면 됨
- ul : 리스트
- li * 4 입력후 엔터누르면 4개 자동생성
- 

## 2. 레이아웃

### 2-1. 레이아웃의 태그

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1eb9a1ea-ff69-4cca-b2ca-bbb30e173413/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1eb9a1ea-ff69-4cca-b2ca-bbb30e173413/Untitled.png)

→ Html5 layout

→ex

```html
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <header>header</header>
  <div id="container">
    <nav><ul>
      <li>home</li>
      <li>news</li>
      <li>sports</li>
    </ul></nav>
    <aside><ul>
      <li>로그아웃</li>
      <li>오늘의 날씨</li>
      <li>운세</li>
    </ul></aside>
  </div>
  <footer>footer</footer>
</body>
</html>
```

### 2-2. HTML 구조화 설계

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f364ef0b-8775-45b3-8b24-852198b68f63/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f364ef0b-8775-45b3-8b24-852198b68f63/Untitled.png)

→ 계층적 구조

- 예제

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Something</title>
            <link rel="stylesheet"
            href="index.css" />
        </head>
        <body>
            <header>
                <h1>Company Name</h1>
                <img src="..." alt="logo">
            </header>

            <section>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Home2</li>
                        <li>About</li>
                        <li>map</li>
                    </ul>
                </nav>

                <section>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <button></button>
                </section>

                <section>
                    <ul>
                        <li>AboutUs</li>
                        <li><h3>What we do</h3>
                            <div>aaaaaaaaaaaaaaaa</div></li>
                        <li>contact us</li>
                    </ul>
                </section>
            </section>

            <footer></footer>
            <script src="index.js"></script>
        </body>
    </html>
    ```

## 3. ID와 Class

### **ID**

- 고유한 속성으로 한 HTML문서에 하나만 사용 가능
- 고유한 ID값이 있으면 하나하나에 특별한 제어를 할 수 있으며 검색에도 용이
- (하나이상 쓴다고 오류가 생기진 않음)

### **Class**

- 하나의 HTML문서안에 중복해서 사용 가능
- 홈페이지 전체적인 스타일을 일관성 있게 지정하기 위해서는 class의 사용이 필수적

    ```html
    <section>
        <ul>
          <li class="our_description">AboutUs</li>
          <li class="our_description"><h3>What we do</h3>
            <div>aaaaaaaaaaaaaaaa</div></li>
          <li class="our_description">contact us</li>
        </ul>
    </section>
    ```
