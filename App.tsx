import React from 'react'
import AppNavigation from './src/navigation';
import { SafeAreaView } from 'react-native';


const App: React.FC = () => <SafeAreaView style = {{flex: 1}}>
    <AppNavigation />;
    </SafeAreaView>

export default App;