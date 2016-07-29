// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';


// Create class called HelloBox that extends the base React Component class
class Header extends React.Component {
    render(){
        let userName = "kirsten mckellar";
        return (

            <header className="header">
                <a href="#" className="fa fa-arrow-left fa-lg header__icon--left"></a>
                <h2 className="header__name">{userName}<span className="header__message">&nbsp; is typing...</span></h2>
                <a href="#" className="fa fa-ellipsis-h fa-lg header__icon--right"></a>
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
                </ul>
            </header>

        )
    }
}

//ReactDOM.render(
//  <Header />, document.getElementById("header")
//);
export default Header;