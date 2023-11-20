import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
  title: string
  description: string
  className?: string
}
export default function ProductCard({ title, description, className }: IProps) {
  return (
    <div className={twMerge('bg-slate-200 p-4 h-52 text-center', className)}>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
