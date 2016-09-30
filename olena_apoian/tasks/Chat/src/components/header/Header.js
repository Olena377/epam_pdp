import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/Menu'

class Header extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <header className="header">
                <a href="#" className="fa fa-arrow-left fa-lg header__icon--left"></a>
                <h2 className="header__name">{this.props.friend.name}<span className="header__message">&nbsp; is typing...</span></h2>
                <Menu></Menu>
            </header>

        )
    }
};
Header.propTypes = {
    name: React.PropTypes.string,
};

export default Header;