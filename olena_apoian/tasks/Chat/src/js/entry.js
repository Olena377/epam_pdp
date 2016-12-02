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
            dateOfBirth: "1988-07-12",
            gender: "female",
            image: "../src/img/User.png"
        };
        var user = {
            name: "Matt Thompson",
            city: "Cape Town, RSA",
            nickname: "Mettew Perry",
            telephone: "072 555 9920",
            dateOfBirth: "1987-07-13",
            gender: "male",
            image: "../src/img/User.png"
        };
        var messages1 = [
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "2014-09-08T08:02:17-05:00",
                text: "It goes a little something like this"
            },
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "2014-09-08T08:02:17-05:00",
                text: "It goes a little something like this, something like this"
            }
        ];
        var messages2 = [
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "2014-09-08T08:02:17-05:00",
                text: "It goes a little something like this"
            },
            {
                id: uuid.v4(),
                image: "../src/img/User.png",
                time: "2014-09-08T08:02:17-05:00",
                text: "It goes a little something like this, something like this"
            }
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