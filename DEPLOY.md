# 배포 가이드

## 파일 안전성
✅ **모든 파일은 로컬에 저장되어 있습니다!**
- 위치: `/Users/abca/Desktop/cursor/apps/song-mi-jung-website/`
- 제가 꺼져도 파일은 사라지지 않습니다.

## 배포 방법

### 방법 1: Vercel (추천 - 가장 쉬움)

1. **GitHub에 코드 업로드**
   ```bash
   cd /Users/abca/Desktop/cursor/apps/song-mi-jung-website
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   GitHub에서 새 저장소를 만들고:
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - Root Directory: `apps/song-mi-jung-website` 설정
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `dist` (자동 감지됨)
   - "Deploy" 클릭

3. **자동 배포 설정**
   - GitHub에 코드를 푸시하면 자동으로 배포됩니다
   - 실시간 수정 → GitHub 푸시 → 자동 배포

### 방법 2: Netlify

1. GitHub에 코드 업로드 (위와 동일)

2. **Netlify 배포**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build command: `npm run build`
   - Publish directory: `dist`
   - "Deploy site" 클릭

### 방법 3: GitHub Pages

1. `vite.config.js`에 base 경로 추가 필요
2. GitHub Actions로 자동 배포 설정

## 실시간 수정 및 배포 워크플로우

1. **로컬에서 수정**
   ```bash
   npm run dev  # 개발 서버 실행
   ```

2. **변경사항 확인 후 GitHub에 푸시**
   ```bash
   git add .
   git commit -m "변경사항 설명"
   git push
   ```

3. **자동 배포**
   - Vercel/Netlify가 자동으로 감지하여 배포
   - 1-2분 내에 실제 주소에 반영됨

## 도메인 연결

- Vercel/Netlify는 무료 도메인 제공 (예: your-site.vercel.app)
- 커스텀 도메인도 연결 가능 (도메인 구매 후 설정)
