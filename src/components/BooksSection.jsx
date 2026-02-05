import React from 'react'
import './BooksSection.css'

function BooksSection() {
  const books = [
    {
      id: 1,
      title: '얼멍얼멍 하다보니 일흔이라카더라',
      link: 'https://product.kyobobook.co.kr/detail/S000216989342',
      image: '/images/book-1.jpg'
    },
    {
      id: 2,
      title: '나는 술이 싫었다',
      link: 'https://product.kyobobook.co.kr/detail/S000216903525',
      image: '/images/book-2.jpg'
    },
    {
      id: 3,
      title: '쫄지마, 엄마!',
      link: 'https://product.kyobobook.co.kr/detail/S000216851032',
      image: '/images/book-3.jpg'
    },
    {
      id: 4,
      title: '김여사 인생에 포스트 잇을 붙이다',
      link: 'https://product.kyobobook.co.kr/detail/S000216493937',
      image: '/images/book-4.png'
    },
    {
      id: 5,
      title: '인생의 페달은 멈추지 않는다',
      link: 'https://product.kyobobook.co.kr/detail/S000216407018',
      image: '/images/book-5.jpg'
    },
    {
      id: 6,
      title: '부모의 생각',
      link: 'https://product.kyobobook.co.kr/detail/S000216316225',
      image: '/images/book-6.jpg'
    },
    {
      id: 7,
      title: '중드 읽어주는 여자',
      link: 'https://product.kyobobook.co.kr/detail/S000215823716',
      image: '/images/book-7.jpg'
    },
    {
      id: 8,
      title: '친정엄마',
      link: null,
      image: '/images/book-8.jpg'
    },
    {
      id: 9,
      title: '저물지 않는 빛으로 살아갑니다',
      link: null,
      image: '/images/book-9.jpg'
    },
    {
      id: 10,
      title: '달빛 소녀 루나와 참새 치치',
      link: null,
      image: '/images/book-10.jpg'
    }
  ]

  return (
    <section className="books-section" id="books">
      <div className="section-header">
        <h2 className="section-title">출간 도서</h2>
      </div>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            {book.link ? (
              <a 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="book-link"
              >
                {book.image && (
                  <div className="book-image-wrapper">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="book-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const placeholder = e.target.parentElement.querySelector('.book-placeholder')
                        if (placeholder) placeholder.style.display = 'flex'
                      }}
                    />
                  </div>
                )}
                {!book.image && (
                  <div className="book-image-wrapper book-placeholder">
                    <span className="book-placeholder-text">📚</span>
                  </div>
                )}
                <h3 className="book-title">{book.title}</h3>
              </a>
            ) : (
              <div className="book-item">
                {book.image && (
                  <div className="book-image-wrapper">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="book-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                {!book.image && (
                  <div className="book-image-wrapper book-placeholder">
                    <span className="book-placeholder-text">📚</span>
                  </div>
                )}
                <h3 className="book-title">{book.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BooksSection
