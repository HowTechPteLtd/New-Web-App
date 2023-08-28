import Layout from "../components/layout"
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router'; // Import useRouter for programmatic navigation

export default function Home() {
  const router = useRouter();

  // Function to navigate to the specified page
  const navigateToPage = (page) => {
    router.push(page);
  };

  return (
    <div className="container">
      <Head>
        <title>FitPlanPro</title>
        <link rel="icon" href="/FitPlanPro.png" />
      </Head>

      <main>
        <Header title="Welcome to Your Fitness App!" />
        <p className="description">
          Get started by exploring the following features:
        </p>

        <div className="feature-grid">
          <div className="feature-row">
            <button onClick={() => navigateToPage('/goal-setting')}>Goal Setting</button>
            <button onClick={() => navigateToPage('/nutrition-tips')}>Nutrition and Hydration Tips</button>
            <button onClick={() => navigateToPage('/protected')}>Protected</button>

          </div>
          <div className="feature-row">
            <button onClick={() => navigateToPage('/ExerciseLibrary')}>Exercise Library</button>
            <button onClick={() => navigateToPage('/custom-workouts')}>Custom Workouts</button>
          </div>
          <div className="feature-row">
            <button onClick={() => navigateToPage('/pages/profile')}>profile</button>
            <button onClick={() => navigateToPage('/reminders')}>Reminder and Scheduling</button> 
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

