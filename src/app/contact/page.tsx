'use client'
import { useRouter } from 'next/navigation';
import styles from './Contact.module.css';

export default function Contact() {
  const router = useRouter(); // Initialize useRouter

  const navigateToHome = () => {
    router.push('/'); // Navigate to the About page
  };

  const navigateToAbout = () => {
    router.push('/about'); // Navigate to the Contact page
  };

  return (
    <>
    <div className={styles.contact}>
      <h1>Contact Me</h1>
      <p>You can reach me at syedaliaskari1@email.com</p>
    </div>

      <div className='btn-div'>
        <button onClick={navigateToHome} className='btn-p' title='Click Me'>Go to Home Page</button>
        <button onClick={navigateToAbout} className='btn-p' title='Click Me'>Go to About Page</button>
      </div>
    </>
  );
}