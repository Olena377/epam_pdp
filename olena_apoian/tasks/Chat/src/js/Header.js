// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';


// Create class called HelloBox that extends the base React Component class
class Header extends React.Component {
    render(){
        let userName = "kirsten mckellar";
        return (
            <header>
                <h2 className="user_name">{userName}</h2>
            </header>

        )
    }
}

//ReactDOM.render(
//  <Header />, document.getElementById("header")
//);
export default Header;