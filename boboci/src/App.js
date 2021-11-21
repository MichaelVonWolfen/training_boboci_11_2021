import './App.css';
import  Table from "./Components/table/table"
function App() {
    const func = (data) =>{
        console.log(data)
    }
  return (
    <div className="App">
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
        <Table header_name={["Dana", "Stefan", "Iustina"]} callback={func}/>
        <Table header_name={["Dan", "Stefan", "Iustin"]}/>
        <Table header_name={["Dana", "Stefania", "Iustina"]}/>

      <h1>Acesta este un header de dimensiunea H1</h1>
      <h2>Acesta este un header de dimensiunea H2</h2>
      <h3>Acesta este un header de dimensiunea H3</h3>
      <h4>Acesta este un header de dimensiunea H4</h4>
      <h5>Acesta este un header de dimensiunea H5</h5>
      <h6>Acesta este un header de dimensiunea H6</h6>
      <p id="styled_paragraph">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Amet deleniti eius eligendi explicabo facere molestiae,
        officia omnis perferendis quam quod?
      </p>
      <a href="/index2.html" target="_blank">
        <img className="women_image"
             src="https://static.remove.bg/remove-bg-web/e88d40fe6b242c5a4872a70c3c93599d93563581/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
             alt="An image"/>
      </a>
      <span> Acesta este un span</span>

      <div className="container_human">
        <div className="lady_color centered one">Acesta este un div al unei doamne</div>
        <div className="lady_color centered two">Acesta este un div al unei doamne</div>
        <div className="lady_color centered three">Acesta este un div al unei doamne</div>
        <div className="lady_color centered four">Acesta este un div al unei doamne</div>
        <div className="gentleman_color centered">Acesta este un div al unei domn</div>
      </div>

    </div>
  );
}

export default App;
