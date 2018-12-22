import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import firebase from './firebase';
import Spinner from './Spinner';
// Redux
import store from './store';
import {Provider,connect} from 'react-redux';
import {setUser,clearUser} from './actions';
class Root  extends React.Component{
    componentDidMount(){
        console.log(this.props.isLoading)
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.props.setUser(user);
                this.props.history.push('/');
            }else{
                this.props.history.push('/login');
                this.props.clearUser();
            }
        })
    }
     render(){
         
        return this.props.isLoading ? <Spinner/> : (
            <Switch>
              <Route exact path="/" component={App}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>
        )
     }
}
const mapStateToProps = state=>({
    isLoading:state.user.isLoading
})
const RootWithAuth = withRouter(connect(mapStateToProps,{setUser,clearUser})(Root) );
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <RootWithAuth></RootWithAuth>
      </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
