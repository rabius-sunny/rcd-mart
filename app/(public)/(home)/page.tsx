import Box from '@/components/custom/Box'
import SpecProduct from '@/components/shared/others/SpecProduct'
import Card from '@/components/shared/product/Card'
import ProductCard from '@/components/shared/product/ProductCard'

export default function Home() {
  return (
    <div>
      <Box>
        <div className='grid grid-cols-12 gap-4 my-20'>
          <div className='col-span-6 md:col-span-4 lg:col-span-3'>
            <Card />
          </div>
          <div className='col-span-6 md:col-span-4 lg:col-span-6 lg:row-span-2 h-full'>
            <Card />
          </div>
          <div className='col-span-6 md:col-span-4 lg:col-span-3'>
            <Card />
          </div>
          <div className='col-span-6 md:col-span-4 lg:col-span-3'>
            <Card />
          </div>
          <div className='col-span-6 md:col-span-4 lg:col-span-3'>
            <Card />
          </div>
        </div>
      </Box>

      <SpecProduct
        products={[1, 2, 3, 4, 5]}
        headings={{ title: 'best seller', desc: 'top sale in the week' }}
      />
    </div>
  )
}

const products = [
  {
    title: 'Product 1',
    description: 'Description for Product 1'
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2'
  },
  {
    title: 'Product 3',
    description: 'Description for Product 3'
  },
  {
    title: 'Product 4',
    description: 'Description for Product 4'
  },
  {
    title: 'Product 5',
    description: 'Description for Product 5'
  }
]
