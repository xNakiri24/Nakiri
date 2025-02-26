import React from 'react'
import  "../../css/styles.css"

const Profile = () => {
  return (
    <>
    
        <div className='profile-container'>
            
            <section className='introduction'>
                
                <h2>About Me</h2>
                <p>I am a Bachelor of Science in Information Technology graduate with a strong passion for problem-solving and developing user-friendly solutions. With experience in technical support, logistics, and web development, I am eager to leverage my skills to maximize productivity and efficiency. A fast learner with a versatile skill set, I take initiative and demonstrate accountability in every task I undertake.</p>
            
            </section>
            <hr />
            <section className='experience'>
                <h2>Experience</h2>
                <h3>ICCT Colleges - Information Technology Intern (Jan 2024 - Apr 2024)</h3>
                <ul>
                    <li>Provided technical support for professors and students.</li>
                    <li>Assisted students with the ICCT Student Portal.</li>
                    <li>Managed inventory using Google Sheets and Microsoft Excel.</li>
                    <li>Served as a Front Desk Assistant.</li>
                </ul>
                <h3>HEADWAY INC. - Logistics Officer - Assistant (July 2024 - January 2025)</h3>
                <ul>
                    <li>Processed and reviewed documents to minimize errors.</li>
                    <li>Utilized SAP for document handling and logistics operations.</li>
                    <li>Coordinated with multiple departments for seamless workflow.</li>
                    <li>Scheduled and assisted in real-time communication for on-time deliveries.</li>
                    <li>Performed various clerical tasks.</li>
                </ul>
            </section>
            <hr />
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Software & Tools: SAP, Microsoft Office (Word, Excel), Google Sheets</li>
                    <li>Web Development: HTML, CSS, JavaScript</li>
                    <li>Programming Languages: Python, JavaScript, PHP</li>
                    <li>Database Management: MySQL (XAMPP), MongoDB, Firebase (Basic CRUD)</li>
                    <li>Version Control: Git (clone, commit, push, pull, branch switching, GitHub Pages)</li>
                    <li>System Design: Basic understanding of system flow and design principles</li>
                    <li>Data Structures & Algorithms: Basic knowledge</li>
                </ul>
            </section>
            <hr />
            <section>
                <h2>Education</h2>
                <h3><strong>ICCT Colleges Sumulong Campus</strong></h3>
                <h3>Bachelor of Science in Information Technology (2020 – 2024)</h3>
                <h3><strong>International Electronics and Technical Institute, Inc.</strong></h3>
                <h3>TVL - ICT (2018 – 2020)</h3>
            </section>
            <p>I am always open to new opportunities where I can apply my skills, learn, and contribute to meaningful projects.</p>
            <hr />
            <div className="profile-footer">
                <address>8 Rodeanna 5 Tanguile ST. Brgy. Fortune, Marikina City </address>
                <p>Please check my other website <a href="http://www.nakiri.space" target="_blank" rel="noopener noreferrer">Nakiri's website</a></p>
                <p>Email me at <a href="mailto:christianalupit24@outlook.com">christianalupit24@outlook.com</a></p>
                <p>Contact me at <a href="tel:+639939609498">09939609498</a></p>
                <p>&copy; 2025 Nakiri's group of website. All rights reserved.</p>
            </div>

        </div>

        
    
    </>
  )
}

export default Profile;