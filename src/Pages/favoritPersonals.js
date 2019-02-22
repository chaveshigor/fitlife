import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

//COMPONENTS
import ListNearBy from '../components/listNearBy';

export class FavoritPersonals extends React.Component {

    state = {
        list: [{id: 1, name: 'João', distance: 3}, {id: 2, name: 'Clara', distance: 5}]
    }

    render(){
        
        const { navigation } = this.props
        
        return(
            <View style={{flex: 1}}>
                <ListNearBy data={this.state.list} navigation={navigation} />
            </View>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {  })(FavoritPersonals)