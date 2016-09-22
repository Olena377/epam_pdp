import '../css/master.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

import Header from './../components/header/Header';
import UserProfile from './../components/user-profile/UserProfile';
import Sidebar from './../components/sidebar/Sidebar';
import Conversation from './../components/conversation/Conversation';
import Footer from './../components/footer/Footer';



const Container = React.createClass({
    render () {
        var friend = {
            name: "kirsten mckellar",
            city: "Cape Town, RSA",
            nickname: "Killa Kella",
            telephone: "072 143 9920",
            dateOfBirth: "July 12, 1988",
            gender: "female",
            image: "../src/img/User.png"
        };
        var user = {
            name: "Matt Thompson"
        };
        var messages1 = [
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "12:47",
                text: "It goes a little something like this"
            },
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "12:48",
                text: "It goes a little something like this, something like this"
            },
        ];
        var messages2 = [
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "12:47",
                text: "It goes a little something like this"
            },
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "12:48",
                text: "It goes a little something like this, something like this"
            },
        ];

        return (
            <div className='container'>
                <Header friend={friend}/>
                <UserProfile user={user} friend={friend}/>
                <Conversation messages1={messages1} messages2={messages2}/>
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
  <Container />, document.getElementById("container")
);