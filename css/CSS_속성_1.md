# 너비(width, height)

---

- 박스모델에서 사용
- auto (기본값) : 브라우저가 자동으로 너비를 계산
- 단위 : px, em, vw 등 단위로 지정

### Inline 요소 (span ...)

- 포함된 콘텐츠 크기만큼 자동으로 줄어듬 (auto)
- width, height 를 지정할 수 없음

### Block 요소 (div ...)

- 가로 : 부모요소의 크기만큼 자동으로 늘어남
- 세로 : 포함한 콘텐츠 크기만큼 자동으로 줄어듬

## max-width, max-height

- 요소가 커질 수 있는 최대 가로/세로 너비
- none : 최대 너비 제한 없음 (기본값)
- 단위 : px, em, vw 등 단위로 지정
- auto : 여기선 크게 중요하게 쓰이지 않음

## min-width, min-height

- 요소가 작아질 수 있는 최소 가로/세로 너비
- 0 : 최소 너비 제한 없음 (기본값)
- 단위 : px, em, vw 등 단위로 지정
- auto : 여기선 크게 중요하게 쓰이지 않음

---

# 단위

- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기
- rem : 루트 요소(html)의 글꼴 크기 (루트 : 최상위)
- vw : 뷰포트 가로 너비의 백분율 (1 이라면 1/100)
- vh : 뷰포트 세로 너비의 백분율

기본 폰트 사이즈 : 16px

---

# margin

요소의 외부 여백(공간)을 지정하는 단축 속성

- 음수를 사용할 수 있음
- 0 : 외부 여백 없음
- auto : 브라우저가 여백을 계산 ⇒ 가운데 정렬할때 쓰임
- 단위 : px, em, vw 등 단위로 지정
- % : 부모 요소의 가로 너비에 대한 비율로 지정 (잘 사용안함)

> margin-bottom, margin-top, margin-left, margin-right 으로 사용가능

> 10px : (상하좌우 다 적용)

> 10px 20px :  (top, bottom) (left right) ⇒ 세로 가로

> 10px 20px 30px : (top) (left right) (bottom) ⇒ 상 중 하

> 10px 20px 30px 40px : (top, right, bottom, left) 순으로 작성 ⇒ 시계방향

- 음수를 넣을 경우 겹쳐서 나온다 (외부여백이 줄어든다)

---

# padding

요소의 내부 여백(공간)을 지정하는 단축 속성 (요소의 크기가 커짐)

- 0 : 내부 여백이 없음
- 단위 : px, em, vm 등 단위로 지정
- % : 부모 요소의 가로 너비에 대한 비율로 지정

> padding-bottom, padding-top, padding-left, padding-right 으로 사용가능

> 10px : (상하좌우 다 적용)

> 10px 20px :  (top, bottom) (left right) ⇒ 세로 가로

> 10px 20px 30px : (top) (left right) (bottom) ⇒ 상 중 하

> 10px 20px 30px 40px : (top, right, bottom, left) 순으로 작성 ⇒ 시계방향

---

# border

---

요소의 테두리 선을 지정하는 단축 속성 (요소의 크기가 커짐)

- 선-두께(border-width)  선-종류(border-style)  선-색상(border-color)

    : 10px solid black;

- 기본값 : medium none(선이 안나옴) black

### border-width

- medium(중간 두께), thin(얇음), thick(두꺼움) : 으로 표시할수 있지만 추천하지 않음
- 단위 : px em % 등으로 표시
- 단축 속성으로 표시 가능
    - 1px → 상하좌우
    - 1px 2px → 상하 좌우
    - 1px 2px 3px → 상 좌우 하
    - 1px 2px 3px 4px → 상 우 하 좌

### border-style

- none : 선 없음 (기본값)
- solid : 실선 (일반 선)
- dashed : 파선 (- - - - -)
- 그외
    - dotted : 점선(. . . . .)
    - double : 두줄선(=====)
    - groove : 홈이 파진 모양
    - ridge : (groove 와 반대로) 솟은 모양
    - inset : 요소 전체가 들어간 모양
    - outset : 요소 전체가 나온 모양
- 단축속성으로 표시 가능 [(클릭)](https://www.notion.so/CSS-4a62b9faf5bc4438b31e0c215030c0a4)

### border-color

요소 테두리 선의 색상을 지정하는 단축 속성

- black : 기본값
- 색상 : 선의 색상
- transparent : 투명
- 단축속성으로 표시 가능

### 색상 표현 방법

1. 색상 이름 : 브라우저에 제공하는 색상 이름 (red, tomato, royalblue ...)
2. Hex 색상코드 : 16진수 색상 (#000, #FFFFFFF ...)
3. RGB : 빛의 삼원색 (rgb(255, 255, 255) ... ) → rgb 함수
4. RGBA : 빛의 삼원색 + 투명도 (rgba(0, 0, 0, 0.5) ...)
5. HSL : 색상, 채도, 명도 (hsl(120, 100%, 50%) ....)
6. HSLA : 색상, 채도, 명도 + 투명도 (hsla(120, 200%, 50%, 0.3) ...)

### border-방향 / border-방향-속성

요소의 테두리 선을 지정하는 기타 속성들

ex ) border-top, border-top-width, border-top-style, border-top-color ...

---

# border-radius

요소의 모서리를 둥글게 깎음 → border-radius : 10px;

- 0 : 둥글게 없음
- 단위 : px, em, vm 등 ⇒ 반지름 크기
- 단축속성으로 표시 가능
    - 왼쪽 위 부터 시계방향으로 표시

---

# box-sizing

요소의 크기 계산 기준을 지정 → box-sizing: border-box;

- content-box : 요소 내용(content)으로 크기 계산 (기본값)
- border-box : 요소의 내용 + padding + border 로 크기 계산

⇒ 패딩이나 테두리를 넣다보면 원래 사이즈보다 커지는데 이를 사이즈에 맞추고싶을 때 사용

---

# overflow

요소의 크기 이상으로 내용이 넘쳤을때, 보여짐을 제어하는 단축 속성

- visible : 넘친 내용을 그대로 보여줌
- hidden : 넘친 내용을 잘라냄
- scroll : 넘친 내용을 잘라냄, 기본적으로 스크롤바 생성
- auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성

⇒ 부모 요소에서 설정한다

- overflow-x : x축으로 넘치는 것만 체크
- overflow-y : y축으로 넘치는 것만 체크

---

# display

요소의 화면 출력(보여짐) 특성

=== 각 요소에 이미 지정되어 있는 값

- block : 상자(레이아웃) 요소
- inline : 글자 요소
- inline-box : 글자 + 상자 요소
- 기타 : table, tabe-row, table-cell ...

=== 따로 지정해서 사용하는 값

- flex : 플렉스 박스 (1차원 레이아웃)
- grid : 그리드 (2차원 레이아웃)
- none : 보여짐 없음, 화면에서 사라짐

---

# opacity

요소 투명도

- 0 : 완전한 투명
- 1 : 보임 (기본값)
