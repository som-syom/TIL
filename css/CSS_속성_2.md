# CSS 속성2

# 글꼴

---

- h, p 태그 등은 reset.css 를 적용하면 설정들이 사라진다

### font-style

글자의 기울기

- nomal : 기울기 없음(기본값)
- italic : 이탤릭체
- oblique : 기울어진 글자

### font-weight

글자의 두께

- nomal, 400 : 기본 두께 (기본값)
- bold, 700 : 두껍게
- bolder : 상위(부모) 요소보다 더 두껍게
- lighter : 상위(부모) 요소보다 더 얇게
- 100 ~ 900 : 100 단위의 숫자

### font-size

글자의 크기

- 16px : 기본값
- 단위 : px, em, rem 등 단위로 지정
- % : 부모요소의 폰트 크기에 대한 비율
- smaller : 부모요소보다 작은 크기
- larger : 부모요소보다 큰 크기
- xx-small ~ xx-large : 가장 작은 크기 ~ 가장 큰 크기까지, 7단계의 크기를 지정

### line-height

한 줄의 높이, 행간과 유사

- nomal : 브라우저 지정 (기본값) reset 하면 1
- 숫자 : 요소의 글꼴 크기의 배수로 지정 ← 추천 방법
- 단위 : px, ex, rem 등의 단위로 지정
- % : 요소의 글꼴 크기의 비율로 지정

⇒ 수직 정렬로 들어감

### font-family

글꼴 (서체) 지정

- font-family: 글꼴1, "글꼴2", ...글꼴계열;

⇒ 제일 먼저 있는 글꼴1 을 시도하고 없다면 글꼴2 로 시도 ... 없다면 마지막 글꼴계열 중 사용

⇒ 따옴표를 사용하는 경우 : 글꼴이름 내의 띄어쓰기 때문에

- sans-serif 고딕체 계열 (제일 많이 씀)
- serif : 바탕체 계열 (꼭다리 달려있음)
- monospace : 고정너비(가로폭이동등) 글꼴 계열

# 문자

---

### color

글자의 색상

- rgb(0, 0, 0) : 기본값(검정)
- 색상 : 기타 지정 가능한 색상

### text-align

문자의 정렬 방식

- left : 왼쪽정렬 기본값
- right
- center
- justify : 양쪽정렬

### text-decoration

문자의 장식(선)

- none : 기본값
- underline : 밑줄
- overline : 윗줄
- line-through : 중앙 선

### text-indent

문자 첫 줄의 들여쓰기

- 0 : 기본값
- 단위 : px, em, rem (양수 혹은 음수(내어쓰기) 가능)

# 배경

---

### background-color

배경의 색상

- transparent : 기본값
- 색상 : 지정 가능한 색상

### background-image

배경 이미지 삽입

⇒ background-image: url("경로")

- none : 이미지 없음 (기본값)
- url("경로") : 이미지 경로

### background-size

요소의 배경 이미지 크기

- auto : 이미지의 실제 크기 (기본값)
- 단위 : px, ex, rem  등 단위 지정
- cover : 비율은 유지, 요소의 더 넓은 너비(가로 혹은 세로)에 맞춤
- contain : 비율은 유지, 요소의 더 짧은 너비(가로 혹은 세로)에 맞춤

### background-repeat

요소의 배경 이미지 반복

- repeat : 이미지를 수직,수평 반복 (기본값)
- repeat-x : 수평 반복
- repeat-y : 수직 반복
- no-repeat : 반복 없음

### background-position

요소의 배경 이미지 위치

- 0% 0% : 0~100의 값(기본값)
- 방향1 방향2 : top, bottom, left, right, center 방향
- 단위(x축 y축) : px, em, rem 등 단위로 지정( x축:➡️ , y축 :⬇️ )

### background-attachment

요소의 배경 이미지 스크롤 속성

- scroll : 이미지가 요소를 따라서 같이 스크롤 (기본값)
- fixed : 이미지가 뷰포트에 고정, 스크롤 x
- local : 요소내 스크롤 시 이미지가 같이 스크롤

# 배치

---

### position

요소의 위치 지정 **기준**

- static : 기준 없음 기본값
- relative : 요소 자신을 기준
    - 예제

        ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled.png)

        ⇒ 자식2가 자리를 옮겨도 자식3에 영향을 주지않음

