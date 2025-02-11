import React from 'react'
import "../../css/styles.css"
import mail from "../../assets/mail.svg"
import github from "../../assets/github.svg"
import phone from "../../assets/phone.svg"


const Logo = () => {
  return (
    <>
        <div className='logo-container'>
            <a href="mailto:christianalupit24@outlook.com"><img src={mail} alt="" /></a>
            <a href="https://github.com/xNakiri24" target='_blank'><img src={github} alt="" /></a>
            <a href="tel:09939609498"><img src={phone} alt="" /></a>
        </div>
    </>
  )
}

export default Logo