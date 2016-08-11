// Import CSS
import '../css/master.scss';

// Import React and JS
//import ReactDOM from 'react-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../components/header/Header';
import UserProfile from './../components/user-profile/UserProfile';
import Sidebar from './../components/sidebar/Sidebar';
import Conversation from './../components/conversation/Conversation';
import Footer from './../components/footer/Footer';

// Render!

const Container = React.createClass({
    render () {
        return (
            <div className='container'>
                <Header />
                <UserProfile />
                <Conversation />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
  <Container />, document.getElementById("container")
);