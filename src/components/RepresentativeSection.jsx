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
                <strong>강사 송미정</strong><br />
                교육학 석사, 문학 박사
              </p>
              <div className="representative-career">
                <h4>주요 경력</h4>
                <ul>
                  <li>전) 입학사정관, 국민대 교수</li>
                  <li>전) 성산효대학원 여성역량개발 책임교수</li>
                  <li>한국디지털콘텐츠능률협회 부회장</li>
                  <li>한국문인협회, 작가회의, 번역가협회 회원</li>
                  <li>현재: (주)부모마인드셋연구소 대표</li>
                  <li>현재: 도서출판 우먼더스토리 대표</li>
                </ul>
              </div>
              <div className="representative-awards-section">
                <h4>수상 내역</h4>
                <div className="awards-list">
                  <div className="award-item">
                    <span className="award-year">2025</span>
                    <span className="award-title">대한민국 인물 대상 (교육산업 부문)</span>
                  </div>
                  <div className="award-item">
                    <span className="award-year">2025</span>
                    <span className="award-title">제13회 대한민국 글로벌파워브랜드 대상 국회의장상 (교육부문)</span>
                  </div>
                  <div className="award-item">
                    <span className="award-year">2024</span>
                    <span className="award-title">자랑스러운 혁신한국인&파워브랜드대상 (교육산업부문)</span>
                  </div>
                  <div className="award-item">
                    <span className="award-year">2024</span>
                    <span className="award-title">대한민국 소비자 선호 브랜드 대상</span>
                  </div>
                </div>
              </div>
              <div className="representative-broadcast">
                <h4>방송 출연</h4>
                <ul>
                  <li>세바시 강연</li>
                  <li>머니투데이 '신영일의 비즈정보플러스'</li>
                </ul>
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
