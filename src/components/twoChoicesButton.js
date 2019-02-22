import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

//CONFIGS
import colors from '../configs/colorsDefaut';

export default class TwoChoicesButton extends React.Component {
    
    state={
        opacity: 0,
        marginLeft: new Animated.Value(25),
        textColorMan: colors.baseOrange,
        textColorWoman: colors.baseOrange
    }

    selectOption1 = () => {
        let { onPressOp1 } = this.props
        onPressOp1()
        this.setState({opacity:1, textColorMan: colors.white, textColorWoman: colors.baseOrange})
        Animated.timing(this.state.marginLeft, {
            toValue: 5,
            duration: 300
        }).start()
        
    }

    selectOption2 = () => {
        let { onPressOp2 } = this.props
        onPressOp2()
        this.setState({opacity:1, textColorMan: colors.baseOrange, textColorWoman: colors.white})
        Animated.timing(this.state.marginLeft, {
            toValue: 55,
            duration: 300
        }).start()
        
    }


    render() {

        let { marginLeft, opacity, textColorMan, textColorWoman } = this.state
        let { opt1, opt2, width } = this.props

        let margin = marginLeft.interpolate({
            inputRange:[0, 100],
            outputRange:['0%', '100%']
        })

        return(
            <Animated.View style={[styles.container, {width: width}]}>

                <Animated.View style={[styles.button, {marginLeft: margin, opacity: opacity}]} />

                <Animated.View style={styles.textSpace}>
                    <TouchableWithoutFeedback style={styles.textButton} onPress={this.selectOption1}>
                        <Text style={[styles.text, {color: textColorMan}]}>{opt1}</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback style={styles.textButton} onPress={this.selectOption2}>
                        <Text style={[styles.text, {color: textColorWoman}]}>{opt2}</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: colors.white,
        borderRadius: 30,
        width: '80%', //DEPOIS PEGAR DAS PROPS
        justifyContent: 'center',
        padding: 10
    },

    button: {
        backgroundColor: colors.baseOrange,
        borderRadius: 30,
        width: '45%',
        height: 25,
        position: 'absolute',
    },

    textSpace: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
        //marginVertical: 10,
        //paddingHorizontal: 5
    },

    textButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 14,
        color: colors.baseOrange,
    }

});

