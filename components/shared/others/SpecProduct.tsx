import SectionHeading from '@/components/custom/SectionHeading'

import Box from '../../custom/Box'
import Card from '../product/Card'

interface IProps {
  products: TProduct[]
  headings: {
    title: string
    desc: string
  }
}
export default function SpecProduct({ products, headings }: IProps) {
  return (
    <div>
      <Box>
        <SectionHeading title={headings.title} desc={headings.desc} />
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {products.map((item) => (
            <div className='col-auto'>
              <Card key={item} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  )
}
