// Import React and HelloText class
import React from 'react';
import ReactDOM from 'react-dom';


// Create class called HelloBox that extends the base React Component class
class Footer extends React.Component {
    render(){
        let userName = "lena";
        return (
            <footer>
                <h2 className="user_name">{userName}</h2>
            </footer>

        )
    }
}

//ReactDOM.render(
//  <Header />, document.getElementById("header")
//);
export default Footer;