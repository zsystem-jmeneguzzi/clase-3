const App = () => {

const syles = {
  fontSize: 15,
  color: 'white',
  backgroundColor:'orange'
}

  return (
  <>
  <h1>Escribiendo JSX</h1>;

  <nav>
      <ul style={syles}>
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
  </nav>

</>
  );
};

export default App;
