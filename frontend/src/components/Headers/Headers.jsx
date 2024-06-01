import React from 'react'
import './Headers.css'

const Headers = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Start Your Food Journey</h2>
            <p>Dining House offers a dining experience like no other, 
              where every dish tells a story and every bite ignites the senses. 
              From our meticulously crafted menu showcasing a fusion of global 
              flavors to our warm and inviting ambiance, we invite you to embark on a culinary journey with us.</p>
            <a href='#explore-menu'><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Headers