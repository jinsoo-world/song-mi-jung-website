import React, { useState } from 'react'
import './ServicesSection.css'
import ProgramDetail from './ProgramDetail'

function ServicesSection() {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 1,
      title: '글쓰기 출판과정',
      price: '499,000원',
      link: 'https://curious-500.com/study/3281',
      featured: false,
      icon: '✍️',
      description: '글쓰기와 출판의 전 과정을 체계적으로 배우는 과정입니다. 초보자부터 전문가까지 누구나 참여할 수 있습니다.',
      duration: '8주',
      instructor: '송미정 대표',
      curriculum: [
        '1주차: 글쓰기 기초와 아이디어 발굴',
        '2주차: 구조화된 글쓰기 기법',
        '3주차: 출판 기획과 원고 작성',
        '4주차: 편집과 교정',
        '5주차: 출판 프로세스 이해',
        '6주차: 마케팅과 홍보 전략',
        '7주차: 실제 출판 사례 분석',
        '8주차: 최종 프로젝트 발표'
      ]
    },
    {
      id: 2,
      title: '북 퍼스널브랜딩 과정',
      price: '1,990,000원',
      link: '#',
      featured: true,
      icon: '🎯',
      description: '책을 통한 개인 브랜딩 전략을 수립하고 실행하는 고급 과정입니다. 전문가 수준의 브랜딩 역량을 기를 수 있습니다.',
      duration: '12주',
      instructor: '송미정 대표',
      curriculum: [
        '1-2주차: 브랜딩 전략 수립',
        '3-4주차: 콘텐츠 기획과 개발',
        '5-6주차: 책 출간 전략',
        '7-8주차: 온라인/오프라인 마케팅',
        '9-10주차: 미디어 활용과 PR',
        '11-12주차: 브랜드 확장과 지속성'
      ]
    },
    {
      id: 3,
      title: '종이책 출판과정',
      price: '999,000원',
      link: '#',
      featured: false,
      icon: '📚',
      description: '종이책 출판의 전 과정을 실전적으로 배우는 과정입니다. 실제 출간까지의 모든 단계를 경험할 수 있습니다.',
      duration: '10주',
      instructor: '송미정 대표',
      curriculum: [
        '1주차: 출판 기획과 시장 분석',
        '2주차: 원고 작성과 편집',
        '3주차: 디자인과 레이아웃',
        '4주차: 인쇄와 제본',
        '5주차: ISBN과 출판 등록',
        '6주차: 유통과 판매 전략',
        '7주차: 온라인 서점 등록',
        '8주차: 오프라인 서점 진출',
        '9주차: 마케팅과 홍보',
        '10주차: 출간 기념과 후속 관리'
      ]
    }
  ]

  const handleCardClick = (e, program) => {
    e.preventDefault()
    setSelectedProgram(program)
  }

  const handleCloseDetail = () => {
    setSelectedProgram(null)
  }

  if (selectedProgram) {
    return <ProgramDetail program={selectedProgram} onClose={handleCloseDetail} />
  }

  return (
    <section className="services-section" id="programs">
      {/* 카드 형태 교육과정 섹션 */}
      <div className="program-cards-section">
        <div className="program-cards-header">
          <h2 className="program-cards-title">대표 교육과정</h2>
          <a href="#all-programs" className="program-cards-link">전체 과정 보기 &gt;</a>
        </div>
        <div className="program-cards-grid">
          {programs.map(program => (
            <a
              key={program.id}
              href="#"
              onClick={(e) => handleCardClick(e, program)}
              className="program-card-item"
            >
              {program.featured && (
                <div className="program-card-badge">특가</div>
              )}
              <div className="program-card-image-wrapper">
                <div className="program-card-image">
                  <div className="program-card-image-placeholder">
                    {program.icon}
                  </div>
                </div>
              </div>
              <div className="program-card-info">
                <h3 className="program-card-name">{program.title}</h3>
                <div className="program-card-price">
                  <span className="program-card-price-label">참가비</span>
                  <span className="program-card-price-value">{program.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
