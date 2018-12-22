import React, { Component } from 'react'
import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'
import md5 from 'md5'


class Register extends Component {
     state={
         username:'',
         email:'',
         password:'',
         passwordConfirmation:'',
         errors:[],
         loading:false,
         usersRef:firebase.database().ref('users')
     }

     handleChange=(e)=>{
      this.setState({
          [e.target.name] :e.target.value
      }) 
    }
    isFromValid = () =>{
        let errors= [];
        let error;
        if(this.isFormEmpty(this.state)){
            // Error
            error = {message:'Fill in all fields'};
            this.setState({
                errors: errors.concat(error)
            });
            return false;
        }else if(!this.isPasswordValid(this.state)){
            // Error
            error = {message:'Password invalid'};
            this.setState({
                errors: errors.concat(error)
            });
            return false;
        }else{
            // From is Valid
            return true;
        }
    }
    isFormEmpty=({username,email,password,passwordConfirmation}) =>{
        return !username.length || !email.length || !password.length|| !passwordConfirmation.length;
    }
    isPasswordValid=({password,passwordConfirmation}) =>{
        if(password.length<6|| passwordConfirmation.length <6){
            return false;
        }else if( password !== passwordConfirmation){
            return false;
        }else{
            return true;
        }
    }
    displayErrors = errors => errors.map((error,i)=><p key={i}>{error.message}</p>);
    handleInputError = (errors,inputName)=>{
      return   errors.some(error=>error.message.toLowerCase().includes(inputName))? 'error':''
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.isFromValid()){
            this.setState({errors:[],loading:true});
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(
             res =>{
                 console.log(res)
                 // Update Profile
                 res.user.updateProfile({
                     displayName:this.state.username,
                     photoURL: `http://gravatar.com/avatar/${md5(res.user.email)}?d=identicon`
                 })
                 .then(()=>{
                    this.setState({loading:false});
                    this.saveUser(res).then(()=>{
                        console.log('user Saved');
                    })
                 })
                 .catch(err=>{
                     console.error(err);
                     this.setState({errors:this.state.errors.concat(err) ,loading:false});
                 } )
             })
             .catch(err=>{
                 console.error(err);
                 this.setState({errors:this.state.errors.concat(err) ,loading:false});
             })
        }
    }
    saveUser = res =>{
        return this.state.usersRef.child(res.user.uid).set({
            name: res.user.displayName,
            avatar:res.user.photoURL
        });
    }
  render() {
      const {username,email,password,passwordConfirmation ,errors,loading} = this.state;
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle" className="register">
          <Grid.Column style={{maxWidth:450}}>
           <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange"></Icon>
            Register for Chat
           </Header>
           <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input type="text" value={username}
              fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange}></Form.Input>
              <Form.Input type="email" value={email} 
               className={this.handleInputError(errors,'email')}
              fluid name="email" icon="mail" iconPosition="left" placeholder="Email" onChange={this.handleChange}></Form.Input>
              <Form.Input type="password" value={password} 
               className={this.handleInputError(errors,'password')}
              fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange}></Form.Input>
              <Form.Input type="password" value={passwordConfirmation} 
              className={this.handleInputError(errors, 'password')}
              fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onChange={this.handleChange}></Form.Input>
              <Button disabled={loading} className={loading ? 'loading' :''} color="orange" fluid size="large">Submit</Button>
            </Segment>
           </Form>
           {errors.length>0 && (
               <Message error>
               <h3>Error</h3>
               {this.displayErrors(errors)}
               </Message>
           )}
           <Message>Already a user? <Link to="/login">Login</Link></Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
export default Register