import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
        <li className='font-semibold text-lg pb-20'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
            Inventory System
          </NavLink>
        </li>
        <li>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
            Search Product
          </NavLink>
        </li>
        <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              Product Registration
            </NavLink>
        </li>
        <li>
            <NavLink
              to='/my-order'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              Report's Generation
            </NavLink>
          </li>
      
          
          <li className='pt-28'>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li className='text-black/60'>
            {parsedAccount?.email}
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      )
    }
  }

  return (
    <nav 
      className={`flex fixed z-10 top-0 w-60 h-full py-5 px-8 text-sm font-light bg-white ${(hasUserAnAccount && !isUserSignOut)? "border-2 border-black" : ""}`}>
      <ul className='flex flex-col items-center gap-3'>
        {renderView()}
        <li className='flex items-center'>
          <ShoppingCart/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar