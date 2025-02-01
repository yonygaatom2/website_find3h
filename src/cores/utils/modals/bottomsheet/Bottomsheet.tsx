import React, { useEffect } from 'react'
import './Bottomsheet.css'
import { CgClose } from "react-icons/cg";

interface BottomsheetProps {
    showBottomsheet: boolean,
    child: React.ReactElement,
    closeBottomsheet: React.ReactEventHandler,
}

const Bottomsheet: React.FC<BottomsheetProps> = (props) => {
    useEffect(() => {
        if (!props.showBottomsheet) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [props.showBottomsheet]);

    if (!props.showBottomsheet) {
        return <></>
    }

    return (
        <section className="bottomsheet">
            <div onClick={props.closeBottomsheet} className="bottomsheetCloseWrapper"></div>
            <div className="bottomsheetWrapper">
                <div className="bottomsheetAppBar">
                    <div onClick={props.closeBottomsheet} className="closeBottomsheet">
                        <CgClose className='closeBottomsheetIcon' />
                    </div>
                </div>
                {
                    props.child
                }
            </div>
        </section>
    )
}

export default Bottomsheet