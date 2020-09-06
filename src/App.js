import React,{useState, useEffect} from 'react';
import fire from './config/fire';
import Home from './components/Home';
import SignIn from './components/SignIn';
import './index.css'

function App() { 
    const [user,setUser] = useState({});

    function authListener(){
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        });
    }

    useEffect(()=>{
        authListener();
    },[]);

    return <>{user?<Home/>:<SignIn/>}</>;
}
 
export default App;