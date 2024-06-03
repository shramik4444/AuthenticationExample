// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="bg-cont">
      <ul className="headercont">
        <div>
          <Link to="/">
            <li>Home</li>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <li>About</li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Header
