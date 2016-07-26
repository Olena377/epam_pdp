// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';


// Create class called HelloBox that extends the base React Component class
class Header extends React.Component {
    render(){
        let userName = "kirsten mckellar";
        let name = "Matt Thompson";
        return (

            <header className="header">
                <p className="fa fa-arrow-left fa-lg header__icon--left"></p>
                <h2 className="user_name">{userName}<span className="header__message">&nbsp; is typing...</span></h2>
                <p className="fa fa-ellipsis-h fa-lg header__icon--right"></p>
                <ul className="header__nav">
                    <li className="header__item">
                        <a href="#" className="fa fa-star fa-2x header__anchor" aria-hidden="true"></a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="fa fa-phone fa-2x header__anchor" aria-hidden="true"></a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="fa fa-video-camera fa-2x header__anchor" aria-hidden="true"></a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="fa fa-bell fa-2x header__anchor" aria-hidden="true"></a>
                    </li>
                </ul>
                <p className="another-name">{name}</p>
            </header>

        )
    }
}

//ReactDOM.render(
//  <Header />, document.getElementById("header")
//);
export default Header;