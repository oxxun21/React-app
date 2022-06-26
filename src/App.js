import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Header(props){
  return <header>
  <h1><a href='#' onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
    <a id={t.id} href={'#'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a>
    </li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"/></p>
    </form>
  </article>
}
function Acticle(props){
  return <acticle>
  <h2>{props.title}</h2>
  {props.body}
</acticle>
}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] =useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]);
  let content = null;
  if (mode === 'WELCOME'){
    content = <Acticle title="Welcome" body="Hello, WEB"></Acticle>
  } else if(mode === 'read') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      
      if(topics[i].id ===id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Acticle title={title} body={body}></Acticle>
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      
    }}></Create>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('read');
        setId(_id);
      }}></Nav>
      {content}
      <a href='/crete' onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
