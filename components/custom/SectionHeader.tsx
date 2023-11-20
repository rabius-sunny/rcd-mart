import React from 'react'

interface IProps {
  title: string
  description: string
}
export default function SectionHeader({ title, description }: IProps) {
  return (
    <div className='text-center py-10'>
      <p className='uppercase font-semibold text-sm text-primary'>
        {description}
      </p>
      <h1 className='uppercase font-extrabold text-3xl sm:text-5xl'>{title}</h1>
    </div>
  )
}
