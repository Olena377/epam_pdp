import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from 'react-file-input';
import EmojiPicker from 'emojione-picker';

class Conversation extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            isOpened: false
        }
    }
    handleTextChange(event) {
        this.setState({ text: event.target.value });
    };
    handleChange(event) {
        console.log('Selected file:', event.target.files[0]);
    };
    showEmoji() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };
    render(){
        return (
            <div className="conversation">
                <div className="conversation__messages">
                    {this.props.messages1.map(function(message){
                            return (
                                <div className="conversation__message" key={message.id}>
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
                    {this.props.messages2.map(function(message, i){
                        return (
                                <div className="conversation__message conversation__message-right" key={message.id}>
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
                    <label className="fa fa-paperclip fa-2x conversation__icon conversation__icon--clip">
                        <FileInput
                            id="myImage"
                            accept=".png,.gif,.txt"
                            onChange={this.handleChange.bind(this)}/>
                    </label>
                    <textarea className="conversation__input" placeholder="Type your message..." value={this.state.text} onChange={this.handleTextChange.bind(this)}></textarea>
                    <div className="conversation__wrapper">
                        <a className={this.state.isOpened ? "fa fa-smile-o fa-2x conversation__icon conversation__icon--smile" : "fa fa-smile-o fa-2x conversation__icon conversation__icon--smile conversation__icon--opened"}
                                    aria-hidden="true"
                                    onClick={this.showEmoji.bind(this)}/>
                        <EmojiPicker className={this.state.isOpened ? " " : "display-none"} onChange={function(data){
                          console.log("Emoji chosen", data);
                        }} />
                        <button className="fa fa-chevron-circle-right fa-3x conversation__icon conversation__icon--submit"
                                aria-hidden="true"
                                disabled={!this.state.text}>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
};

export default Conversation;