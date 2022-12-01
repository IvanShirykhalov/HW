import React from 'react'
import s from './Message.module.css'
import avatar from "../avatar.png";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number
    }
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src={avatar}
                     id={'hw1-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />

                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {'Oleg'}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {'Hi, how are you?'}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {'21:59'}
                {/**/}
            </div>
        </div>
    )
}

export default Message
