import React from 'react'
import './VideoSection.css'

function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="section-header">
        <h2 className="section-title">입시 코디네이터가 말하는, 자녀 교육에서 전적으로 믿어야 하는 것</h2>
      </div>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gF4g8TekIXw?si=APw4bGhbGjSokIdx"
            title="입시 코디네이터가 말하는, 자녀 교육에서 전적으로 믿어야 하는 것"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
