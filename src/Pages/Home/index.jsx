import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

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
        <div>We don't have anything :(</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Search Product</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='flex-col w-full max-w-screen-lg pb-10'>
        <div
        className='bg-white cursor-pointer w-full border rounded-lg border-black pb-5 mb-5'>
          <p className='flex justify-between items-center'>
            <span className='text-sm font-bold w-60 pl-4'>NAME</span>
            <span className='text/sm font-bold w-15 self pl-6'>CATEGORY</span>
            <span className='text-lg font-bold w-15 pr-6'>AMOUNT</span>
            <span className='text-lg font-bold w-20'>PRICE</span>
          </p>
        </div>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home