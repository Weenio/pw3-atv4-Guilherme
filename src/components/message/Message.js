import {useState, useEffect} from 'react';

import Styles from './Message.module.css';

export default function Message({type, msg}){

    const [visible, SetVisible] = useState(false);

    useEffect( () => {

        if(!msg){
            SetVisible(true);
            return;
        }

        SetVisible(true);

        const timer = setTimeout( () => {
            SetVisible(false)
        }, 3000);

        return() => {
            clearTimeout(timer);
        }
    },[msg])

    return(
        <>
            {
                visible && (
                    <div className={`${Styles.message} ${Styles[type]}`}>
                        <p>{msg}</p>
                    </div>
                )
            }
        </>
    )

}