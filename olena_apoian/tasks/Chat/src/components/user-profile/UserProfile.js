
import React from 'react';
import ReactDOM from 'react-dom';


class UserProfile extends React.Component {
    render(){
        return (
            <div className="profile">
                <div className="profile-settings">
                    <a href="#" className="fa fa-bell fa-2x header__anchor profile-settings__icon" aria-hidden="true"></a>
                    <h3 className="profile-settings__name">{this.props.user.name}</h3>
                </div>
                <div className="profile-details">
                    <a href="#" className="profile-details__icon--left" />
                    <div className="profile-details__block">
                        <img className="profile-details__image" src={this.props.friend.image} alt="User photo" />
                        <h2 className="profile-details__name">{this.props.friend.name}</h2>
                        <p className="profile-details__city">{this.props.friend.city}</p>
                    </div>
                    <a href="#" className="fa fa-ellipsis-h fa-2x profile-details__icon--right" />
                </div>
                <ul className="profile-list">
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Nickname:</h4>
                        <span className="profile-list__value">{this.props.friend.nickname}</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Tel:</h4>
                        <span className="profile-list__value">{this.props.friend.telephone}</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Date Of Birth:</h4>
                        <span className="profile-list__value">{this.props.friend.dateOfBirth}</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Gender:</h4>
                        <span className="profile-list__value">{this.props.friend.gender}</span>
                    </li>
                </ul>
            </div>
        )
    }
};
UserProfile.propTypes = {
    name: React.PropTypes.string,
};
export default UserProfile;
