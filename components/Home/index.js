// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'
const Home = () => (
  <>
    <div className="homecont">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
