import React from 'react'
import './App.css';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
//Components
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

 function App({currentUser}) {
  return (
    <React.Fragment>
      <Grid columns="equal" className="app" style={{background:'#eee'}}>
        <ColorPanel></ColorPanel>
        <SidePanel currentUser={currentUser} ></SidePanel>
        <Grid.Column style={{marginLeft:320}}>
           <Messages></Messages>
        </Grid.Column>
        <Grid.Column width={4}>
          <MetaPanel></MetaPanel>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  currentUser:state.user.currentUser 
})
export default connect(mapStateToProps)(App);