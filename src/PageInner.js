import React, { Component } from 'react';
import firebase from 'firebase';
import DoctorInfo from './DoctorInfo';

class PageInner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        };
    }

    loadData(a) {
        let ref = '';
        let requiredId;
        requiredId = Number(this.props.itemId);
        if ( a === 1 ){
            ref = new firebase.database().ref('medic-list/').orderByChild('id').equalTo(requiredId);
        }else if ( a === 2 ){
            ref = new firebase.database().ref('medic-list/').orderByChild('key').equalTo('clinic');
        }
        ref.on('value', function(snapshot) {
            const itemEl = [];
            //var sorted = [];

            snapshot.forEach(function(itemSnap) {
                const item = itemSnap.val();
                //item.key = itemSnap.getKey();
                //item.id = itemSnap.getKey();
                itemEl.push(item);
            });

            this.setState({
                item: itemEl
            });
        }.bind(this));
    }

    componentDidMount() {
        this.loadData(1);
    }

    render() {
        return(
            <main className="mainContent pageInner">
                <DoctorInfo item={this.state.item} />
            </main>
        )
    }
}

export default PageInner;
