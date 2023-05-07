import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import SelectUserScreen from "../../Screen/SelectUserScreen/SelectUserScreen";
import { HomeScreen } from "../../Screen/HomeScreen/HomeScreen";
import { Route } from "../../constants/Route";
const HomeStack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                title: "Home",
            }}
        >
            <HomeStack.Screen name={Route.WELCOME} component={HomeScreen} />
            <HomeStack.Screen name={Route.SELECTED_USER_SCREEN} component={SelectUserScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeScreenStack;