- absolute : 위치 상 부모 요소 기준
    - 예제

        ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%201.png)

        ⇒ 부모요소를 참조하기 때문에 자식1,3과 상호작용하지 않음

        ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%202.png)

        ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%203.png)

        ⇒ 정상적으로 부모요소를 참조하기 위해선 부모요소의 position 값이 지정되어야 함!(relative)

        ⇒ 부모 요소의 위치값을 계속 못찾아 올라가면 뷰포트를 기준으로 삼음

- fixed : 뷰포트(브라우저)를 기준
    - 예제

        ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%204.png)

- stiky : 스크롤 영역 기준

⇒ 같이 사용하는 css 요소들 : top, bottom, left, right, z-index

### top, bottom, left, right

요소의 각 방향별 거리 지정

- auto : 브라우저가 계산 (기본값)
- 단위 : px, ex, rem 등 단위로 지정

** 요소 쌓임 순서(Stack order) **

: 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정 (순서대로 적용됨)

1. 요소에 position 속성의 값이 있는 경우 위에 쌓임 (static 제외)
2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
3. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일수록(나중에 쓰여진 것일수록) 위에 쌓임

### z-index

요소의 쌓임 정도를 지정

- auto : 부모 요소와 동일한 쌓임 정도 (기본값)
- 숫자 : 숫자가 높을 수록 위에 쌓임

⇒ 요소 쌓임 순서 두번째 조건이기 때문에 position 값이 없으면 아무리 값을 크게 써도 안올라감

** 요소의 display가 변경됨 **

: position 속성의 값으로 `absolute, fixed`가 지정된 요소는 

display 속성이 자동으로 block으로 변경됨

# 플렉스 (flex) 정렬

---

## <Flex Container>

: flex 를 부여한 부모 요소

### display

Flex Container의 화면 출력(보여짐) 특성

- flex : 블록 요소와 같이 Flex Container 정의
- inline-flex : 인라인 요소와 같이 Flex Container 정의

### flex-direction

주 축을 설정

- row : 행 축 (좌→우) (기본값)
- row-reverse : 행 축 (우→좌)
- column : 열 축 (위→아래)
- column-reverse : 열 축 (아래→위)
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%205.png)

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%206.png)

### flex-wrap

Flex Items 묶음(줄 바꿈) 여부

- nowrap : 묶음(줄바꿈) 없음 (기본값)
- wrap : 여러 줄로 묶음
- wrap-reverse : wrap의 반대 방향으로 묶음
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%207.png)

### justify-content

주 축의 정렬 방법 (수평 정렬)

- flex-start : Flex Items를 시작점으로 정렬 (왼쪽정렬)
- flex-end : Flex Items를 끝점으로 정렬
- center : Flex Items를 가운데 정렬
- space-between : 각 Flex Items 사이를 균등하게 정렬
- space-around : 각 Flex Items 의 외부 여백을 균등하게 정렬
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%208.png)

### align-content

교차 축의 **여러 줄** 정렬 방법 (수직 정렬) 

→ 여러줄에 적용되기 때문에 두줄이상 있어야하기 때문에 flex-wrap 이 wrap 이고, 정렬할 공간이 있어야 해서 제약이 있다

- stretch : Flex Items를 시작점으로 정렬인데 늘려져있음 (기본값)
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정려
- center : Flex Items를 가운데 정렬
- space-between : 각 Flex Items 사이를 균등하게 정렬
- space-around : 각 Flex Items 의 외부 여백을 균등하게 정렬
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%209.png)

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2010.png)

> ** flex 는 줄이 나눠지면 height 값을 최대한 늘린다

### align-items

**교차 축**의 **한 줄** 정렬 방법 (수직정렬)

→ 한줄에만 적용되기때문에 활용도가 적다

- stretch : Flex Items를 시작점으로 정렬인데 늘려져있음 (기본값)
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정려
- center : Flex Items를 가운데 정렬
- baseline : Flex Items 를 각 줄의 문자 기준선에 정렬
- 예제

    <여러줄인 경우>

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2011.png)

    ⇒ 한 줄에 대한 정렬만 됨

    <한줄인 경우>

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2012.png)

## <flex Items>

: flex 부모의 자식 요소

### order

flex item의 순서

- 0 : 순서없음 (기본값)
- 숫자 : 숫자가 작을수록 먼저
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2013.png)

### flex-grow

flex item 의 **증가** 너비 비율

- 0 : 증가 비율 없음 (기본값)
- 숫자: 증가 비율
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2014.png)

⇒ 비어있는 나머지 요소에대한 비율

### flex-shrink

flex item 의 **감소** 너비 비율

