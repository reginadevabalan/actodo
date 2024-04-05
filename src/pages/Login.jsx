import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    const [ruser,setruser] = useState(true)
    
    const users = props.users
    

    function handleUInput(evt){
        setEusername(evt.target.value)
    }

    function handlePInput(evt){
        setEpassword(evt.target.value)
    }

    function checkUser()
    {
        var userfound = false

        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword)
            {

                console.log("Successful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
            
        })

        if(userfound===false)
        {
            console.log("Login failed")
            setruser(false)
        }
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up before you login!!</p>}
                

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" value={eusername} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" onChange={handleUInput}></input>

                    <input type="text" value={epassword} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePInput}></input>
                    
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline" >SignUp</Link></p>
                    
                </div>

            </div>

        </div>
    )
}

export default Login