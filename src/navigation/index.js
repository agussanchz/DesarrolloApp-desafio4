import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";

const ApiNavigator = () => {
    return (
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
    )
}

export default ApiNavigator;
