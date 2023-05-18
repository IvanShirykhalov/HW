import React from 'react'
import s from './FriendMessage.module.css'
import avatar from "../avatar.png";
import {MessageType} from "../HW1";

type FriendMessageType = {
    message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    src={avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {'22:00'}
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
