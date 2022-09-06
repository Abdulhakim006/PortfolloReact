import React from 'react'
import { } from 'react-bootstrap-icons';
function Page2() {
  return (
    <div className='Page2'>
      <br />
      <br />
      <br />
      <br />
      <h1>Full-Time. Part-Time.</h1>
      <h1>Paid Internship's</h1>
      <h6>Handshake has the latest jobs from employers hiring at your school</h6>

      <div className='Cards'>
        <div className='card'>
          <img src={require('./imge/Frame.png')} />

          <b>Find Jobs For You</b>
          <p>Receive personalized job recommendations</p>
        </div>
        <div className='card'>
          <img src={require('./imge/Frame.png')} />

          <b>Attend virtual recruiting events</b>
          <p>Stand out to employers during virtual fairs and events</p>
        </div>
        <div className='card'>
          <img src={require('./imge/Frame.png')} />

          <b>Get hired</b>
          <p>Apply to jobs meant for students like you</p>
        </div>
      </div>
      <button className='btn btn-primary '>How It Works</button>
    </div>
  )
}

export default Page2