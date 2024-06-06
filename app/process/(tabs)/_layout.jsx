import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TemplateComponent from "../(tabs)/template.jsx";

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                animationEnabled: false,
            }}
        >
            <Tab.Screen
                name="Requirement"
                component={TemplateComponent}
                initialParams={{ name: "requirement" }}
            />
            <Tab.Screen
                name="Material"
                component={TemplateComponent}
                initialParams={{ name: "material" }}
            />
            <Tab.Screen
                name="Prototype"
                component={TemplateComponent}
                initialParams={{ name: "prototype" }}
            />
            <Tab.Screen
                name="Production"
                component={TemplateComponent}
                initialParams={{ name: "production" }}
            />
            <Tab.Screen
                name="Rework"
                component={TemplateComponent}
                initialParams={{ name: "rework" }}
            />
            <Tab.Screen
                name="Delivery"
                component={TemplateComponent}
                initialParams={{ name: "delivery" }}
            />
        </Tab.Navigator>
    );
}
