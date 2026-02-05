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
      sessions: [
        '1차시 코칭 기초와 자기사랑 코칭 철학',
        '2차시 LOVE 모델과 경청 스킬',
        '3차시 감정 코칭과 저항 다루기',
        '4차시 목표 설정과 행동 변화 코칭',
        '5차시 그룹 코칭 기초',
        '6차시 프로그램 설계와 위기 관리',
        '7차시 코칭 윤리와 비즈니스'
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
      sessions: [
        '1차시 호흡과 발성에서 시작하는 설득의 기술',
        '2차시 스토리텔링으로 신뢰와 공감 구성',
        '3차시 강약과 리듬으로 청중을 사로잡는 재미의 공식',
        '4차시 절대 흔들리지 않는 즉석 스피치의 프레임',
        '5차시 기억에 남는 임팩트 표현법',
        '6차시 오프닝과 마무리 멘트의 매직'
      ]
    },
    {
      id: 3,
      name: '김나애 강사',
      image: '/images/kim-naae-new.png',
      imagePosition: 'center 5%',
      title: 'AI로 전시작가 되기',
      subtitle: '',
      sessions: [
        '1차시 내 작품 아이디어 발상하기',
        '2차시 이미지 생성의 기초: 미드저니, 나노바나나',
        '3차시 스토리 구성하기: 프롬프트 설계',
        '4차시 작품 선택하기: 보정과 업스케일링',
        '5차시 작품 완성과 영상으로 전환하기'
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
                <div className="instructor-modal-action">
                  <a 
                    href="https://open.kakao.com/o/sRlP4tSf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instructor-apply-button"
                  >
                    신청하기
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
