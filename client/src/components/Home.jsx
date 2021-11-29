import React from "react"

function Home() {
  const [message, setMessage] = React.useState()

  React.useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => setMessage(data.message))
  }, [])
  return (
    <div className="App">
      {!message ? "Loading..." : message}
    </div>
  );
}

export default Home;