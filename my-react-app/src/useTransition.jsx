// React Transitions with useTransition Hook
// -----------------------------------------
// What is useTransition?
// - A React Hook that helps keep the UI responsive during heavy updates.
// - It lets you mark some state updates as "non-urgent" (transitions).
// - Urgent updates happen immediately (like typing in an input).
// - Non-urgent updates (like rendering a huge list) can wait, keeping the UI smooth.

// When to Use?
// - When an update is slow and might freeze the UI
// - When the update is not immediately critical
// - Example: Search results, filtering a large list, rendering charts, etc.

import { useState, useTransition } from "react";

// -----------------------------------------
// EXAMPLE 1: Simple useTransition
function SimpleSearchBar() {
  const [text, setText] = useState("");      // Urgent state (input value)
  const [results, setResults] = useState(""); // Non-urgent state (search results)
  const [isPending, startTransition] = useTransition(); // useTransition hook

  const handleChange = (e) => {
    // Urgent update: input field updates right away
    setText(e.target.value);

    // Non-urgent update: search results update slowly
    startTransition(() => {
      setResults(e.target.value);
    });
  };

  return (
    <div>
      <h2>Simple Example</h2>
      <input value={text} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p> // Show while transition is pending
      ) : (
        <p>Search results for: {results}</p>
      )}
    </div>
  );
}

// -----------------------------------------
// EXAMPLE 2: Real-World Example with Slow Search
function SearchResults({ query }) {
  // Simulate slow rendering of search results
  const items = [];
  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function RealWorldSearch() {
  const [input, setInput] = useState(""); // Urgent: what user types
  const [query, setQuery] = useState(""); // Non-urgent: what we search
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: update input immediately
    setInput(e.target.value);

    // Non-urgent: update search results
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <h2>Real-World Example</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}

// -----------------------------------------
// MAIN APP
function App() {
  return (
    <div>
      {/* Example 1: Simple transition */}
      <SimpleSearchBar />
      <hr />
      {/* Example 2: Real-world slow search */}
      <RealWorldSearch />
    </div>
  );
}

export default App;

// -----------------------------------------
// NOTES
// useTransition returns:
//   1. isPending → Boolean (true when transition is in progress)
//   2. startTransition(callback) → Wrap non-urgent updates inside this
//
// Key Rule:
// - Urgent updates: typing, button clicks → set state directly
// - Non-urgent updates: filtering lists, rendering big UI → wrap in startTransition
