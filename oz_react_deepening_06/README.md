## 과제 정보


- **주제:** **React Router**를 활용한 어드민 페이지 구축
- **학습 목표:**
    1. 중첩 라우팅(`Outlet`)을 활용하여 계층적인 페이지 구조를 구현한다.
    2. 동적 라우팅(`useParams`)을 활용하여 개별 데이터 페이지를 생성한다.
    3. 예외 처리(`404 page`)를 구현하여 없는 경로 접근 시 적절한 대응을 한다.


## **복습할 개념 체크 리스트**

- [ ]  **React에서의 라우팅 개념**
    - 설명: React에서 페이지 이동을 전환하는 법을 복습합니다.
- [ ]  **`react-router-dom`의 기본 사용법**
    - 설명: react-router-dom의 기본 활용을 복습합니다.
- [ ]  **동적 라우팅(`useParams`)을 통한 데이터 조회**
    - 설명: 특정한 값을 기준으로 페이지를 나누는 방법을 복습합니다.


## 학습할 개념 체크 리스트

- [ ]  **중첩 라우팅(`Outlet`)의 활용 방법**
    
    [Outlet 사용법 학습하기](https://www.notion.so/Outlet-1bacaf5650aa800cb227de96e21c83aa?pvs=21)
    
- [ ]  **예외 처리(`404 page`) 구현 방법**
    
    [React에서 404 페이지 구현하기](https://www.notion.so/React-404-1bacaf5650aa804dadedc8d488229364?pvs=21)

## **문제 요구 사항**

### **1. `App.jsx` (루트 컴포넌트)**

- React Router의 `BrowserRouter`를 설정해야 합니다.
- 메인 페이지`/`에 `Home` 컴포넌트를 렌더링 해야 합니다.
- `/admin`에서 `Dashboard`를 렌더링 해야 합니다. 이는 모든 `/admin` 경로에서 보입니다.
- `/admin`에서 `Dashboard`를 렌더링 해야 합니다.
- `/admin/users`에서 `Users`를 렌더링 해야 합니다.
- `/admin/users/:id`에서 `UsersDetail`를 렌더링 해야 합니다.
- `/admin/settings`에서 `Settings`를 렌더링 해야 합니다.
- `/admin/<잘못된 페이지명>`에서 `NotFound`를 렌더링 해야 합니다.

### **2. `Layout.jsx` (어드민 레이아웃)**

- `/admin` 경로 전체에 보이는 레이아웃 컴포넌트 입니다.
- `Outlet`을 사용하여 모든 라우팅에서 보이게 해야합니다.
- 각 `Link`를 연동하여 알맞는 주소로 전송 해야 합니다.

### **3. `Users.jsx` (사용자 목록 페이지)**

- `/admin/users`에서 모든 사용자 목록을 조회하는 컴포넌트 입니다..
- `user.name`을 클릭하면 `/admin/users/:id`로 이동되어야 합니다.


## **구현 순서**

1️⃣ `react-router-dom`을 설치하고 `BrowserRouter` 설정

2️⃣  `App.jsx` 요구 사항 구현

3️⃣  `Layout.jsx` 요구 사항 구현

4️⃣  `Users.jsx` 요구 사항 구현
