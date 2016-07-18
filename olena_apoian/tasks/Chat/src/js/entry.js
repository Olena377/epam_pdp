// Import CSS
import '../css/master.scss';

// Import React and JS
//import ReactDOM from 'react-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

// Render!

const Container = React.createClass({
    render () {
        return (
            <div className='container'>
                <Header />
                <Footer />
            </div>
        )
    }
});

React.render(<Container />, document.getElementsByTagName('body')[0]);