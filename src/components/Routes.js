import React, { Component } from 'react';

import{ Router, Stack, Scene} from 'react-native-router-flux';

import Login from '/home/shantanu/VT/src/pages/Login';
import Signup from '/home/shantanu/VT/src/pages/Signup';

export default class Routes extends Component  {
    render() {
        return (
           <Router>
               <Stack key='root' hideNavBar={true}>
                   <Scene key='login' component={Login} title='Login' initial={true} />
                   <Scene key='signup' component={Signup} title='Register' />

               </Stack>

           </Router>

        )

    }

}