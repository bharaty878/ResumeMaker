/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './screens/Redux/Store';
const AppRedux =()=>{
    return(
    <View style={{flex:1}}>
<Provider store={store}>
        <App/>
    </Provider>
    </View>
)}

AppRegistry.registerComponent(appName, () => AppRedux);
