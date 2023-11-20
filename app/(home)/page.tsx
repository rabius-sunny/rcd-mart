import ProductCard from '@/components/shared/product/ProductCard'

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-4 my-20'>
      <ProductCard
        className='col-span-6 md:col-span-4 lg:col-span-3'
        title={products[0].title}
        description={products[0].description}
      />
      <ProductCard
        className='col-span-6 md:col-span-4 lg:col-span-6 lg:row-span-2 h-full'
        title={products[1].title}
        description={products[1].description}
      />
      <ProductCard
        className='col-span-6 md:col-span-4 lg:col-span-3'
        title={products[2].title}
        description={products[2].description}
      />
      <ProductCard
        className='col-span-6 md:col-span-4 lg:col-span-3'
        title={products[3].title}
        description={products[3].description}
      />
      <ProductCard
        className='col-span-6 md:col-span-4 lg:col-span-3'
        title={products[4].title}
        description={products[4].description}
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
