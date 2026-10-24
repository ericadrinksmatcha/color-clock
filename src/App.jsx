// useState stores the current time; useEffect runs the timer.
import { useState, useEffect } from "react";
// format is the date-fns function that turns a Date object into readable text.
import { format } from "date-fns";
// Styles for the clock live in their own file (see src/Clock.css).
import "./Clock.css";

// App is the root component. main.jsx renders it into the #root div in index.html.
function App() {
  // `now` holds the current date/time. Updating it makes React re-render.
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Update `now` every 1000 ms so the clock ticks.
    const id = setInterval(() => setNow(new Date()), 1000);
    // Cleanup: stop the timer when the component unmounts to avoid leaks.
    return () => clearInterval(id);
  }, []); // Empty array = set up the timer once, on first render.

  return (
    // JavaScript inside JSX goes in curly braces.
    // className="clock" applies the styles from Clock.css.
    <p className="clock">{format(now, "MMMM do, yyyy hh:mm:ss a")}</p>
  );
}

export default App;

         
