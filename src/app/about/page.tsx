'use client'
import styles from './About.module.css';
import { useRouter } from 'next/navigation';


export default function About() {
  const router = useRouter(); // Initialize useRouter

  const navigateToHome = () => {
    router.push('/'); // Navigate to the About page
  };

  const navigateToContact = () => {
    router.push('/contact'); // Navigate to the Contact page
  };

  return (
    <>
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>This is the about page.</p>

    </div>
      <div className='btn-div'>
        <button onClick={navigateToHome} className='btn-p' title='Click Me'>Go to Home Page</button>
        <button onClick={navigateToContact} className='btn-p' title='Click Me'>Go to Contact Page</button>
      </div>
    </>
  );
}