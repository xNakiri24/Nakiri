import React from 'react'

const Home = () => {
  return (
    <>
        <div className="landing-container">
          
                <h1 className='first-name'>
                    Christian Philip
                </h1>
                <h1 className='middle-last'>Pansacala Alupit</h1>

                <h2 className='position'>Frontend Developer</h2>
                <br />
                <hr />
                <h3 className='skill-stack'>Stack</h3>
                <h3 className='skill-stack'>PHP SQL</h3>
                <h3 className='skill-stack'>JAVASCRIPT</h3>
                <h3 className='skill-stack'>HTML</h3>
                <h3 className='skill-stack'>CSS</h3>
                <details className="react-stack">
                  <summary>-- ReactJS and Firebase</summary>
                  <p>Still learning the library and database</p>
                </details>
                <hr />
                <br />
                <h3 className='design-credit'>This website is made using ReactJS and inspired with JYPE artist websites. Please click <a href="https://twice.jype.com/" target='_blank'>here</a> for the reference</h3>
                <p className='disclaimer'>This website is still a work in progress as I continue to learn more about the library. Please bear with me as it may not look the most polished just yet.</p>
        </div>
    </>
  )
}

export default Home