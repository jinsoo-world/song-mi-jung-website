# 송미정 대표님 홈페이지

프레이머 템플릿 기반의 우아하고 현대적인 홈페이지입니다.

## 디자인 특징

- **2단 레이아웃**: 왼쪽 고정 사이드바 + 오른쪽 메인 콘텐츠 영역
- **색상 팔레트**: 크림색 배경 (#F7F4EB) + 진한 녹색 악센트 (#3D5737)
- **타이포그래피**: 우아한 세리프 폰트 (Playfair Display) + 깔끔한 산세리프 폰트 (Pretendard, Inter)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 주요 섹션

1. **사이드바**: 로고, 네비게이션 메뉴, 연락처 정보
2. **히어로 섹션**: 주요 메시지와 CTA 버튼
3. **서비스 섹션**: 주요 서비스/프로젝트 카드 그리드
4. **고객 후기 섹션**: 클라이언트 추천사

## 설치 및 실행

```bash
cd apps/song-mi-jung-website
npm install
npm run dev
```

개발 서버가 `http://localhost:3001`에서 실행됩니다.

## 빌드

```bash
npm run build
```

## 커스터마이징

- **연락처 정보**: `src/components/Sidebar.jsx`에서 수정
- **서비스 데이터**: `src/components/ServicesSection.jsx`에서 수정
- **고객 후기**: `src/components/TestimonialsSection.jsx`에서 수정
- **색상**: `src/index.css`의 CSS 변수에서 수정
- **텍스트 내용**: 각 컴포넌트 파일에서 수정
