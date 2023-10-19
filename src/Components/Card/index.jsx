import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { BuildingStorefrontIcon, ChevronUpDownIcon, ClockIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  // const addProductsToCart = (event, productData) => {
  //   event.stopPropagation()
  //   context.setCount(context.count + 1)
  //   context.setCartProducts([...context.cartProducts, productData])
  //   context.openCheckoutSideMenu()
  //   context.closeProductDetail()
  // }

  return (
    <div
      className='bg-white cursor-pointer w-full border border-gray-400 mb-3 p-2'
      onClick={() => showProduct(data.data)}>
      <p className='flex justify-between items-center'>
        <p className='flex w-20 justify-between'>
          <PencilSquareIcon className='w-5' />
          <ClockIcon className='w-5'/>
          <BuildingStorefrontIcon className='w-5'/>
        </p>
          <span className='text-sm font-light w-72 pl-4'>{data.data.title}</span>
          <span className='text/sm font-light w-20 self'>{data.data.category.name}</span>
          <span className='text-lg font-light w-20'>20</span>
          <span className='text-lg font-medium w-20'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card