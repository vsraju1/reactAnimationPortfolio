import "./Skills.css";

const SkillsData = [
  {
    id: 1,
    skillSvg: "https://img.icons8.com/color/48/html-5--v1.png",
    skillTitle: "HTML",
  },
  {
    id: 2,
    skillSvg: "https://img.icons8.com/fluency/48/css3.png",
    skillTitle: "CSS",
  },
  {
    id: 3,
    skillSvg: "https://img.icons8.com/color/48/javascript--v1.png",
    skillTitle: "JavaScript",
  },
  {
    id: 4,
    skillSvg: "https://img.icons8.com/color/48/tailwindcss.png",
    skillTitle: "Tailwind CSS",
  },
  {
    id: 5,
    skillSvg: "https://img.icons8.com/color/48/bootstrap--v2.png",
    skillTitle: "Bootstrap",
  },
  {
    id: 6,
    skillSvg: "https://img.icons8.com/color/48/react-native.png",
    skillTitle: "React",
  },

  {
    id: 7,
    skillSvg: "https://img.icons8.com/glyph-neue/64/000000/github.png",
    skillTitle: "Git & GitHub",
  },
];

const Skills = () => {
  return (
    <div className="cont">
      <h1>Skills</h1>
      <div className="skill__box">
      {SkillsData.map((item) => (
        <div className="skills" key={item.id}>
          
              <div className="skill__logo">
                <img  src={item.skillSvg} alt="" />
              </div>
              <div className="skill__logoName">
                {item.skillTitle}
            </div>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default Skills;
