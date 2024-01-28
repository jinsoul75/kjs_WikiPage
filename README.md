# 코딩 허브 프론트엔드 개발자 지원자용 실무 과제
---
## 해당 프로젝트는 Next.js의 Route Handlers와 JSON-SERVER에서 제공해주는 API 기반으로 만들어졌습니다.
### 프로젝트 실행 방법
1. 패키지를 다운 받습니다. <br/> `npm install`
2. json-server를 전역으로 설치 해줍니다. </br> `npm i -g json-server`
2. json-server를 실행합니다. </br> `npx json-server --port 9999 --watch db.json`
3. 프로젝트를 실행합니다. <br/> `npm run dev`

<strong>(참고)</strong> 프로젝트와 json-server의 포트번호를 변경해야한다면 `src/constants/` 폴더의 `BASE_API_URL` 또는 `JSON_SERVER_URL`의 주소를 변경해주세요.

---
## 요구사항
- 페이지는 텍스트로 되어있는 제목과 본문으로 구성
- 처음페이지는 여러개의 위키페이지 제목이 목록
- 처음페이지에 목록으로 보여지는 제목의 개수는 5개이며 그이상으로 넘어가면 페이지를 구분해서 표시
- 위키페이지 제목을 클릭하면 제목과 본문 볼 수 있음
- 위키페이지 본문에 다른 위키페이지 제목이 있으면 자동으로 링크가 걸리고 클릭하면 해당 위키페이지로 이동
- 메인 페이지에서 추가 버튼을 누르면 새로 입력할 수 있는 창 나오고 제목과 내용 입력 가능
- 위키 내용 페이지에는 수정 버튼, 수정 누르면 내용을 수정해서 저장

## 기능 목록
- 메인 페이지
1. 게시글 제목을 5개씩 목록화한다.
2. 게시글 목록은 페이지네이션으로 구성한다.
3. 각 게시글은 상세페이지로 이동할 수 있는 링크를 가지고 있다.
4. 추가 버튼 클릭시 게시글 작성 페이지로 넘어갈 수 있다.


- 상세페이지
1. 클릭한 게시글의 제목과 상세글을 보여준다.
2. 본문에 다른 위키페이지의 제목이 있으면 자동으로 링크가 걸리고 클릭하면 해당 위키페이지로 이동한다.
3. 수정 버튼으로 해당 게시글 수정 페이지로 넘어갈 수 있다.
4. 수정, 추가시 상세페이지에선 수정, 추가된 데이터를 보여준다.

- 작성페이지
1. 새로운 작성글인지 수정글인지에 따라 input의 value상태가 달라진다.
2. validation 체크 => 제목, 내용중 하나라도 빈 값이 있으면 경고창이 뜬다.
3. 저장 버튼을 누르면 저장하시겠습니까? 알람창이 뜬다.
4. 알람창에서 취소를 누르면 알람창이 꺼진다.
5. 알람창에서 저장을 누르면 상세페이지로 이동한다.


