import styles from './Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div>
        <ul>
          <div className='footer-div'>
            <a href="https://www.linkedin.com/in/ali-askari-355257308/" className='footer-icon' title='LinkedIn'><LinkedInIcon /></a>
            <a href="https://github.com/AliAskariGithub" className='footer-icon' title='Github' ><GitHubIcon /></a>
            <a href="https://www.facebook.com/profile.php?id=61564881342854" className='footer-icon' title='Facebook'><FacebookIcon /></a>
            <a href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09" className='footer-icon' title='Twitter'><XIcon /></a>
            <a href="https://vercel.com/ali-askaris-projects" className='footer-icon' title='Vercel'><ChangeHistoryIcon /></a>
          </div>

          <div className='footer-div'>
            <a href="/" className='footer-a' >Home</a>
            <a href="/about" className='footer-a' >About</a>
            <a href="/contact" className='footer-a' >Contact</a>
            <a href="/" className='footer-a' >Privacy Policy</a>
          </div>
        </ul>
      </div>

      <p className='footer-p'>© 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;