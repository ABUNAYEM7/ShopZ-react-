import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Navbar = ({menuClickHandler,storeCart}) => {
  return (
    <div className='max-w-screen-2xl mx-auto border-b-2 p-2 '>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
        {/* sm-screen-dropdown */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow text-xl font-semibold">
        <li className='relative'>
            <NavLink to ='/' onClick={()=> menuClickHandler('Cart')}
                >
                Home
            </NavLink>
        </li>
        <li className='mx-4'>
            <NavLink to ='/Main' onClick={()=> menuClickHandler('Cart')}
                >About
            </NavLink>
        </li>
        <li className='relative'>
            <NavLink to ='/Cart' onClick={()=> menuClickHandler('Cart')}
            >
                Cart
                <span className='absolute right-0 top-0'>{storeCart.length}</span>
            </NavLink>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">ShopZ</a>
  </div>
  {/* lg-screen-dropdown */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
        <li className='relative'>
            <NavLink to ='/' onClick={()=> menuClickHandler('Cart')}
                >
                Home
            </NavLink>
        </li>
        <li className='mx-4'>
            <NavLink to ='/Main' onClick={()=> menuClickHandler('Cart')}
                >
                About
            </NavLink>
        </li>
        <li className='relative'>
            <NavLink to ='/Cart' onClick={()=> menuClickHandler('Cart')}
            >
                Cart
                <span className='absolute right-0 top-0'>{storeCart.length}</span>
            </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="mask mask-hexagon w-16">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  </div>
</div>
    </div>
  )
}

Navbar.propTypes = {
    menuClickHandler : PropTypes.func.isRequired,
    isActive : PropTypes.string.isRequired,
    storeCart : PropTypes.array.isRequired
}

export default Navbar
