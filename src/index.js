import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DoctorList from './DoctorList';
import MapComponent from './MapComponent';
import SearchRefine from './SearchRefine';
import AdComponent from './AdComponent';

//Initialize Firebase
var config = {
    apiKey: "AIzaSyBrAhKDmDKw-ADDNVEav-jiewM4ltxWXdM",
    authDomain: "find-medic-test.firebaseapp.com",
    databaseURL: "https://find-medic-test.firebaseio.com",
    projectId: "find-medic-test",
    storageBucket: "find-medic-test.appspot.com",
    messagingSenderId: "42124904796"
};
firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            banner: ""
        };
    }

    loadData() {
        const ref = new firebase.database().ref('medic-list/');
        ref.on('value', function(snapshot) {
            const items = [];
            //var sorted = [];

            snapshot.forEach(function(itemSnap) {
                const item = itemSnap.val();
                //item.key = itemSnap.getKey();
                //item.id = itemSnap.getKey();
                items.push(item);
            });

            this.setState({
                items: items
            });
        }.bind(this));
    }

    loadAd() {
        const ref = new firebase.database().ref('main_ad/');
        ref.on('value', function(snapshot) {
            const banner = snapshot.val();

            this.setState({
                banner: banner
            });
            console.log(banner)
        }.bind(this));
    }

    componentDidMount() {
        this.loadData();
        this.loadAd();
        $('select').material_select();
    }

    // getInitialState() {
    //     return {
    //         items: []
    //         //formDisplayed: false,
    //     }
    // }

    render() {
        return(
            <section className="pageLayout">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
                <main className="mainContent">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-content">
                                        <div id="map">
                                            <MapComponent items={this.state.items} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        <SearchRefine />
                                    </div>
                                </div>
                                <div className="card">
                                    <AdComponent banner={this.state.banner} />
                                </div>
                            </div>
                            <div className="col s12 m8">
                                <DoctorList items={this.state.items} />
                            </div>
                        </div>
                    </div>
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
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
