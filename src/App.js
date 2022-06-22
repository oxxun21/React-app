import logo from './logo.svg';
import './App.css';
function Header(props){
  return <header>
  <h1><a href='#'>{props.title}</a></h1>
  </header>
}
function Nav(){
  return <nav>
  <ol>
    <li><a href='#'>html</a></li>
    <li><a href='#'>css</a></li>
    <li><a href='#'>js</a></li>
  </ol>
</nav>
}
function Acticle(props){
  return <acticle>
  <h2>{props.title}</h2>
  {props.body}
</acticle>
}
function App() {
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav></Nav>
      <Acticle title="Welcome" body="Hello, WEB"></Acticle>
      <Acticle title="Hi" body="Hi, React"></Acticle>
    </div>
  );
}

export default App;
