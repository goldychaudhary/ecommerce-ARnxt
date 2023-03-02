import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import './index.css'

const Navbar = () => (
   <div className='navbar-main-bg'>
    <Link className='link' to='/'>
    <h1 className='website-logo'>LOGO</h1>
    </Link>
      
      <div className='links-container'>
        <Link className='link lg' to='/'>Home</Link>
        <Link className='link lg' to='/products'>Products</Link>
        <Link className='link sm' to='/'><AiFillHome /></Link>
        <Link className='link sm' to='/products'><MdProductionQuantityLimits /></Link>
      </div>
   </div>
)

export default Navbar