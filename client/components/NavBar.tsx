import { Link } from 'react-router-dom'
import '../stylesheets/navBar.css'
import { AiFillHome, AiFillSetting, AiFillDashboard, AiOutlineShareAlt } from 'react-icons/ai';
import { BsPeopleFill, BsSearch } from 'react-icons/bs';
import K8RLogoSquare from '../assets/logoSquare.png'
import { useState } from 'react';
import ProfileCreator from './ProfileCreator';
import ProfileSelector from './ProfileSelector'


function NavBar({ setCurrentProfileId }) {
  const [showProfileCreator, setShowProfileCreator] = useState(false);
  const [showProfileSelector, setShowProfileSelector] = useState(false);

  return (
    <>
      {showProfileCreator ? <ProfileCreator setShowProfileCreator={setShowProfileCreator} /> : null}
      {showProfileSelector ? <ProfileSelector setCurrentProfileId={setCurrentProfileId} setShowProfileCreator={setShowProfileCreator} setShowProfileSelector={setShowProfileSelector} /> : null}
      <div className="navBar">
        <img src={K8RLogoSquare} className="navBarLogo" alt="K8R Logo" />
        <Link to="/" className="navBarButton navBarHomeButton">
          <BsSearch />
        </Link>
        <Link to="/" className="navBarButton navBarHomeButton">
          <AiFillHome />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <AiFillDashboard onClick={() => { setShowProfileCreator(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <AiOutlineShareAlt />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <BsPeopleFill onClick={() => { setShowProfileSelector(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <AiFillSetting />
        </Link>
      </div>
    </>
  )
}

export default NavBar;
