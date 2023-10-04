import "./App.css";
import Personalnfo from "./components/Personalnfo";
import SkillsList from "./components/SkillsList";
import InterestList from "./components/InterestList";
function App() {
	return (
		<div className="App">
			<Personalnfo 
        name="Mahir Asief"
        age="26"
        gender="Male"
        email="asiefmahir1@gmail.com"
        phone="+88 01713121212"
        address="Rajshahi"
        country="BD"
      />

      <SkillsList
        skills={['React', 'Redux', 'JS']}
       />

       <InterestList
         interests={['Sports', 'theme Development']}
        />
       <hr/>

			<Personalnfo 
        name="Rashed Vai"
        age="20"
        gender="Male"
        email="rashed@gmail.com"
        phone="+91 9876543210"
        address="Dhaka"
        country="BD"
      />
      <SkillsList
        skills={['React', 'Redux', 'NodeJs', 'JS', 'WP']}
        />

      <InterestList
        interests={['Music', 'Plugin Development']}
        />

			<hr />
			<Personalnfo 
        name="Ethila"
        age="22"
        gender="Female"
        email="ethila@gmail.com"
        address="Khulna"
        country="BD"
      />
      <SkillsList
        skills={['React', 'Redux', 'NodeJs', 'JS', 'WP', 'Python', 'Django']}
        />

      <InterestList
        interests={['Music', 'Plugin Development', 'AI']}
        />
		</div>
	);
}

export default App;
