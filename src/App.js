import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data"></div>
      <Intro />
      <SkillList />
    </div>
  );
}

const Avatar = () => {
  return <img className="avatar" src="avatar.jpeg" alt="Avatar" />;
};

const Intro = () => {
  return (
    <div className="data">
      <h1>Wenbin Jiang</h1>
      <p>
        I'm a student studying Computer Programming at Humber Polytech. I'm also
        a Dental Hygienist. I enjoy winter more than summer because I love
        snowboarding.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="red" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="HTML+CSS" emoji="💪" color="pink" />
      <Skill skill="Node.js" emoji="💪" color="green" />
      <Skill skill="Python" emoji="💪" color="orange" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};
export default App;
