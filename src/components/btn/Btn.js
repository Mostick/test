import React from "react";
import preloader from '../../svg/Spinner-1s-40px.svg';

function Btn (props){
    return (
        <div className='news-list-btn' onClick={props.onBtnLoadClick}>
            {
                props.preloader ? <img src={preloader} alt=""/> : props.text
            }
        </div>
    )
}

export default Btn;