import { useNavigate } from 'react-router-dom';
import './cards.css';

function Cards(){
const navigate=useNavigate();
    const goToAtestment=(type)=>{
if(type==="court"){
navigate('/court-page');
}
else if(type==="hospital"){
    navigate('/hospital-page');
}
else if(type==="counterFiet"){
    navigate('/supplyChain-page');
}
    }
    return(  <div className="flex gap-1 justify-center">
    <div className="flex flex-col gap-1">
  <div className="container">
  <div className="nft">
    <div className='main'>
      {/* <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" /> */}
      <h2 className='font-mont'>For Healthcare Sector</h2>
      <p className='description'> Enable secure and transparent management of patient data, medical devices, clinical research, pharmaceuticals, and insurance claims.</p>
      <div className='tokenInfo'>
        {/* <div className="price">
          <ins>◘</ins>
          <p>0.031 ETH</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div> */}
      </div>
      <hr />
      <div className='creator' onClick={()=>goToAtestment('hospital')}>
       
       <p className='font-mont font-normal'><ins>Go to</ins> Hospital Attestment</p>
       </div>
     
    </div>
	
            </div>
            <div className="nft">
    <div className='main'>
      {/* <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" /> */}
      <h2>For Court Hearings</h2>
      <p className='description font-mont font-normal'>Ensures the integrity of legal documents through secure digital signatures and blockchain verification.</p>
      <hr />
      <div className='creator' onClick={()=>goToAtestment('court')}>
       
       <p className='font-mont font-normal'><ins>Go to</ins> Court Attestment</p>
     </div>
     
    </div>
	
            </div>
    
    </div>


	</div>
  
    <div className="flex flex-col gap-2 justify-center">
    <div className="nft-right">
    <div className='main'>
      {/* <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" /> */}
      <h2>For Supply Chain</h2>
      <p className='description font-mont font-normal'>Track and verify the authenticity of products as they move through the supply chain.</p>
      {/* <div className='tokenInfo'>
        <div className="price">
          <ins>◘</ins>
          <p>0.031 ETH</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div> */}
      <hr />
      <div className='creator' onClick={()=>goToAtestment('counterFiet')}>
       
       <p className='font-mont font-normal'><ins>Go to</ins> SupplyChain Attestment</p>
       </div>
    </div>
   
            </div>
    </div>
    </div>)
}
export default Cards;