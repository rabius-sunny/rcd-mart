interface IProps {
  title: string
  desc: string
}
export default function SectionHeading({ title, desc }: IProps) {
  return (
    <div className='text-center uppercase pt-20 pb-10'>
      <h2 className='text-primary mb-2 font-semibold text-sm'>{desc}</h2>
      <h1 className='text-5xl font-bold'>{title}</h1>
    </div>
  )
}
