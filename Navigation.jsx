import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export const Navigation = () => {
    return (
    <NavigationContainer>

    <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#107', 
                    },
                    headerTintColor: 'white', 
                }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'{Головний екран}'}}/>
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{title:'Стаття'}}/>
    </Stack.Navigator>

    </NavigationContainer>
    );
}