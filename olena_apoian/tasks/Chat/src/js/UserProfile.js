// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';

// Create class called HelloBox that extends the base React Component class
class UserProfile extends React.Component {
    render(){
        let user_name = "Matt Thompson";
        let profile_name = "Kirsten Mckellar";
        let profile_city = "Cape Town, RSA";
        return (
            <div className="profile">
                <div className="profile-settings">
                    <i className="fa fa-bell fa-2x header__anchor profile-settings__icon" aria-hidden="true"></i>
                    <h3 className="profile-settings__name">{user_name}</h3>
                </div>
                <div className="profile-details">
                    <a href="#" className="fa fa-bell fa-2x profile-details__icon--left" />
                    <div className="profile-details__block">
                        <img src="src/img/User.png" alt="User photo" />
                        <h2>{profile_name}</h2>
                        <p>{profile_city}</p>
                    </div>
                    <a href="#" className="fa fa-ellipsis-h fa-2x profile-details__icon--right" />
                </div>
                <ul className="profile-list">
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Nickname:</h4>
                        <span className="profile-list__value">Killa Kella</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Tel:</h4>
                        <span className="profile-list__value">072 143 9920</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Date Of Birth:</h4>
                        <span className="profile-list__value">July 12, 1988</span>
                    </li>
                    <li className="profile-list__item">
                        <h4 className="profile-list__heading">Gender:</h4>
                        <span className="profile-list__value">Female</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default UserProfile;
