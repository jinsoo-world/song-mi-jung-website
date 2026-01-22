import React from 'react'
import './InstructorsSection.css'

function InstructorsSection() {
  const instructors = [
    {
      id: 1,
      name: '안은미 강사',
      image: 'https://upload.cafenono.com/image/slashpageHome/20251128/150251_7n3tTMl6RwFcQmobWr?q=80&s=1280x180&t=outside&f=webp'
    },
    {
      id: 2,
      name: '도여사 강사',
      image: 'https://upload.cafenono.com/image/slashpageHome/20251128/150347_QGPJX9tqVkLpfjT20T?q=80&s=1280x180&t=outside&f=webp'
    },
    {
      id: 3,
      name: '픽맘 강사',
      image: 'https://upload.cafenono.com/image/slashpageHome/20251128/150355_iNprtKLvZtd4rcQ98Q?q=80&s=1280x180&t=outside&f=webp'
    }
  ]

  return (
    <section className="instructors-section" id="instructors">
      <div className="section-header">
        <h2 className="section-title">대한민국 상위 1% 강사진</h2>
      </div>
      <div className="instructors-grid">
        {instructors.map(instructor => (
          <div key={instructor.id} className="instructor-card">
            <div className="instructor-image-wrapper">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="instructor-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/F7F4EB/3D5737?text=' + encodeURIComponent(instructor.name)
                }}
              />
            </div>
            <div className="instructor-info">
              <h3 className="instructor-name">{instructor.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InstructorsSection
