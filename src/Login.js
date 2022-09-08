import './App.css';
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
function loginUser() {
  const loginEmail = document.getElementById('login-email').value
  const loginPass = document.getElementById('login-pass').value
  if (localStorage.getItem('UsersLogin')) {
      const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
      const matchedUser = allStoredUsers.filter(user => {
          return loginEmail === user.email && loginPass === user.password;
      })
      if (matchedUser.length) {
          console.log('Login successful')
          navigate('/post')
      } else {
          alert('Wrong Credentials')
      }
  } else {
      console.log('Wrong credentials') // Don't say "Not a registered user"
  }
}
  return (
    
    <>
    
    <body>
    <div className='text'>

    </div>
    <div className='bgimage' id='bg2'>
    </div>
    <div className='signup'>
    <div className="center">

         <div className="cont">
            <label for="show" className="close-btn fas fa-times" title="close"></label>
            <div className="text">
               Login Form
            </div>
            <form>
               <div className="data">
                  <label>Email</label>
                  <input id='login-email' type="text" required/>
               </div>
               <div className="data">
                  <label>Password</label>
                  <input id='login-pass' type="password" required/>
               </div>
               <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button type="submit" onClick={loginUser}>login</button>
               </div>
            </form>
         </div>
      </div>
    </div>
    </body>
    </>
  );
}

export default Login;
