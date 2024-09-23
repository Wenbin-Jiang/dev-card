import "./App.css";

const skills = [
  {
    skill: "Javascript",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "blue",
  },
  { skill: "HTML+CSS", level: "intermediate", color: "red" },
  { skill: "React", level: "advanced", color: "purple" },
  { skill: "Python", level: "beginner", color: "green" },
  { skill: "Node.js", level: "beginner", color: "yellow" },
];
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
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
};
export default App;
