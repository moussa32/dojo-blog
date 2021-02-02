import './App.css';

function App() {
  const title = 'Welcome Moussa';
  const likes = 50;
  // const body = { arm: 'Yeah', age : 50}
  const link = 'https://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } time</p>

        {/* <p>{ body }</p> */}

        <p>{ 10 }</p>
        <p>{"Hello people"}</p>
        <p>{[0,2,5,72,1,4,6]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google site.</a>
      </div>
    </div>
  );
}

export default App;
