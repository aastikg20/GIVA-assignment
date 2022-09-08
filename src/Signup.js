import './App.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  function UserRegistration() {
    let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
    const userData = {
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-pass').value
    };
    storedUsers.push(userData);
    localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
}

  return (
    
    <>
    
    <body>
    <div className='text'>

    </div>
    <div className='bgimage' id='bg1'>
    </div>
    <div className='signup'>
    <div className="center">

         <div className="cont">
            <label for="show" className="close-btn fas fa-times" title="close"></label>
            <div className="text">
               Signup Form
            </div>
            <form onSubmit={() => {
          navigate('/login');
        }}>
               <div className="data">
                  <label>Email</label>
                  <input id='register-email' type="text" required/>
               </div>
               <div className="data">
                  <label>Password</label>
                  <input id='register-pass' type="password" required/>
               </div>
               <div className="data">
                  <label>Confirm Password</label>
                  <input type="password" required/>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button type="submit" onClick={UserRegistration}>signup</button>
               </div>
               <div className="signup-link">
                  Already a member? <a href='/login'>Login now</a>
               </div>
            </form>
         </div>
      </div>
    </div>
    </body>
    </>
  );
}

export default Signup;
