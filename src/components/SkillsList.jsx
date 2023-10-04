const SkillList = (props) => {
    console.log(props, 'props');
    return (
            <div className="skills">
                {/* <Skills /> */}
              <h2>My Skills</h2>
              <ul>
                {props.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
    )
}


export default SkillList