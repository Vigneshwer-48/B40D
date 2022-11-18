//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<User 
name="Vicky"
pic="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"/>
<User 
name="Saro"
pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU"/>
<User 
name="Kullan"
pic="https://wallpapercave.com/wp/wp5979216.jpg"/>
    </div>
  );
}
function User({name, pic}){
  //console.log(props, typeof props);
  return (
    <section>
    <img className="user-profile-pic" src={pic} alt={name}/>
    <h1 className="user-name">
    Hello, <span className="user-first-name">{name}❤️❤️❤️</span>
    </h1>
    </section>
  );
    
     
}

export default App
