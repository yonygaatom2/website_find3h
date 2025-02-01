import React from 'react'
import './CoupleDetailCard.css'
import { ProfileData } from '../../../../cores/utils/enums/ProfileData'
import ProfileImage from '../../../../cores/utils/components/images/profile_image/ProfileImage'

interface CoupleDetailCardProps {
    isMe: boolean,
    profile?: ProfileData | null,
    title: string | null | undefined,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
}


const CoupleDetailCard: React.FC<CoupleDetailCardProps> = (props) => {
    return (
        <div onClick={(e) => {
            if (props.onClick) {
                props.onClick?.(e)
            }
        }} className="coupleDetailCard">
            {
                props.isMe ? <ProfileImage
                    alt='User'
                    username=''
                    url='https://picsum.photos/200/300'
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "8px",
                    }}
                /> : null
            }
            <div className="profileCardDetailLabel">
                <p className="profileCardDetailTitle">
                    {props.title}
                </p>
                <p className="profileCardDetailValue">
                    {props.profile?.user.username.split(" ")[0]}
                </p>
            </div>
            {
                !props.isMe ? <ProfileImage
                    alt='User'
                    username=''
                    url='https://picsum.photos/200/300'
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "8px",
                    }}
                /> : null
            }
        </div>
    )
}

export default CoupleDetailCard