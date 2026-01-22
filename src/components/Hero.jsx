import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <div className="hero-content">
          <div className="hero-badge">부모마인드셋연구소</div>
          <h2 className="hero-title">
            자녀 교육의 핵심은<br />
            부모의 사고 변화에 있습니다
          </h2>
          <p className="hero-description">
            20년 이상 교육 현장에서 활동한 입시 및 부모교육 전문가 송미정 대표가 설립한 교육 전문 기업입니다.
          </p>
          <div className="hero-actions">
            <a 
              href="https://youtu.be/gF4g8TekIXw?si=APw4bGhbGjSokIdx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-cta"
            >
              영상 보기
            </a>
            <a href="#programs" className="hero-cta-secondary">
              프로그램 알아보기
            </a>
          </div>
        </div>
        <div className="hero-decoration">
          {/* 장식용 일러스트레이션 공간 */}
        </div>
      </div>
    </section>
  )
}

export default Hero
