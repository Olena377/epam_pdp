// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';


// Create class called HelloBox that extends the base React Component class
class Conversation extends React.Component {
    render(){
        return (
            <div className="conversation">
                <div className="conversation__messages">
                    <div className="conversation__message">
                        <div className="conversation__personal conversation__personal--margin-right">
                            <img className="conversation__image" src="../src/img/User.png" alt="User Photo" />
                            <time className="conversation__time">12:47</time>
                        </div>
                        <div className="conversation__text">
                            <p>It goes a little something like this</p>
                        </div>
                    </div>
                    <div className="conversation__message">
                        <div className="conversation__personal conversation__personal--margin-right">
                            <img className="conversation__image" src="../src/img/User.png" alt="User Photo" />
                            <time className="conversation__time">12:47</time>
                        </div>
                        <div className="conversation__text">
                            <p>It goes a little something like this It goes a little something like this It goes a little something like this</p>
                        </div>
                    </div>
                    <div className="conversation__message conversation__message-right">
                        <div className="conversation__text conversation__text--color">
                            <p>It goes a little something like this It goes a little something like this It goes a little something like this</p>
                        </div>
                        <div className="conversation__personal conversation__personal--margin-left">
                            <img className="conversation__image" src="../src/img/User.png" alt="User Photo" />
                            <time className="conversation__time">12:47</time>
                        </div>
                    </div>
                    <div className="conversation__message conversation__message-right">
                        <div className="conversation__text conversation__text--color">
                            <p>It goes a little something like this It goes a little something like this It goes a little something like this</p>
                        </div>
                        <div className="conversation__personal conversation__personal--margin-left">
                            <img className="conversation__image" src="../src/img/User.png" alt="User Photo" />
                            <time className="conversation__time">12:47</time>
                        </div>
                    </div>

                </div>
                <div className="conversation__footer">
                    <a className="fa fa-paperclip fa-2x conversation__icon conversation__icon--clip" aria-hidden="true"></a>
                    <input className="conversation__input" placeholder="Type your message..."></input>
                    <div className="conversation__wrapper">
                        <a className="fa fa-smile-o fa-2x conversation__icon conversation__icon--smile" aria-hidden="true"></a>
                        <a className="fa fa-chevron-circle-right fa-3x conversation__icon" aria-hidden="true"></a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Conversation;