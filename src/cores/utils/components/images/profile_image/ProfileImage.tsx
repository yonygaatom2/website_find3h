import React from 'react'
import './ProfileImage.css'
import NetworkImage from '../network_image/NetworkImage'

export interface ProfileImageProps {
    alt: string,
    username: string,
    url?: string | null | undefined,
    showEditButton?: boolean | null | undefined,
    style?: React.CSSProperties | null | undefined,
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
    let profileImage: React.ReactElement;
    if (props.url === null || props.url === undefined) {
        profileImage = <div className="profileImagePlaceholderWrapper">
            <div className="profileImagePlaceHolder">
                <p className="profilePlaceholderName">
                    {props.username[0]}
                </p>
            </div>
        </div>
    } else {
        profileImage = <NetworkImage
            style={props.style ?? {
                width: "100px",
                height: "100px",
                borderRadius: "100px",
            }}
            url={props.url}
            alt={props.alt}
        />
    }

    return (
        <>
            {profileImage}
        </>
    )


}

export default ProfileImage