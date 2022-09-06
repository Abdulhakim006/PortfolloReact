import React from 'react'
// import Page6 from './page6';

function Page7() {
    return (
        <div className='page7'>
            <div className='text7'>
                <h2>Take the job search with you</h2>
                <p>Download the Handshake app to stay updated on fresh jobs and virtual events, then apply from anywhere</p>
            </div>
            <button className='btn btn-dark mx-3'> <img src={require('./imge/AppleLogo.png')} /> App Store</button>
            <button className='btn btn-dark'> Google Store</button>
            <div className='img'>
            <img src={require('./imge/phone.png')} />

            </div>
        </div>
    )
}

export default Page7