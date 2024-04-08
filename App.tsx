import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './src/screens/Products';
import ProductDetailsScreen from './src/screens/ProductDetails';
import store from './store'; // import your Redux store

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;