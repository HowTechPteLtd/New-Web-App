import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
import Header from "../components/header"; // Import your Header component
import Footer from "../components/footer"; // Import your Footer component

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState<string | null>(null); // Specify the type as string | null

  const [workouts, setWorkouts] = useState<Array<Workout>>([]); // Specify the type as Array<Workout>
  const [newWorkout, setNewWorkout] = useState<Workout>({
    name: "",
    workout: "",
    repetitions: 0,
    duration: 0,
  });

  const handleAddWorkout = () => {
    if (
      newWorkout.workout.trim() !== "" &&
      newWorkout.name.trim() !== "" &&
      (newWorkout.repetitions > 0 || newWorkout.duration > 0)
    ) {
      const updatedWorkouts = [...workouts, { ...newWorkout }];
      setWorkouts(updatedWorkouts);
      setNewWorkout({
        name: "",
        workout: "",
        repetitions: 0,
        duration: 0,
      });
    }
  };

  // Your custom content
  const customContent =
    "This is your custom content. You can replace this with your own content.";

  useEffect(() => {
    // If a session exists, set the custom content
    if (session) {
      setContent(customContent);
    }
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <Header title="Custom Workouts" />
      <h1>Custom Workouts</h1>
      <div>
        <input
          type="text"
          placeholder="Workout Name"
          value={newWorkout.name}
          onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
        />
        <textarea
          placeholder="Enter your custom workout"
          value={newWorkout.workout}
          onChange={(e) => setNewWorkout({ ...newWorkout, workout: e.target.value })}
        ></textarea>
        <label>Repetitions (optional):</label>
        <input
          type="number"
          placeholder="Enter the number of repetitions"
          value={newWorkout.repetitions}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, repetitions: parseInt(e.target.value) })
          }
        />
        <label>Duration (minutes, optional):</label>
        <input
          type="number"
          placeholder="Enter the duration in minutes"
          value={newWorkout.duration}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, duration: parseInt(e.target.value) })
          }
        />
        <button onClick={handleAddWorkout}>Save Workout</button>
      </div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <h2>{workout.name}</h2>
            <p>{workout.workout}</p>
            {workout.repetitions > 0 && <p>Repetitions: {workout.repetitions}</p>}
            {workout.duration > 0 && <p>Duration: {workout.duration} minutes</p>}
          </li>
        ))}
      </ul>
      <Footer />
    </Layout>
  );
}
