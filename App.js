
import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/Reducers';
import Navigator from './src/Navigations/StackNavigator';
import RNBootSplash from "react-native-bootsplash";

const store = createStore(reducers);

const App = () => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, [])

  return ( 
    <Provider store={store}>
        <Navigator />
    </Provider>

  );
};

export default App;
