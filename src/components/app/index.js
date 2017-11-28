import React, { Component } from 'react';
import firebase from 'firebase';
import Routes from '../routes';
import Links from '../navigation';


//Initialize Firebase
let config = {
    apiKey: "AIzaSyBrAhKDmDKw-ADDNVEav-jiewM4ltxWXdM",
    authDomain: "find-medic-test.firebaseapp.com",
    databaseURL: "https://find-medic-test.firebaseio.com",
    projectId: "find-medic-test",
    storageBucket: "find-medic-test.appspot.com",
    messagingSenderId: "42124904796"
};
firebase.initializeApp(config);

class App extends Component {
    componentWillMount() {
        //console.log('componentWillMount')
    }
    componentDidMount() {
        //console.log('componentDidMount')
    }
    render() {
        return(
            <section className="pageLayout">
                <nav>
                    <Links />
                </nav>

                <main className="mainContent">
                    <Routes />
                </main>

                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="/link1">Link 1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </section>
        )
    }
}

export default App;
