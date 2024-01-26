

const App = () => {
  const surpriseOptions = [
    'A blue ostrich eatin gmelon',
    'A matisse style shark eating on the telephone',
    'A pineapple sunbathing on an island',

  ]
  return (
    <div className="App">
      <section className="search-section">
        <p>Start with a detailed decription 
          <span className='surprise'>surprise me</span>
          </p>
          <div className="input-container">
            <input placeholder='An impressionist oil painting of a sunflower in a purple case...' />
            <button>Generate</button>
          </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
