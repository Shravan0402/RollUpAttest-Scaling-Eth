import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import "../home.css";
import signIn from "../../Assets/Sign.png";
import vid from "../../Assets/video.mp4";
import axios from "axios";

function Court(){
    const [account,setAccount]=useState("");
    const [isConnected,setIsConnected]=useState(false);
    const [id,setId]=useState("");
    const [hearingDate,setHearingDate]=useState("");
    const [witness,setWitness]=useState("");
    const [result,setResult]=useState("");
    const ethers = require("ethers");

    const getSupplyAttest=async()=>{
      if(window.ethereum){
      const accounts= await window.ethereum.request({ method: "eth_requestAccounts" });
      let userAccount=accounts[0];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const data={"caseId":id,"hearingDate":hearingDate,"witness":witness,"result":result}
      const signatureValue = await signer.signMessage(JSON.stringify(data));
      try{
        const response = await axios.post("http://localhost:4000/create-attestation", {
                         schemaId:"null",
                         attestation:JSON.stringify(data),
                         signature: signatureValue,
                         attester: userAccount
                      })
                      console.log(response,"axios response")  
                    } catch{
                      console.log("error")
                    } 
    }
    }
    const handleInput =(e,type)=>{
if(type==="id"){
setId(e.target.value);
}
else if(type==="date"){
  setHearingDate(e.target.value);
  }
  else if(type==="witness"){
    setWitness(e.target.value);
    }
    else if(type==="result"){
      setResult(e.target.value);
      }
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
           <label className="text-md font-normal text-left">Case Id</label>
            <input type="text" className="border-none rounded-lg h-[40px] text-black font-normal font-mont p-2" name="collateral"  onChange={(e)=>handleInput(e,"id")}/>
          </div>
            <div className="flex flex-col gap-4">
            <label className="text-md font-normal text-left">Hearing Date</label>
            <input type="text" name="tokens"  className="border-none rounded-lg h-[40px] text-black font-normal font-mont p-2" onChange={(e)=>handleInput(e,"date")} />
            
            </div> 
            <div className="flex flex-col gap-4">
            <label className="text-md font-normal text-left">Witness</label>
            <input type="text" name="tokens"  className="border-none rounded-lg h-[40px] text-black font-normal font-mont p-2" onChange={(e)=>handleInput(e,"witness")} />
            
            </div>
            <div className="flex flex-col gap-4">
            <label className="text-md font-normal text-left">Result</label>
            <input type="text" name="tokens"  className="border-none rounded-lg h-[40px] text-black font-normal font-mont p-2" onChange={(e)=>handleInput(e,"result")} />
            
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
export default Court;