import React from 'react'
import './NavigationSheet.css'
import { SlBell } from "react-icons/sl";
import { BiSearch } from 'react-icons/bi'
import { BsBalloonHeart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen } from '../../slice/DashboardSlice';
import { AppDispatch, AppState } from '../../../../Store';
import AppIconButton from '../../../../cores/utils/components/buttons/icon_button/AppIconButton'

const NavigationSheet: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const state = useSelector((state: AppState) => state.dashboard)

    const isSearchPage: boolean = state.pageIndex === 0;
    const isCouplePage: boolean = state.pageIndex === 1;
    const isProfilePage: boolean = state.pageIndex === 3;
    const isNotificationPage: boolean = state.pageIndex === 2;

    return (
        <div className="navigationSheet">
            <AppIconButton
                isSelected={isSearchPage}
                className='firstIconButton'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changeScreen(0))
                }}
                label='Search'
                icon={<BiSearch
                    style={{
                        height: '24px',
                        width: '24px',
                        color: 'var(--light)',
                        backgroundColor: 'transparent',
                        opacity: isSearchPage ? 1 : 0.6,
                    }}
                />
                }
            />
            <AppIconButton
                isSelected={isCouplePage}
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changeScreen(1))
                }}
                label='Couple Profile'
                icon={<BsBalloonHeart
                    style={{
                        height: '24px',
                        width: '24px',
                        color: 'var(--light)',
                        backgroundColor: 'transparent',
                        opacity: isCouplePage ? 1 : 0.6,
                    }}
                />
                }
            />
            <AppIconButton
                isSelected={isNotificationPage}
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changeScreen(2))
                }}
                label='Notification'
                icon={<SlBell
                    style={{
                        height: '24px',
                        width: '24px',
                        color: 'var(--light)',
                        backgroundColor: 'transparent',
                        opacity: isNotificationPage ? 1 : 0.6,
                    }}
                />
                }
            />
            <AppIconButton
                isSelected={isProfilePage}
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changeScreen(3))
                }}
                label='Profile'
                icon={<IoPersonOutline
                    style={{
                        height: '24px',
                        width: '24px',
                        color: 'var(--light)',
                        backgroundColor: 'transparent',
                        opacity: isProfilePage ? 1 : 0.6,
                    }}
                />
                }
            />
        </div >
    )
}

export default NavigationSheet