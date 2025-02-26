import React from 'react'
import palindrome from "../../assets/palindrome.png"
import palindrome1 from "../../assets/palindrome1.png"

const Project = () => {
  return (
   <>
    <div className='project-container'>
        <div className="palindrome-project">
          <div className="snap-container">
            <img src={palindrome} alt="" />
            <img src={palindrome1} alt="" />
          </div>
          <div className='link-wrapper'>
            <a href="https://github.com/xNakiri24/palindrome_checker_ai" target="_blank" rel="noopener noreferrer">Github Link</a>
            <a href="https://palindrome.nakiri.space/" target="_blank" rel="noopener noreferrer">Website Link</a>
          </div>
          <h2>Palindrome Checker with meaning search using Urban Dictionary</h2>
          <p> The website is used to check if the word is a palindrome and search its meaning in urban dictionary using its API </p>
          <details>
          <summary>Key points to remember about this project</summary>
          <ul>
            <li>The project is made with HTML/SCSS <strong>(CSS pre-processor)</strong> /Javascript</li>
            <li>The project is made to learn fetch API of javascript</li>
            <li>The project utilize urban dictionary API</li>
            <li>The word are only stored in localstorage of your browser if the page refresh the word will disappear</li>
            <li>Additional change/updates are to be made such as database integration and username inclusion for the user that inserts the word</li>
            <li>The website only use github pages and hostinger domain to have a custom domain</li>
            <li>Please check the github repository for other info and the code</li>
            <li>If a word can't find in the urban dictionary the word will not be displayed</li>
          </ul>
          </details>
          <details>
            <summary>Why urban dictionary is used for meaning check?</summary>
            <p>Because urban dictionary is community loaded word where anyone have a chance to put there own meaning for a word even if it is existent or non-existent</p>
          </details>
          <details>
            <summary>Can you (the code reader or contributor) change the API used?</summary>
              <p>No but you can make a clone of my code and add your own API, recommended api:</p>
              <ul>
                <li>Gemini API - Will cost you $0.10 per 1M token call and tried a single call it takes 7049 token.</li>
                <li>ChatGPT API I saw the least expensive model is GPT-4o mini see the page for price reference "https://openai.com/api/pricing/"</li>
                <li>Deepseek API Free, but you need to run the model on you machine or use cloud instances to run the model. Still cost you some money or need a stronger machine, other way is to an API call on deepseek server that will cost you some moeny per tokens like the other model. </li>
                <li>Merriam Dictionary Free but 1000 query per day</li>
              </ul>
          </details>
          <details>
            <summary>Urban Dictionary cost</summary>
            <ul>
              <li>1000 query per hour</li>
              <li>500,000 query per month</li>
            </ul>
          </details>
        </div>

    </div>
   </>
  )
}

export default Project