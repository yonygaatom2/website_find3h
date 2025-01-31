import './HomePage.css'
import React from 'react'
import { BiSearch } from 'react-icons/bi'


const HomePage: React.FC = () => {
    return (
        <section className="homePage">
            <BiSearch className='searchUserIcon' />
        </section>
    )
}

export default HomePage