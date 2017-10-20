import React, { Component } from 'react';
import firebase from 'firebase';
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

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            banner: ""
        };
    }

    loadData(a) {
        let ref = '';
        if ( a === 1 ){
            ref = new firebase.database().ref('medic-list/');
        }else if ( a === 2 ){
            ref = new firebase.database().ref('medic-list/').orderByChild('type').equalTo('clinic');
        }
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
        }.bind(this));
    }

    componentDidMount() {
        this.loadData(1);
        this.loadAd();
    }

    // getInitialState() {
    //     return {
    //         items: []
    //         //formDisplayed: false,
    //     }
    // }

    render() {
        return(
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
        )
    }
}

export default SearchPage;
