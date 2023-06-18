

import {Routes, Route} from 'react-router-dom'
import SignInPage from './signin';
import Register from './register';
import Home from './home';
import RootLayout from './component/RootLayout';
import AdminLogin from './admin';
import Adminpage from './adminpage';


const App = () => {
  return(
    <RootLayout>
      
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signin" element ={<SignInPage />}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/admin" element ={<AdminLogin/>}/>
        <Route path="/adminpage" element ={<Adminpage/>}/>
       
      </Routes>
    </RootLayout>
    
  )
}

export default App
