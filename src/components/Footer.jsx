import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiThreads } from 'react-icons/si'
import "../styles/footer.css" 

function Footer() {
  return (
    <div>
      <div className='logo-section'>

        <img className='logo-image' src="/guard.png" alt="picture of a shield" />
        <h1>Ready to turn ad waste into profit?</h1>
        <p>ClickGuard protects your pay-per-click ads in real time, with AI, customization, and full control. Get better leads. Cleaner traffic. Higher ROAS.</p>
        
        <div className='logo-section-button'>

          <button >Book a demoo</button>
          <button>Start 7-day free trial</button>
        </div>
        </div>

        <div>
        <h4>CLICKGUARD</h4>
        <li><a href='https://www.clickguard.com/why-clickguard'>What differentiates us
          </a></li>
          <li><a href='https://www.clickguard.com/about-us'>About us
          </a></li>
          <li><a href='https://www.clickguard.com/pricing'>Pricing
          </a></li>
          <li><a href='https://www.clickguard.com/features'>Features
          </a></li>
          <li><a href='https://www.clickguard.com/careers'>Carees
          </a></li>
          <li><a href='https://www.clickguard.com/contact-us'>Contact us
          </a></li>

        </div>

         <div>
        <h4>SOLUTIONS</h4>
          <li><a href='https://www.clickguard.com/success-stories'>Success stories
          </a></li>
          <li><a href='https://www.clickguard.com/use-cases'>Use cases
          </a></li>
          <li><a href='https://www.clickguard.com/industry-verticals'>Industry verticals
          </a></li>
          <li><a href='https://www.clickguard.com/ad-engines-formats'>Ad engines & format
          </a></li>
          

        </div>

         <div>
        <h4>RESOURCE</h4>
        <li><a href='https://www.clickguard.com/what-is-click-fraud'>Why is click fraud?
          </a></li>
          <li><a href='https://www.clickguard.com/blog/'>Blog
          </a></li>
          <li><a href='https://www.clickguard.com/glossary'>Glossary
          </a></li>
          <li><a href='https://www.clickguard.com/click-fraud-calculator'>Click fraud calculator
          </a></li>
          <li><a href='https://help.clickguard.com/hc/en-us'>Help center
          </a></li>
          <li><a href='https://www.clickguard.com/affiliate-program'>Affilate program
          </a></li>

        </div>
         <div>
        <h4>LEGAL</h4>
        <li><a href='https://www.clickguard.com/terms-of-service'>Terms of service
          </a></li>
          <li><a href='https://www.clickguard.com/privacy-policy'>Privacy policy
          </a></li>
          <li><a href='https://www.clickguard.com/cookie-declaration'>Cookie policy 
          </a></li>
          <li><a href='https://www.clickguard.com/data-processing-agreement'>Data processing agreement
          </a></li>
          <li><a href='https://www.clickguard.com/gdpr-information'>GDPR information
          </a></li>
          <li><a href='https://www.clickguard.com/ccpa'>CCPA
          </a></li>
          <li><a href='https://www.clickguard.com/data-security'>Data security
            </a></li>

        </div>

        <div>
          <h4>Follow us</h4>
          <div>
            <FaFacebookF size={24}/>
            <span>Facebook</span>
          </div>
          <div>
            <FaInstagram size={24}/>
            <span>Instagram</span>
          </div>
          <div>
            <FaXTwitter size={24}/>
            <span>X</span>
          </div>
          <div>
            <FaLinkedinIn size={24}/>
            <span>LinkedIn</span>
          </div>
          <div>
            <FaYoutube size={24}/>
            <span>Youtube</span>
          </div>
          <div>
            <SiThreads size={24}/>
            <span>Threads</span>
          </div>



        </div>
      

      </div>
    
  )
}

export default Footer
