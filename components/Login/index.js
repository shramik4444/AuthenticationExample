// Write your JS code here

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onclicklogin = async () => {
    console.log('clckeddddddddddddd')
    const username = 'rahul'
    const password = 'rahul@2021'
    const credentials = {username, password}
    const options = {method: 'POST', body: JSON.stringify(credentials)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    //  console.log(data)
    if (response.ok === true) {
      const {history} = this.props
      console.log(this.props)
      Cookies.set('jwt_token', data.jwt_token, {expires: 30, path: '/'})
      history.replace('/')
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="logincont">
        <h1>Please Login</h1>
        <button onClick={this.onclicklogin}>Login With Sample Creds</button>
      </div>
    )
  }
}
export default Login
