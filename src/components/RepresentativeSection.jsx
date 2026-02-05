import React from 'react'
import './RepresentativeSection.css'
import './VideoSection.css'

function RepresentativeSection() {
  return (
    <section className="representative-section" id="representative">
      <div className="section-header">
        <h2 className="section-title">대표자 소개</h2>
      </div>
      <div className="representative-content">
        <div className="representative-wrapper">
          <div className="representative-image-section">
            <img 
              src="/images/song-mi-jung-profile.jpg" 
              alt="송미정 대표" 
              className="representative-main-image"
              onError={(e) => {
                console.error('Representative image failed to load:', e.target.src)
                // 대체 이미지 시도
                if (e.target.src.includes('song-mi-jung-profile')) {
                  e.target.src = '/images/song-mi-jung.jpg'
                }
              }}
              onLoad={() => {
                console.log('Representative image loaded successfully')
              }}
            />
            <div className="representative-awards">
              <img 
                src="/images/IMG_6079.PNG" 
                alt="대한민국 소비자 선호 브랜드 대상" 
                className="award-badge"
              />
            </div>
          </div>
          <div className="representative-info">
            <h3 className="representative-name">송미정 대표</h3>
            <div className="representative-details">
              <p>
                송미정 대표는 교육학 석사, 국문학 박사 출신으로 19년간 입시 컨설팅과 부모교육을 연구해온 전문가입니다.
              </p>
              <div className="representative-career">
                <h4>주요 경력</h4>
                <ul>
                  <li>국비 지원 1호 입학사정관</li>
                  <li>교양학부 교수</li>
                  <li>영재교육센터 언어 연구원</li>
                  <li>현재: 부모마인드셋연구소 소장</li>
                  <li>현재: 도서출판 우먼더스토리 대표</li>
                </ul>
              </div>
              <div className="representative-awards-section">
                <h4>수상 내역</h4>
                <div className="awards-list">
                  <div className="award-item">
                    <span className="award-year">2025</span>
                    <span className="award-title">대한민국 인물 대상</span>
                  </div>
                  <div className="award-item">
                    <span className="award-year">2024</span>
                    <span className="award-title">대한민국 소비자 선호 브랜드 대상</span>
                  </div>
                </div>
              </div>
              <p className="representative-vision">
                부모·자녀·중장년을 아우르는 토털브랜딩을 실천합니다.
              </p>
              <a 
                href="https://curious-500.com/creator/1231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="representative-link"
              >
                자세한 프로필 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepresentativeSection
