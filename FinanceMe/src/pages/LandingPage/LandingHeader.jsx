import React from "react";
import "./LandingHeader.css"; 
import Avatar from '../../components/Avatar.jsx';
import coin from '../../assets/coins/coin1.svg';
import Button from '../../components/button.jsx';
import FileUpload from '../../components/FileUpload.jsx';

function LandingHeader() {


  return (
    <header className='landing-header'>
      <div className = 'profile-container'>
        <div className='avatar-container' >
          <Avatar alt="profile-image" image={coin}/>
        </div>
        <p className='name'>Carson Bates</p>
      </div>
      <div style={{display: 'flex', gap: "25px", justifyContent: 'center', alignItems: 'center'}}>
      <FileUpload/>
      <Button className="landing-header__sign-out-button">Sign Out</Button>
      </div>
    </header>
  );
}

export default LandingHeader;
