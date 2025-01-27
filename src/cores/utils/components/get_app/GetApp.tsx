import './GetApp.css'
import React from 'react'
import AppStore from '../../../../assets/icons/appstore.svg'
import PlayStore from '../../../../assets/icons/playstore.svg'

const GetApp: React.FC = () => {
    return (
        <div className="getTheApp">
            <p className='getAppTitle'>Get the app</p>
            <div className="storeButtons">
                <button className='storeButton'>
                    <img className='storeImage' src={PlayStore} alt="Playstore Image" />
                </button>
                <button className='storeButton'>
                    <img className='storeImage' src={AppStore} alt="Appstore Image" />
                </button>
            </div>
        </div>
    )
}

export default GetApp