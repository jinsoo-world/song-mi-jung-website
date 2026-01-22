import React from 'react'
import './AboutSection.css'

import VideoIntroSection from './VideoIntroSection'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <h2 className="section-title">회사 소개</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <VideoIntroSection />
          <h3 className="about-company-name">부모마인드셋연구소</h3>
          <p className="about-description">
            20년 이상 교육 현장에서 활동한 입시 및 부모교육 전문가 송미정 대표가 설립한 교육 전문 기업입니다.
          </p>
          <p className="about-philosophy">
            본 연구소는 <strong>'부모의 생각이 자녀의 미래를 만든다'</strong>는 철학 아래, 
            부모의 마인드셋 전환을 통해 자녀의 잠재력과 주도성을 키우는 교육을 실현하고자 합니다.
          </p>
          <div className="about-services">
            <p>의대 및 상위권 대학 입시 컨설팅, 부모교육 특강, 독서모임 운영, 출판지원 등 다방면의 교육 콘텐츠를 제공합니다.</p>
            <p>국비 1호 입학사정관 출신의 전문성과 풍부한 컨설팅 경험을 바탕으로 맞춤형 진로·진학 지도를 실시합니다.</p>
            <p>자회사인 도서출판 우먼더스토리를 통해 중장년 여성의 자기표현과 출판을 지원하는 다양한 프로그램도 운영하고 있습니다.</p>
            <p>미래사회에 필요한 글로벌 인재 양성과 부모역량 강화에 기여하는 교육 플랫폼으로서의 역할을 다하고 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
