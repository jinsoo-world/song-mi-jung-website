import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <h2 className="footer-title">
          엄마가 행복해야<br />
          자녀도 행복합니다
        </h2>
      </div>
      <div className="footer-content">
        <div className="footer-company">
          <h3 className="footer-company-name">(주)부모마인드셋연구소</h3>
          <p className="footer-info">대표자: 송미정</p>
          <p className="footer-info">사업자등록번호: 137-88-02986</p>
          <p className="footer-info">주소: 서울특별시 강남구 테헤란로82길 15 (디아이타워, 617)</p>
          <p className="footer-info">주요 사업: 교육서비스업, 상담서비스, 도서출판, 동영상 강의 제공</p>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-item">
            <span className="footer-contact-label">교육 문의 :</span>
            <a href="mailto:" className="footer-contact-link">문의하기</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">제휴 및 광고 문의 :</span>
            <a href="mailto:" className="footer-contact-link">문의하기</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 부모마인드셋연구소. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
