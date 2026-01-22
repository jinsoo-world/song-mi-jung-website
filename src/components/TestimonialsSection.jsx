import React, { useState } from 'react'
import './TestimonialsSection.css'

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      title: '어머니 인생의 단편을 책으로 남길 수 있어서',
      text: '송미정 대표님과 우먼더스토리 덕분에 어머니 인생의 단편을 책으로 남길 수 있어서 너무나 감사합니다. 여러 가지 정보도 접하고 배울 수 있어서 더욱 유익했습니다 ~ 혼자서는 힘들었을 여러 작업이나 과정을 이끌어서 완성해 주는 이 어울림을 큐리어스 여러분들께 강추합니다 ~ 감사합니다',
      nickname: '성공한알밤',
      rating: 5.0
    },
    {
      id: 2,
      title: '내 이름으로 그림에세이를 출판할 수 있었습니다',
      text: '지난 겨울 인생에서 내 이름으로 그림에세이를 출판할 생각을 못했어요. 대표님 덕분에 출판할 수 있었습니다. 지인에게 추천해서 그분도 이번에 예쁜 책을 출간하였어요. 꿈을 이루게 해주셔서 감사합니다!!!!',
      nickname: '수리삥이',
      rating: 5.0
    },
    {
      id: 3,
      title: '강사님의 따뜻한 마음이 느껴지는 수업',
      text: '매 수업을 들을 때 마다 느끼는 마음은.. 이번 기수 모든 수강생이 이번 과정의 내용을 놓치지않고, 모두 적용하고, 도전하기를 바라는 강사님의 따뜻한 마음이 느껴지는 수업입니다.',
      nickname: '담씩',
      rating: 5.0
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-header-left">
            <h2 className="testimonials-title">수강생 후기</h2>
            <p className="testimonials-intro">
              나도 할 수 있을까 고민이 된다면<br />
              수강생들의 성공 경험을 들어보세요.
            </p>
            <div className="testimonials-nav">
              <button className="testimonials-nav-btn" onClick={handlePrev}>
                &lt;
              </button>
              <button className="testimonials-nav-btn" onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>
          <div className="testimonials-cards">
            {displayedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <h3 className="testimonial-card-title">{testimonial.title}</h3>
                <p className="testimonial-card-text">{testimonial.text}</p>
                <div className="testimonial-card-footer">
                  <div className="testimonial-user-info">
                    <div className="testimonial-avatar">
                      {testimonial.nickname.charAt(0)}
                    </div>
                    <div className="testimonial-user-details">
                      <span className="testimonial-nickname">{testimonial.nickname}님</span>
                      <div className="testimonial-rating">
                        <span className="testimonial-star">★</span>
                        <span className="testimonial-rating-value">{testimonial.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className="testimonial-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
