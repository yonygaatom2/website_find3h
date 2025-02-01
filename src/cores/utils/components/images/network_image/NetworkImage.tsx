import React from 'react'

interface NetworkImageProps {
    alt: string,
    url?: string | null | undefined,
    style?: React.CSSProperties | null | undefined,
}

const NetworkImage: React.FC<NetworkImageProps> = (props) => {
    if (props.url === null) {
        return <></>
    }

    return (
        <img
            style={props.style ?? {}}
            src={props.url}
            alt={props.alt}
        />
    )
}

export default NetworkImage