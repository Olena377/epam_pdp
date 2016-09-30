import React from 'react';
import ReactDOM from 'react-dom';
import OnClickOutside from 'react-onclickoutside';

export class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }
    show() {
        this.setState({ visible: !this.state.visible});
    };
    handleClickOutside(event) {
        return this.state.visible ? this.show() : false;
    }

    render() {
        return (
            <div>
                <a href="#" className="fa fa-ellipsis-h fa-lg header__icon--right" onClick={this.show.bind(this)}></a>
                <ul className={this.state.visible ? "header__nav " : "header__nav display-none"} >
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
            </div>
        )
    }
};

export default OnClickOutside(Menu);
