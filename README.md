# 할일앱 백엔드 (Node.js + Express + MongoDB)

## 📦 기술 스택
- **Node.js** v24
- **Express** — 웹 서버 프레임워크
- **Mongoose** — MongoDB ODM
- **dotenv** — 환경변수 관리
- **cors** — CORS 미들웨어
- **nodemon** (dev) — 코드 변경 시 자동 재시작

## 🚀 실행 방법

### 1. MongoDB 연결 문자열 준비
[MongoDB Atlas](https://cloud.mongodb.com) (무료) 가입 → 클러스터 생성 → `Connect` → `Drivers` → 연결 문자열 복사

또는 로컬 MongoDB: `mongodb://localhost:27017/todoapp`

### 2. .env 파일 작성
```
MONGO_URI=여기에_복사한_연결_문자열
PORT=5000
```

### 3. 서버 실행
```powershell
npm run dev    # 개발 모드 (코드 변경 시 자동 재시작)
npm start      # 일반 실행
```

성공 시 콘솔에:
```
✅ MongoDB connected
✅ Server running on http://localhost:5000
```

### 4. 동작 확인
브라우저에서 http://localhost:5000 접속 → JSON 응답 확인

## 📁 폴더 구조
```
todo_backend/
├── index.js          서버 진입점
├── package.json      의존성/스크립트
├── .env              환경변수 (Git 제외)
├── .env.example      환경변수 템플릿
└── .gitignore
```

## 🔜 다음 단계
- Todo 모델(스키마) 정의
- CRUD API 엔드포인트 (`GET/POST/PATCH/DELETE /api/todos`)
- 프론트엔드 연결
