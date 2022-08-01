import React from 'react'
const skills = [{ name: 'djf', progress: 80 }]
const headers = ['React', 'Redux', 'HTML/CSS/JavaScript', 'Bootstrap']
const Projects = () => {

    const handleClick = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <div className="projects">
            <div className="projects__heading">
                <div className="projects__heading--main">Welcome To My Projects</div>
                <div className="projects__heading--subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab rerum soluta itaque fugit sequi? Quos debitis harum labore exercitationem.</div>
            </div>
            <div className="projects__list">
                <div className="projects__list__header">
                    {headers.map(header => <div className='projects__list__header--item' key={header} onClick={handleClick}>{header}</div>)}
                </div>
                <div className="projects__list__all">
                    {skills.map(skill =>
                        <div key={skill.name} className="projects__list__all__each">
                            <div className="projects__list__all__each__bar--heading">{skill.name}</div>
                            <div className="projects__list__all__each__bar--progress" >
                                <div className="projects__list__all__each__bar__progress--value" style={{ width: `${skill.progress}%` }}></div>
                            </div>
                            <span className="projects__list__all__each--progress">{skill.progress}%</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
