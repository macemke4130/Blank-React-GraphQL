import React from 'react';
import { useEffect, useState } from 'react';

import { gql } from "./utils/gql";

function App() {
  const [openGate, setOpenGate] = useState(true);
  const [greeting, setGreeting] = useState("World");

  const getGreeting = async () => {
    setOpenGate(false);

    const r = await gql(` { greet } `);
    setGreeting(r.greet);
  }

  useEffect(() => {
    if (openGate) getGreeting();
  });

  return (
    <>
      Hello there {greeting}! Your React and GraphQL App is running!
    </>
  );
}

export default App;