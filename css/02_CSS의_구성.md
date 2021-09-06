## 2. CSS의 구성

### 2-1. 기본 구성

```css
span {
  color : red;
  }
```

- span: selector(선택자)
- color: property
- red: value

### 2-2. style을 HTML페이지에 적용하는 방법

- inline > internal > external 의 우선순위 순서로 적용
    1. **inline**
    HTML태그 안에다가 적용다른 CSS파일에 적용한 것 보다 가장 먼저 적용

        ```html
        <body>
         <span style"color:red;"> HELLO World! </span>
        </body>
        ```

    2. **internal**
    style 태그로 지정구조와 스타일이 섞이게 되므로 유지보수의 어려움별도의 CSS파일을 관리하지 않아도 되며 서버에 CSS파일을 부르기 위해 별도의 브라우저가 요청을 보낼 필요가 없음

        ```html
        <!DOCTYPE html>
        <html>
        <head>
        	<meta charset="utf-8" />
        	<title>World !</title>
        	<style>
        		span {
        			color :red;
        		}
        	</style>
        </head>

        <body>
        	<span> HELLO World !</span>
        </body>
        </html>
        ```

    3. **external**
    외부파일(.css)로 지정

        ```html
        <link rel="stylesheet" type="text/css" href="main.css" />
        ```

### 2-3. 상속

- 상위에 설정된 스타일을 하위에서도 사용
- border 나 padding 같은건 모두 다 적용되지 않고 상위 하나에만 적용이 됨
