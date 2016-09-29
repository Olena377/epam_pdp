import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/Menu'

class Header extends React.Component {
    constructor() {
        super();
    }
    showMenu() {
        this.refs.menu.show();
    };
    render(){
        return (
            <header className="header">
                <a href="#" className="fa fa-arrow-left fa-lg header__icon--left"></a>
                <h2 className="header__name">{this.props.friend.name}<span className="header__message">&nbsp; is typing...</span></h2>
                <a href="#" className="fa fa-ellipsis-h fa-lg header__icon--right" onClick={this.showMenu.bind(this)}></a>
                <Menu ref="menu"></Menu>
            </header>

        )
    }
};


Header.propTypes = {
    name: React.PropTypes.string,
};

export default Header;