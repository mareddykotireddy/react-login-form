import React from 'react'

import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigation = useNavigate()

    const goingHome=()=>{
    
        navigation('/login')

    }

    return (
        <div>
            <center>
                <h1> Welcome to Home page</h1>
                <button style={{color:"white",textAlign:"center" ,backgroundColor:'black',width:"100px",padding:"17px 13px",borderRadius:"10px"}}
                onClick={goingHome}>Logout</button>
            </center>
        </div>
    )

}

export default Home
