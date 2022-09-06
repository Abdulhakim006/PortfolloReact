import React from 'react'

function Footer() {
    return (
        <div>
            <div className='Footer'>
                <div className='fotimg'>
                    <img src={require('./imge/Hand.png')} />
                    <div>
                        <button className='btn btn-dark mx-4'>Apple Store</button>
                        <button className='btn btn-dark'>Google Store</button>
                    </div>

                </div>
                <div className='footerr'>
                    <div className='fot'>
                        <b>Students</b>
                        <br />
                        <br />
                        <br />
                        <p>How it works</p>
                        <p>Who's hiring</p>
                        <p>Career tips</p>
                        <p>Job roles</p>
                        <p>Help center</p>
                    </div>
                    <div className='fot'>
                        <b>Employers</b>
                        <br />
                        <br />
                        <br />
                        <p>Solutions</p>
                        <p>Products</p>
                        <p>Custome</p>
                        <p>Resource</p>
                        <p>Blog</p>
                        <p>Request demo</p>
                    </div>
                    <div className='fot'>
                        <b>Career Centers</b>
                        <br />
                        <br />
                        <br />
                        <p>Marketing toolkit</p>
                        <p>Resources</p>
                        <p>Events</p>
                        <p>Security</p>
                        <p>Request demo</p>
                    </div>
                    <div className='fot'>
                        <b>Company</b>
                        <br />
                        <br />
                        <br />
                        <p>Marketing toolkit</p>
                        <p>Resources</p>
                        <p>Events</p>
                        <p>Security</p>
                        <p>Request demo</p>
                    </div>
                    <div className='fot'>
                        <b>Support</b>
                        <br />
                        <br />
                        <br />
                        <p>Marketing toolkit</p>
                        <p>Resources</p>
                        <p>Events</p>

                    </div>
                </div>
            </div>
            <div className='line'></div>
            <div className='fo'>
                <p>©2021 Handshake. All rights resierved   Privacy Policy    Terms of Service</p>
                <div className='Icons'>
                    <a href=""> <img src={require('./imge/instagram.png')} /></a>
                    <a href=""> <img src={require('./imge/meta.png')} /></a>
                    <a href=""> <img src={require('./imge/twitter.png')} /></a>
                    <a href=""> <img src={require('./imge/in.png')} /></a>
                  
                </div>
            </div>
        </div>
    )
}

export default Footer