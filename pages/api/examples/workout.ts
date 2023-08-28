import React, { useState } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';

interface Workout {
  name: string;
  workout: string;
  repetitions: number;
  duration: number;
}

function CustomWorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [newWorkout, setNewWorkout] = useState<Workout>({
    name: '',
    workout: '',
    repetitions: 0,
    duration: 0,
  });

  const handleAddWorkout = () => {
    if (
      newWorkout.workout.trim() !== '' &&
      newWorkout.name.trim() !== '' &&
      (newWorkout.repetitions > 0 || newWorkout.duration > 0)
    ) {
      const updatedWorkouts = [...workouts, { ...newWorkout }];
      setWorkouts(updatedWorkouts);
      setNewWorkout({
        name: '',
        workout: '',
        repetitions: 0,
        duration: 0,
      });
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default CustomWorkoutsPage;
