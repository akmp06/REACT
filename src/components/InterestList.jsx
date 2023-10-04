const InterestList = (props) => {
    console.log(props, 'props');
    return (
            <div className="interests">
                {/* Interest */}
              <h2>My Interests:</h2>
              <ul>
               {props.interests.map((interest) => (
                <li key={interest}>{interest}</li>
               ))}
              </ul>
            </div> 
    )
}


export default InterestList