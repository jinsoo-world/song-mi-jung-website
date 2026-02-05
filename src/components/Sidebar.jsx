import React from 'react'
import './Sidebar.css'

function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const handleNavClick = (e, hash) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // 모바일 메뉴 닫기
    
    const element = document.querySelector(hash)
    if (element) {
      const offset = 80 // 사이드바 높이만큼 오프셋
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="메뉴 열기/닫기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 사이드바 */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          {/* 로고 */}
          <div className="logo">
            <h1>부모마인드셋연구소</h1>
            <p className="logo-subtitle">송미정 대표</p>
          </div>

          {/* 카테고리 */}
          <nav className="nav-section">
            <h2 className="nav-title">메뉴</h2>
            <ul className="nav-list">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>홈</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, '#programs')}>프로그램</a></li>
              <li><a href="#instructors" onClick={(e) => handleNavClick(e, '#instructors')}>강사진</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>회사 소개</a></li>
              <li><a href="#representative" onClick={(e) => handleNavClick(e, '#representative')}>대표자 소개</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>후기</a></li>
            </ul>
          </nav>

          {/* 연락처 정보 */}
          <div className="contact-info">
            <h2 className="nav-title">연락처 정보</h2>
            <div className="contact-item">
              <span className="contact-label">교육 문의</span>
              <a 
                href="https://open.kakao.com/o/sRlP4tSf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-value"
              >
                문의하기
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">제휴 및 광고</span>
              <a href="mailto:" className="contact-value">문의하기</a>
            </div>
          </div>

          {/* 추가 링크 */}
          <div className="footer-links">
            <a href="#delivery">서비스 안내</a>
            <a href="#about">회사 소개</a>
            <a href="#contact">문의하기</a>
          </div>

          {/* 법률 링크 */}
          <div className="legal-links">
            <a href="#privacy">개인정보처리방침</a>
            <span> · </span>
            <a href="#terms">이용약관</a>
          </div>
        </div>

        {/* 모바일 닫기 버튼 */}
        {isMobileMenuOpen && (
          <button 
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            ✕
          </button>
        )}
      </aside>

      {/* 모바일 오버레이 */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
