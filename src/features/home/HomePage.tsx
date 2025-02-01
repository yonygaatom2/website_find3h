import './HomePage.css'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Bottomsheet from '../../cores/utils/modals/bottomsheet/bottomsheet'


const HomePage: React.FC = () => {
    const [showBottomsheet, setShowBottomsheet] = useState<boolean>(false)

    return (
        <section className="homePage">
            <BiSearch
                onClick={(e) => {
                    e.preventDefault()
                    setShowBottomsheet(true)
                }}
                className='searchUserIcon'
            />
            <Bottomsheet
                showBottomsheet={showBottomsheet}
                closeBottomsheet={(e) => {
                    e.preventDefault()
                    setShowBottomsheet(false)
                }}
                child={<>
                    Atom
                </>}
            />
        </section>
    )
}

export default HomePage