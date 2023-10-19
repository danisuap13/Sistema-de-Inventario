import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { ShieldExclamationIcon } from '@heroicons/react/24/outline'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='flex flex-col items-center pt-40 '>
          <span className='font-bold text-2x1'>
            There's nothing of what you're talking about
          </span>
          <ShieldExclamationIcon className='w-20 items-center'/>
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-bold text-2xl'>Search Product</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='flex-col w-full max-w-screen-lg pb-10'>
        <div
        className='bg-white cursor-pointer w-full border rounded-lg border-black p-5 mb-5'>
          <p className='flex justify-between items-center'>
            <span className='text-lg font-bold w-32'>OPTIONS</span>
            <span className='text-lg font-bold w-44'>NAME</span>
            <span className='text-lg font-bold w-15 pl-20'>CATEGORY</span>
            <span className='text-lg font-bold w-15 pr-10'>AMOUNT</span>
            <span className='text-lg font-bold w-20 pl-2'>PRICE</span>
          </p>
        </div>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home