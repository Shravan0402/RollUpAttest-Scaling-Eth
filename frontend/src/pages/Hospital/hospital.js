import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import "../home.css";
import vid from "../../Assets/video.mp4";
import signIn from "../../Assets/Sign.png";

function Hospital(){
    const [account,setAccount]=useState("");
    const [isConnected,setIsConnected]=useState(false);
    const getSupplyAttest=()=>{

    }
    const handleInput =(e,type)=>{

    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <div>
        <video autoPlay loop muted>
                  <source src = {vid} type = 'video/mp4' autoPlay loop/>
                  </video>
                <div container className="flex flex-col justify-between gap-0 absolute w-[100%]">
    {/* <Grid item xs={12} className="sticky"> */}
<Navigation account={account} setIsConnected={(isConnected)=>setIsConnected(isConnected)} isConnected={isConnected}/>
        <div className="flex justify-around">
        <div className="card-container text-white flex flex-col justify-between p-10 border-none rounded-lg max-h-[650px] min-w-[400px]">
          
        <div className="flex flex-col gap-6 justify-start">
            <span className="text-md font-normal text-left">Form Details</span>
        <div className="flex flex-col gap-4">
           <label className="text-md font-normal text-left">Patient Name</label>
            <input type="text" className="border-none rounded-lg h-[40px] " name="collateral"  onChange={(e)=>handleInput(e,"name")}/>
          </div>
            <div className="flex flex-col gap-4">
            <label className="text-md font-normal text-left">Test Details</label>
            <input type="text" name="tokens"  className="border-none rounded-lg h-[40px] " onChange={(e)=>handleInput(e,"test")}/>
            
            </div> 
            <div className="flex flex-col gap-4">
           <label className="text-md font-normal text-left">Restriction</label>
            <input type="text" className="border-none rounded-lg h-[40px] " name="collateral"  onChange={(e)=>handleInput(e,"restriction")}/>
          </div>
            </div>
            <div className="btn-container">
            <button onClick={getSupplyAttest} className="button-create"><img width="150px" height="40px" src={signIn} alt="signIn" /></button>
            </div>
                  
           
        </div>
        
        {/* </Grid> */}
        {/* <Grid item xs={6.5} style={{height:"850px",width:"450px",display:"flex",justifyContent:"flex-start"}} alignContent={"flex-start"}> */}
        <div style={{ objectFit: "contain",height: "1200px",width:"auto" ,display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
        <model-viewer
        style={{width:"inherit",width:"450px",paddingBottom:"32rem",display:"flex",justifyContent:"flex-start"}}
        
            src="./astronaut.glb" alt="astronaut"
            camera-orbit="45deg 55deg" touch-action="pan-y" autoplay animation-name="Running"
            >
        </model-viewer>
        
        </div>
        </div>
        </div>
        </div>)
}
export default Hospital;