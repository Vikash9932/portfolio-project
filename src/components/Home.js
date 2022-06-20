import React from "react";

import skills from '../assets/skills'
const Home = () => {

  return <div className="home">
    <div className="home__heading">
      <div className="home__heading--main">Welcome To My Page</div>
      <div className="home__heading--subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab rerum soluta itaque fugit sequi? Quos debitis harum labore exercitationem.</div>
    </div>
    <div className="home__skills">
      <div className="home__skills__heading">
        <div className="home__skills__heading--main">My Skills</div>
        <div className="home__skills__heading--subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, corporis molestias omnis porro quas inventore!</div>
      </div>
      <div className="home__skills--line"><hr /></div>
      <div className="home__skills_all">
        {skills.map(skill => <div key={skill.name} className="home__skills__all__each">
          <div className="home__skills__all__each--heading">{skill.name}</div>
          <div className="home__skills__all__each--bar"><progress max="20" value={skill.progress} /></div>
        </div>
        )}
      </div>
    </div>
  </div>;
};

export default Home;
