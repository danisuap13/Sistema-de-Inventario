import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Layout = ({ children }) => {
  const context = useContext(ShoppingCartContext)
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

  return (
    <div className={`flex flex-col items-center mt-20 ${ (hasUserAnAccount && !isUserSignOut)? "pl-60" : ""}`}>
      {children}
    </div>
  )
}

export default Layout