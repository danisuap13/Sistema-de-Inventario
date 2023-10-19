import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { BuildingStorefrontIcon, ClockIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

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

  const editProduct = (event, productData) => {
    event.stopPropagation()
    context.openCheckoutSideMenu(productData)
    context.setProductToShow(productData)
  }

  const showProductHistory = (event, productData) => {
    event.stopPropagation()
    if(!context.cartProducts.includes(productData)) {
      context.setCartProducts([...context.cartProducts, productData])
    }
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  } 

  return (
    <div
      className='bg-white cursor-pointer w-full border border-gray-400 mb-3 p-2'
      onClick={() => showProduct(data.data)}>
      <p className='flex justify-between items-center'>
        <p className='flex w-20 justify-between'>
          <PencilSquareIcon 
            className='w-5'
            onClick={(event) => editProduct(event, data.data)} 
          />
          <ClockIcon
            className='w-5'/>
          <BuildingStorefrontIcon 
            className='w-5'
            onClick={(event) => showProductHistory(event, data.data)}
            />
        </p>
          <span className='text-lg font-light w-72 pl-4'>{data.data.title}</span>
          <span className='text-lg font-light w-20 self'>{data.data.category.name}</span>
          <span className='text-lg font-light w-20'>20</span>
          <span className='text-lg font-medium w-20'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card