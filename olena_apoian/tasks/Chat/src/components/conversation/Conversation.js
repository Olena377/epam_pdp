import React from 'react';
import ReactDOM from 'react-dom';


class Conversation extends React.Component {
    render(){
        return (
            <div className="conversation">
                <div className="conversation__messages">
                    {this.props.messages1.map(function(message){
                            return (
                                <div className="conversation__message">
                                    <div className="conversation__personal conversation__personal--margin-right">
                                        <img className="conversation__image" src={message.image} alt="User Photo" />
                                        <time className="conversation__time">{message.time}</time>
                                    </div>
                                    <div className="conversation__text conversation__text--left">
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {this.props.messages2.map(function(message){
                        return (
                                <div className="conversation__message conversation__message-right">
                                    <div className="conversation__text  conversation__text--right">
                                    <p>{message.text}</p>
                                </div>
                                <div className="conversation__personal conversation__personal--margin-left">
                                    <img className="conversation__image" src={message.image} alt="User Photo" />
                                    <time className="conversation__time">{message.time}</time>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="conversation__footer">
                    <a className="fa fa-paperclip fa-2x conversation__icon conversation__icon--clip" aria-hidden="true"></a>
                    <textarea className="conversation__input" placeholder="Type your message..."></textarea>
                    <div className="conversation__wrapper">
                        <a className="fa fa-smile-o fa-2x conversation__icon conversation__icon--smile" aria-hidden="true"></a>
                        <a className="fa fa-chevron-circle-right fa-3x conversation__icon" aria-hidden="true"></a>
                    </div>
                </div>
            </div>

        )
    }
};

export default Conversation;