import React from 'react'
import './ProgramDetail.css'

function ProgramDetail({ program, onClose }) {
  return (
    <div className="program-detail-overlay" onClick={onClose}>
      <div className="program-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="program-detail-close" onClick={onClose}>✕</button>
        
        <div className="program-detail-header">
          <div className="program-detail-badge">
            {program.featured && <span className="featured-badge">추천</span>}
            <span className="program-detail-icon">{program.icon}</span>
          </div>
          <h1 className="program-detail-title">{program.title}</h1>
          <div className="program-detail-meta">
            <span className="program-detail-price">참가비: {program.price}</span>
            <span className="program-detail-duration">기간: {program.duration}</span>
            <span className="program-detail-instructor">강사: {program.instructor}</span>
          </div>
        </div>

        <div className="program-detail-content">
          <div className="program-detail-section">
            <h2 className="program-detail-section-title">과정 소개</h2>
            <p className="program-detail-description">{program.description}</p>
          </div>

          <div className="program-detail-section">
            <h2 className="program-detail-section-title">커리큘럼</h2>
            <ul className="program-detail-curriculum">
              {program.curriculum.map((item, index) => (
                <li key={index} className="curriculum-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="program-detail-actions">
            <a 
              href={program.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="program-detail-button primary"
            >
              신청하기
            </a>
            <button 
              className="program-detail-button secondary"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetail
