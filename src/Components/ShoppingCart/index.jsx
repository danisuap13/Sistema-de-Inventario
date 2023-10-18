import { useContext } from 'react'
import { ArchiveBoxIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext)

  const openCheckoutSideMenu = () => {
    context.openCheckout()
    context.closeProductDetail()
  }

  return (
    <div className='fixed bottom-4 flex gap-0.5 items-center' onClick={() => openCheckoutSideMenu()}>
      <ArchiveBoxIcon className='w-6 h-6 fill-none stroke-black cursor-pointer'/>
    </div>
  )
}

export default ShoppingCart