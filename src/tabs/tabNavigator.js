import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

//CONFIGS
import colors from '../configs/colorsDefaut';

//STAKS
import MainStack from '../stacks/mainStack';
import SettingsStack from '../stacks/settingsStack';
import MyPersonalsStack from '../stacks/myPersonalsStack';

const TabNavigator = createBottomTabNavigator({
    MainStack: MainStack,
    MyPersonalsStack: MyPersonalsStack,
    SettingsStack: SettingsStack,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'MainStack') {
                iconName = 'ios-pin';
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            } else if (routeName === 'MyPersonalsStack') {
                iconName = 'dumbbell';
                return <IconFontAwesome name={iconName} size={20} color={tintColor} />;
            } else if (routeName === 'SettingsStack') {
                iconName = 'ios-settings';
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }

          },
    }),
        tabBarOptions: {
            activeTintColor: colors.baseOrange,
            inactiveTintColor: 'gray',
        },
}
);

export default createAppContainer(TabNavigator);