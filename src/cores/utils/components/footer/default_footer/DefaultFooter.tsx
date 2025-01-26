import React from 'react'
import './DefaultFooter.css'


const DefaultFooter: React.FC = () => {
    return (
        <footer className='defaultFooter'>
            <div className="linksToOtherPage">
                <p>About</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <p>&copy; 2050 Find3H from YMC2A</p>
        </footer>
    )
}

export default DefaultFooter