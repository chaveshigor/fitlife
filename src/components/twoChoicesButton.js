import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

//CONFIGS
import colors from '../configs/colorsDefaut';

export default class TwoChoicesButton extends React.Component {
    
    state={
        opacity: 0,
        marginLeft: new Animated.Value(25),
        textColorMan: colors.white,
        textColorWoman: colors.white
    }

    selectOption1 = () => {
        let { onPressOp1 } = this.props
        onPressOp1()
        this.setState({opacity:1, textColorMan: colors.baseOrange, textColorWoman: colors.white})
        Animated.timing(this.state.marginLeft, {
            toValue: 0,
            duration: 300
        }).start()
        
    }

    selectOption2 = () => {
        let { onPressOp2 } = this.props
        onPressOp2()
        this.setState({opacity:1, textColorMan: colors.white, textColorWoman: colors.baseOrange})
        Animated.timing(this.state.marginLeft, {
            toValue: 50,
            duration: 300
        }).start()
        
    }


    render() {

        let { marginLeft, opacity, textColorMan, textColorWoman } = this.state
        let { opt1, opt2 } = this.props

        let margin = marginLeft.interpolate({
            inputRange:[0, 100],
            outputRange:['0%', '100%']
        })

        return(
            <Animated.View style={styles.container}>

                <Animated.View style={[styles.button, {marginLeft: margin, opacity: opacity}]} />

                <Animated.View style={styles.textSpace}>
                    <TouchableWithoutFeedback onPress={this.selectOption1}>
                        <Text style={[styles.text, {color: textColorMan}]}>{opt1}</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.selectOption2}>
                        <Text style={[styles.text, {color: textColorWoman}]}>{opt2}</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: colors.baseOrange,
        borderRadius: 30,
        width: '50%', //DEPOIS PEGAR DAS PROPS
        justifyContent: 'center'
    },

    button: {
        backgroundColor: colors.white,
        borderRadius: 30,
        width: '50%',
        height: 25,
        position: 'absolute',
    },

    textSpace: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginVertical: 10,
        //paddingHorizontal: 5
    },

    text: {
        fontSize: 16,
        color: colors.white,
    }

});