- 1 : flex container 너비에 따라 감소 비율 적용 (기본값)
- 숫자 : 감소 비율
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2015.png)

⇒ 컨테이너가 줄어들 때 item의 줄어드는 비율

### flex-basis

flex item 의 공간 배분 전 기본 너비

- auto : 요소의 container 너비 (기본 값)
- 단위 : px, em, rem 등의 단위
- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2016.png)

    ⇒ grow 는 요소의 content 내용을 제외한 남은 영역에 대한 비율임

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2017.png)

# 전환

---

hover, active ...

## transition

요소의 **전환(시작과 끝)** 효과를 지정하는 **단축 속성**

< [transition-property] [transition-duration(필수요소)] [transition-timing-function] [transtition-delay] >

< [속성명] [지속시간(필수요소)] [타이밍함수] [대기시간] >

⇒ 여러 속성을 설정해야할 경우 쉼표( , )로 구분한다

### transition-property

전환 효과를 사용할 **속성 이름**을 지정

- all : 모든 속성에 적용 (기본값)
- 속성이름 : 전환 효과를 사용할 속성 이름 명시 (width, height, ... )

### transition-duration

전환 효과의 **지속시간**을 지정

- 0s : 전환효과 없음 (기본값)
- 지속시간 : 지속시간(s)을 지정

### transition-timing-function

전환 효과의 **타이밍(Easing) 함수**를 지정

- easy : 느리게 - 빠르게 - 느리게 (기본값) = `cubic-bezier(0.25, 0.1, 0.25, 1)`
- linear : 일정하게 = `cubic-bezier(0, 0, 1, 1)`
- ease-in : 느리게 - 빠르게 = `cubic-bezier(0.42, 0. 1, 1)`
- ease-out : 빠르게 - 느리게 = `cubic-bezier(0, 0, 0.58, 1)`
- ease-in-out : 느리게 - 빠르게 - 느리게 = `cubic - bezier(0.42, 0, 0.58, 1)`
- cubic-bazier(n, n, n, n) : 자신만의 값을 정의(n : 0~1)
- steps(n) : n번 분할된 애니메이션

⇒ easing functions 검색해서 함수차트 구경해보자

⇒ mdn 도 참고

⇒ tweenmax easing (라이브러리)

### transition-delay

전환효과가 몇 초 뒤에 시작할지 대기시간을 지정

- 0s : 대기시간 없음 (기본값)
- 지속시간 : 지속시간(s)을 지정

# 변환

---

## transform

요소의 변환 효과

: 변환함수1 변환함수2 변환함수3 ...;

: 원근법 이동 크기 회전 기울임;

### <2D 변환 함수>  : 내용 - 단위

- translate(x, y) : 이동 (x축, y축) - px
- translate(x) , translate(y) : 이동 ( x축 or y축) - px
- scale(x, y) : 크기 (x축, y축) - 없음(배수) → 따로 지정도 가능
- rotate(degree) : 회전(각도) - deg
- skew(x, y)
- skewX(x), skewY(y) : 기울임 (x축, y축) - deg
- matrix(n,n,n,n,n,n) : 2차원 변환 효과 → 직접적으로 잘 쓰지 않음

### <3D 변환 함수> : 내용 - 단위

- translateZ(z) : 이동 (z축) - px
- translate3d(x, y, z)
- scaleZ(z) : 크기 (z축) - px
- scale(x, y, z)
- perspective(n) : 원근법(거리) - px

    ⇒ 원근법 함수는 제일 앞에 작성해야 한다

- rotateX(x) : 회전 (x축) - deg
- rotateY(y)
- rotateZ(z)
- rotate3d(x, y, z)
- matrix3d(n, n, n, n, n, n, n, ...) : (n 16개) 3차원 변환 효과 → 잘안씀

## perspective

하위 요소를 관찰하는 **원근 거리**를 지정

- 단위 : px 등 단위로 지정

< perspective 속성과 함수 차이점 >

                                                                  적용 대상                기준점 설정       
(속성)perspective: 600px                    관찰 대상의 부모   perspective-origin
(함수)transform: perspective(600px)  관찰 대상 자체       transform-origin

- 예제

    ![Untitled](CSS%20%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC2%204710623d25d5480d91826d444d8ef3ad/Untitled%2018.png)

## backfase-visibility

3D 변환으로 회전된 요소의 **뒷면 숨김 여부**

- visible : 뒷면 보임 (기본값)
- hidden : 뒷면 숨김