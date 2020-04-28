import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CoursesGrid = ({ courses }) => (
  <div className='ed-grid m-grid-4'>
    {
      courses.map( c => (
        <CourseCard
          key={ c.id }
          id={ c.id }
          title={ c.title }
          image={ c.image }
          price={ c.price }
        />
      ))
    }
  </div>
)

export default withLoader("courses", CoursesGrid)