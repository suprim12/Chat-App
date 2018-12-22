import React, { Component } from 'react'
import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'


class Login extends Component {
     state={
         email:'',
         password:'',
         errors:[],
         loading:false,
     }

     handleChange=(e)=>{
      this.setState({
          [e.target.name] :e.target.value
      }) 
    }
  
    displayErrors = errors => errors.map((error,i)=><p key={i}>{error.message}</p>);
    handleInputError = (errors,inputName)=>{
      return   errors.some(error=>error.message.toLowerCase().includes(inputName))? 'error':''
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.isFormValid(this.state)){
            this.setState({errors:[],loading:false});
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(res=>{
              console.log(res);

            })
            .catch(err=>{
              console.error(err);
              this.setState({
                errors:this.state.errors.concat(err),
                loading:false
              })
            })
        }
    }
    // Validation
    isFormValid = ({email,password})=> email && password;
  render() {
      const {email,password,errors,loading} = this.state;
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle" className="login">
          <Grid.Column style={{maxWidth:450}}>
           <Header as="h2" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet"></Icon>
            Login for Chat
           </Header>
           <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input type="email" value={email} 
               className={this.handleInputError(errors,'email')}
              fluid name="email" icon="mail" iconPosition="left" placeholder="Email" onChange={this.handleChange}></Form.Input>
              <Form.Input type="password" value={password} 
               className={this.handleInputError(errors,'password')}
              fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange}></Form.Input>
              <Button disabled={loading} className={loading ? 'loading' :''} color="violet" fluid size="large">Submit</Button>
            </Segment>
           </Form>
           {errors.length>0 && (
               <Message error>
               <h3>Error</h3>
               {this.displayErrors(errors)}
               </Message>
           )}
           <Message>Don't have an account? <Link to="/register">Register</Link></Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
export default Login