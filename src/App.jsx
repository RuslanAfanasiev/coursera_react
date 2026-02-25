
function App(props) {

  const currentDate = new Date();

  return (
    <div>
      <h1>Hello world</h1>
      <p>Current date: {currentDate.toLocaleDateString()}</p>
      <h2>
        It is {currentDate.toLocaleDateString()} and the time now is{" "}
        {currentDate.toLocaleTimeString()}.
      </h2>
    </div>
  );
}

export default App;
