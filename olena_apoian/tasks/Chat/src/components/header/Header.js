import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    render(){
        return (

            <header className="header">
                <a href="#" className="fa fa-arrow-left fa-lg header__icon--left"></a>
                <h2 className="header__name">{this.props.friend.name}<span className="header__message">&nbsp; is typing...</span></h2>
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
};
Header.propTypes = {
    name: React.PropTypes.string,
};

export default Header;