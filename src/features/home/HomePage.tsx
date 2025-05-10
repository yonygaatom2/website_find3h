import './HomePage.css'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchForms from './components/SearchForms'
import Bottomsheet from '../../cores/utils/modals/bottomsheet/Bottomsheet'


const HomePage: React.FC = () => {
    const [showBottomsheet, setShowBottomsheet] = useState<boolean>(false)

    return (
        <section className="homePage">
            <BiSearch
                onClick={(e) => {
                    e.preventDefault()
                    setShowBottomsheet(true)
                }}
                className="
                    p-4
                    h-[60px]
                    w-[60px]
                    rounded-[30px]
                    cursor-pointer
                    text-light-500
                    bg-primary-500
                "
            />
            <Bottomsheet
                showBottomsheet={showBottomsheet}
                closeBottomsheet={(e) => {
                    e.preventDefault()
                    setShowBottomsheet(false)
                }}
                child={<SearchForms />}
            />
        </section>
    )
}

export default HomePage