import React, { useState } from 'react'
import './InstructorsSection.css'

function InstructorsSection() {
  const [selectedInstructor, setSelectedInstructor] = useState(null)

  const instructors = [
    {
      id: 1,
      name: '임주리 강사',
      image: '/images/lim-juri.jpg',
      imagePosition: 'center center',
      title: '멘탈디자인 자기사랑코치과정',
      subtitle: '"자기사랑을 가르치는 전문 코치가 되는 완전한 과정"',
      applyLink: 'https://open.kakao.com/o/sRlP4tSf',
      sessions: [
        '1차시 코칭 기초와 자기사랑 코칭 철학',
        '2차시 LOVE 모델과 경청 스킬',
        '3차시 감정 코칭과 저항 다루기',
        '4차시 목표 설정과 행동 변화 코칭',
        '5차시 그룹 코칭 기초',
        '6차시 프로그램 설계와 위기 관리',
        '7차시 코칭 윤리와 비즈니스'
      ],
      career: [
        '마인드가드너 심리센터 대표',
        '20년차 리더십코칭, 멘탈, 관계 코칭'
      ],
      qualifications: [
        '국제코칭연맹(ICF) 인증코치 PCC',
        '국제코칭연맹(ICF) 코리아챕터 교육위원',
        '(사)한국코치협회(KCP)',
        '(사)한국코치협회 인증심사위원',
        '상담심리학 박사과정'
      ]
    },
    {
      id: 2,
      name: '김명재 강사',
      image: '/images/kim-myungjae-new.png',
      imagePosition: 'center 25%',
      imageScale: 1.15,
      title: '명강사를 위한 임팩트 스피치',
      subtitle: '',
      applyLink: 'https://curious-500.com/creator/2264',
      sessions: [
        '1차시 호흡과 발성에서 시작하는 설득의 기술',
        '2차시 스토리텔링으로 신뢰와 공감 구성',
        '3차시 강약과 리듬으로 청중을 사로잡는 재미의 공식',
        '4차시 절대 흔들리지 않는 즉석 스피치의 프레임',
        '5차시 기억에 남는 임팩트 표현법',
        '6차시 오프닝과 마무리 멘트의 매직'
      ],
      career: [
        '아카데미라엘 스피치 강사',
        '2024.11~2025. 애터미 스피치 강사',
        '2023.03~2025 롯데문화센터 스피치 강사',
        '2023.01~2025. 큐리어스 플랫폼 블로그/스피치 강사'
      ],
      qualifications: [
        'AI콘텐츠전문가',
        '성인진로지도사 2급',
        '디지털튜터 1급',
        '성인진로지도사 1급',
        'SNS마케팅관리사 1급',
        '스피치컨설턴트 1급'
      ]
    },
    {
      id: 3,
      name: '김나애 강사',
      image: '/images/kim-naae-new.png',
      imagePosition: 'center 5%',
      title: 'AI로 전시작가 되기',
      subtitle: '',
      applyLink: 'https://curious-500.com/creator/11372',
      sessions: [
        '1차시 내 작품 아이디어 발상하기',
        '2차시 이미지 생성의 기초: 미드저니, 나노바나나',
        '3차시 스토리 구성하기: 프롬프트 설계',
        '4차시 작품 선택하기: 보정과 업스케일링',
        '5차시 작품 완성과 영상으로 전환하기'
      ],
      career: [
        '감각어시스트 Gamgak assist 대표',
        '한국관광공사관광두레 컨설턴트',
        '서울신용보증재단 DX/AX교육 컨설턴트',
        '(주)미리디 미리캔버스/비즈하우스 공인강사',
        '한국교육전문강사협회/AI 브랜딩연구소 전임강사',
        'KDTO 한국디지털튜터협회 교육부 팀장',
        '큐리어스 인증 우수강사',
        '릴리스 Lilys AI 앰버서더'
      ],
      exhibitions: [
        '2025. 12.17~29 따능스쿨 하반기 전시회 / 따능스쿨 / 인사동 신상갤러리',
        '2025. 12.8~13 프리스터 존스 다이어리 / Auvers.io / 서초동 CUBE AI',
        '2025 AI 콘텐츠 페스티벌 / 문화체육관광부 / 서울 코엑스 더플라츠(2층)'
      ],
      programs: [
        '우석대학교 미리캔버스 AI를 활용한 강의자료 생성: AI로 완성하는 프레젠테이션',
        '한국관광공사 두레미엄이머시브 AI 실무활용 기초교육: AI 업무효율화',
        'KDTO 한국디지털튜터협회 <AI로 완성하는 프레젠테이션>',
        '2025 소상공인 상품개선사업을 위한 AI 미리클로 완성하는 콘텐츠제작 심화과정',
        '2025 소상공인 상품개선사업을 위한 AI 미리클로 완성하는 매출형 상세페이지 제작'
      ]
    }
  ]

  const handleCardClick = (instructor) => {
    setSelectedInstructor(instructor)
  }

  const handleCloseModal = () => {
    setSelectedInstructor(null)
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains('instructor-modal-overlay')) {
      handleCloseModal()
    }
  }

  return (
    <>
      <section className="instructors-section" id="instructors">
        <div className="section-header">
          <h2 className="section-title">대한민국 상위 1% 강사진</h2>
        </div>
        <div className="instructors-grid">
          {instructors.map(instructor => (
            <div 
              key={instructor.id} 
              className="instructor-card"
              onClick={() => handleCardClick(instructor)}
            >
              <div className="instructor-image-wrapper">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="instructor-image"
                style={{ 
                  objectPosition: instructor.imagePosition || 'center center',
                  transform: instructor.imageScale ? `scale(${instructor.imageScale})` : 'none'
                }}
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', instructor.image)
                  e.target.src = 'https://via.placeholder.com/400x500/F7F4EB/3D5737?text=' + encodeURIComponent(instructor.name)
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', instructor.image)
                }}
              />
              </div>
              <div className="instructor-info">
                <h3 className="instructor-name">{instructor.name}</h3>
                <p className="instructor-title">{instructor.title}</p>
                <span className="instructor-click-hint">클릭하여 자세히 보기 →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedInstructor && (
        <div 
          className="instructor-modal-overlay"
          onClick={handleModalClick}
        >
          <div className="instructor-modal">
            <button 
              className="instructor-modal-close"
              onClick={handleCloseModal}
              aria-label="닫기"
            >
              ✕
            </button>
            <div className="instructor-modal-content">
              <div className="instructor-modal-image">
                <img 
                  src={selectedInstructor.image} 
                  alt={selectedInstructor.name}
                />
              </div>
              <div className="instructor-modal-info">
                <h2 className="instructor-modal-name">{selectedInstructor.name}</h2>
                <h3 className="instructor-modal-title">{selectedInstructor.title}</h3>
                {selectedInstructor.subtitle && (
                  <p className="instructor-modal-subtitle">{selectedInstructor.subtitle}</p>
                )}
                <div className="instructor-modal-sessions">
                  <h4>프로그램 구성</h4>
                  <ul>
                    {selectedInstructor.sessions.map((session, index) => (
                      <li key={index}>{session}</li>
                    ))}
                  </ul>
                </div>
                {selectedInstructor.career && (
                  <div className="instructor-modal-career">
                    <h4>강의 경력</h4>
                    <ul>
                      {selectedInstructor.career.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedInstructor.qualifications && (
                  <div className="instructor-modal-qualifications">
                    <h4>자격증</h4>
                    <ul>
                      {selectedInstructor.qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedInstructor.exhibitions && (
                  <div className="instructor-modal-exhibitions">
                    <h4>전시회</h4>
                    <ul>
                      {selectedInstructor.exhibitions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedInstructor.programs && (
                  <div className="instructor-modal-programs">
                    <h4>주요 강의/프로그램</h4>
                    <ul>
                      {selectedInstructor.programs.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="instructor-modal-action">
                  <a 
                    href={selectedInstructor.applyLink || 'https://open.kakao.com/o/sRlP4tSf'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instructor-apply-button"
                  >
                    더 알아보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default InstructorsSection
