import React from 'react'

function Page4() {
    return (
        <div className='Page4'>
            <br/>
            <br/>
            <br/>
            <br/>
           
            <h1>More than 550,000 employers hire</h1>
            <h1>students on Handshake</h1>
            <p>When you apply on Handshake, you have the advantage</p>
            <div className='cardss'>
                <div className='card'>
                    <img src={require('./imge/tiktok.png')} />
                    <div className='tex'>
                    <p>Tik Tok</p>
                    </div>
                    <b>Social Media</b>
                </div>

                <div className='card'>
                <img src={require('./imge/Pocket.png')} />
                    <div className='tex'>
                    <p>Pocket Games</p>
                    </div>
                    <b>Games</b>
                </div>
                <div className='card'>
                <img src={require('./imge/bankofAmerica.png')} />
                    <div className='tex'>
                    <p>Bank Of America</p>
                    </div>
                    <b>Finance</b>
                </div>
                <div className='card'>
                <img src={require('./imge/Target.png')} />
                    <div className='tex'>
                    <p>Target</p>
                    </div>
                    <b>Major Reality</b>
                </div>
                <div className='card'>
                <img src={require('./imge/P&G.png')} />
                    <div className='tex'>
                    <p>Procter & Gamble</p>
                    </div>
                    <b>Consumer Goods</b>
                </div>
                <div className='card'>
                <img src={require('./imge/generalMils.png')} />
                    <div className='tex'>
                    <p>General Mills</p>
                    </div>
                    <b>Food & Beverage</b>
                </div>
                <div className='card'>
                <img src={require('./imge/P&G.png')} />
                    <div className='tex'>
                    <p>KIPP Schools</p>
                    </div>
                    <b>Education</b>
                </div>
            </div>
            <button className='btn btn-primary mt-5'>Who's hiring</button>
        </div>
    )
}

export default Page4