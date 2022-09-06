import React from 'react'

function Navvv() {
    return (
        <div className='NavHand'>
            <nav class="navbar navbar-light bg-light">
                <img src={require('../imgs/HandShake.png')} />
           
            </nav>
            <ul>
                    <li><a href="">OverWiew</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Who's hiring</a></li>
                    <li><a href="">Career Tips</a></li>
                </ul>
        </div>
    )
}

export default Navvv