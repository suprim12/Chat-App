(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,a,t){e.exports=t(437)},259:function(e,a,t){},437:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(19),l=t(21),o=t(20),c=t(22),s=t(0),i=t.n(s),u=t(63),m=t.n(u),d=(t(256),t(462)),h=t(450),p=t(463),g=t(457),f=(t(259),t(458)),E=t(72),b=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"ColorPanel"))}}]),a}(s.Component),v=t(456),y=t(459),C=t(213),O=t(453),j=t(439),w=t(131),S=t.n(w);t(270),t(272),t(438);S.a.initializeApp({apiKey:"AIzaSyAeBPFZ_aJ62vpV4ooN_hMG2hw7jMcxwmI",authDomain:"slack-clone-app.firebaseapp.com",databaseURL:"https://slack-clone-app.firebaseio.com",projectId:"slack-clone-app",storageBucket:"slack-clone-app.appspot.com",messagingSenderId:"508869347276"});var k=S.a,U=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={user:t.props.currentUser},t.dropdownOptions=function(){return[{key:"user",text:i.a.createElement("span",null,"Signed as ",i.a.createElement("strong",null,t.state.user.displayName)),disabled:!0},{key:"avatar",text:i.a.createElement("span",null,"Change Avatar")},{key:"signout",text:i.a.createElement("span",{onClick:t.handleSignOut},"Sign Out")}]},t.handleSignOut=function(){k.auth().signOut().then(function(){return console.log("Signed Out!")})},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{style:{background:"#4c3c4c"}},i.a.createElement(f.a.Column,null,i.a.createElement(f.a.Row,{style:{padding:"1.2em",margin:0}},i.a.createElement(y.a,{inverted:!0,floated:"left",as:"h2"},i.a.createElement(C.a,{name:"code"}),"Chat"),i.a.createElement(y.a,{as:"h4",style:{padding:"0.25em"},inverted:!0},i.a.createElement(O.a,{trigger:i.a.createElement("span",null,i.a.createElement(j.a,{src:e.photoURL,spaced:"right",avatar:!0}),e.displayName),options:this.dropdownOptions()}))))))}}]),a}(s.Component),A=t(50),N=t(452),I=t(451),L=t(447),P=t(455),R=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={user:t.props.currentUser,channels:[],modal:!1,channelName:"",channelDetails:"",channelRef:k.database().ref("channels")},t.openModal=function(e){t.setState({modal:!0})},t.closeModal=function(e){t.setState({modal:!t.state.modal})},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.isFromValid(t.state)&&t.addChannel()},t.addChannel=function(){var e=t.state,a=e.channelRef,n=e.channelName,r=e.channelDetails,l=e.user,o=a.push().key,c={id:o,name:n,detail:r,createdBy:{name:l.displayName,avatar:l.photoURL}};a.child(o).update(c).then(function(){t.setState({channelName:"",channelDetails:""}),t.closeModal(),console.log("channel added")}).catch(function(e){console.error(e)})},t.isFromValid=function(e){var a=e.channelName,t=e.channelDetails;return a&&t},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.channels,t=e.modal;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a.Menu,{style:{padding:"2em 0"}},i.a.createElement(v.a.Item,null,i.a.createElement("span",null,i.a.createElement(C.a,{name:"exchange"}),"Channels")," ","(",a.length,") ",i.a.createElement(C.a,{name:"add",onClick:this.openModal}))),i.a.createElement(N.a,{basic:!0,open:t,onClose:this.closeModal},i.a.createElement(N.a.Header,null,"Add a Channel"),i.a.createElement(N.a.Content,null,i.a.createElement(I.a,{onSubmit:this.handleSubmit},i.a.createElement(I.a.Field,null,i.a.createElement(L.a,{fluid:!0,label:"Name of Channel",name:"channelName",onChange:this.handleChange})),i.a.createElement(I.a.Field,null,i.a.createElement(L.a,{fluid:!0,label:"Details of Channel",name:"channelDetails",onChange:this.handleChange})))),i.a.createElement(N.a.Actions,null,i.a.createElement(P.a,{color:"green",inverted:!0,onClick:this.handleSubmit},i.a.createElement(C.a,{name:"checkmark"})," Add"),i.a.createElement(P.a,{color:"red",inverted:!0,onClick:this.closeModal},i.a.createElement(C.a,{name:"remove"})," Cancel"))))}}]),a}(s.Component),F=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.currentUser;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{size:"large",inverted:!0,fixed:"left",vertical:!0,style:{background:"#4c3c4c",fontSize:"1.2rem"}},i.a.createElement(U,{currentUser:e}),i.a.createElement(R,{currentUser:e})))}}]),a}(s.Component),x=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Message"))}}]),a}(s.Component),D=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"MetaPanel"))}}]),a}(s.Component);var M=Object(E.b)(function(e){return{currentUser:e.user.currentUser}})(function(e){var a=e.currentUser;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{columns:"equal",className:"app",style:{background:"#eee"}},i.a.createElement(b,null),i.a.createElement(F,{currentUser:a}),i.a.createElement(f.a.Column,{style:{marginLeft:320}},i.a.createElement(x,null)),i.a.createElement(f.a.Column,{width:4},i.a.createElement(D,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(461),V=t(454),W=t(448),_=t(236),B=t.n(_),J=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,usersRef:k.database().ref("users")},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.isFromValid=function(){var e,a=[];return t.isFormEmpty(t.state)?(e={message:"Fill in all fields"},t.setState({errors:a.concat(e)}),!1):!!t.isPasswordValid(t.state)||(e={message:"Password invalid"},t.setState({errors:a.concat(e)}),!1)},t.isFormEmpty=function(e){var a=e.username,t=e.email,n=e.password,r=e.passwordConfirmation;return!a.length||!t.length||!n.length||!r.length},t.isPasswordValid=function(e){var a=e.password,t=e.passwordConfirmation;return!(a.length<6||t.length<6)&&a===t},t.displayErrors=function(e){return e.map(function(e,a){return i.a.createElement("p",{key:a},e.message)})},t.handleInputError=function(e,a){return e.some(function(e){return e.message.toLowerCase().includes(a)})?"error":""},t.handleSubmit=function(e){e.preventDefault(),t.isFromValid()&&(t.setState({errors:[],loading:!0}),k.auth().createUserWithEmailAndPassword(t.state.email,t.state.password).then(function(e){console.log(e),e.user.updateProfile({displayName:t.state.username,photoURL:"http://gravatar.com/avatar/".concat(B()(e.user.email),"?d=identicon")}).then(function(){t.setState({loading:!1}),t.saveUser(e).then(function(){console.log("user Saved")})}).catch(function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})})}).catch(function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})}))},t.saveUser=function(e){return t.state.usersRef.child(e.user.uid).set({name:e.user.displayName,avatar:e.user.photoURL})},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.password,r=e.passwordConfirmation,l=e.errors,o=e.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{textAlign:"center",verticalAlign:"middle",className:"register"},i.a.createElement(f.a.Column,{style:{maxWidth:450}},i.a.createElement(y.a,{as:"h2",icon:!0,color:"orange",textAlign:"center"},i.a.createElement(C.a,{name:"puzzle piece",color:"orange"}),"Register for Chat"),i.a.createElement(I.a,{size:"large",onSubmit:this.handleSubmit},i.a.createElement(z.a,{stacked:!0},i.a.createElement(I.a.Input,{type:"text",value:a,fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"Username",onChange:this.handleChange}),i.a.createElement(I.a.Input,{type:"email",value:t,className:this.handleInputError(l,"email"),fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email",onChange:this.handleChange}),i.a.createElement(I.a.Input,{type:"password",value:n,className:this.handleInputError(l,"password"),fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",onChange:this.handleChange}),i.a.createElement(I.a.Input,{type:"password",value:r,className:this.handleInputError(l,"password"),fluid:!0,name:"passwordConfirmation",icon:"repeat",iconPosition:"left",placeholder:"Password Confirmation",onChange:this.handleChange}),i.a.createElement(P.a,{disabled:o,className:o?"loading":"",color:"orange",fluid:!0,size:"large"},"Submit"))),l.length>0&&i.a.createElement(V.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(l)),i.a.createElement(V.a,null,"Already a user? ",i.a.createElement(W.a,{to:"/login"},"Login")))))}}]),a}(s.Component),T=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:"",errors:[],loading:!1},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.displayErrors=function(e){return e.map(function(e,a){return i.a.createElement("p",{key:a},e.message)})},t.handleInputError=function(e,a){return e.some(function(e){return e.message.toLowerCase().includes(a)})?"error":""},t.handleSubmit=function(e){e.preventDefault(),t.isFormValid(t.state)&&(t.setState({errors:[],loading:!1}),k.auth().signInWithEmailAndPassword(t.state.email,t.state.password).then(function(e){console.log(e)}).catch(function(e){console.error(e),t.setState({errors:t.state.errors.concat(e),loading:!1})}))},t.isFormValid=function(e){var a=e.email,t=e.password;return a&&t},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.errors,r=e.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{textAlign:"center",verticalAlign:"middle",className:"login"},i.a.createElement(f.a.Column,{style:{maxWidth:450}},i.a.createElement(y.a,{as:"h2",icon:!0,color:"violet",textAlign:"center"},i.a.createElement(C.a,{name:"code branch",color:"violet"}),"Login for Chat"),i.a.createElement(I.a,{size:"large",onSubmit:this.handleSubmit},i.a.createElement(z.a,{stacked:!0},i.a.createElement(I.a.Input,{type:"email",value:a,className:this.handleInputError(n,"email"),fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email",onChange:this.handleChange}),i.a.createElement(I.a.Input,{type:"password",value:t,className:this.handleInputError(n,"password"),fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",onChange:this.handleChange}),i.a.createElement(P.a,{disabled:r,className:r?"loading":"",color:"violet",fluid:!0,size:"large"},"Submit"))),n.length>0&&i.a.createElement(V.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(n)),i.a.createElement(V.a,null,"Don't have an account? ",i.a.createElement(W.a,{to:"/register"},"Register")))))}}]),a}(s.Component),q=t(460),G=t(449);function H(){return i.a.createElement(q.a,{active:!0},i.a.createElement(G.a,{size:"huge",content:"Preparing Chat"}))}var K=t(56),Z=t(237),$=t(238),Q={currentUser:null,isLoading:!0},X=Object(K.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return{currentUser:a.payload.currentUser,isLoading:!1};case"CLEAR_USER":return Object($.a)({},Q,{isLoading:!1});default:return e}}}),Y=Object(K.createStore)(X,{},Object(Z.composeWithDevTools)()),ee=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.isLoading),k.auth().onAuthStateChanged(function(a){a?(e.props.setUser(a),e.props.history.push("/")):(e.props.history.push("/login"),e.props.clearUser())})}},{key:"render",value:function(){return this.props.isLoading?i.a.createElement(H,null):i.a.createElement(d.a,null,i.a.createElement(h.a,{exact:!0,path:"/",component:M}),i.a.createElement(h.a,{path:"/register",component:J}),i.a.createElement(h.a,{path:"/login",component:T}))}}]),a}(i.a.Component),ae=Object(p.a)(Object(E.b)(function(e){return{isLoading:e.user.isLoading}},{setUser:function(e){return{type:"SET_USER",payload:{currentUser:e}}},clearUser:function(){return{type:"CLEAR_USER"}}})(ee));m.a.render(i.a.createElement(E.a,{store:Y},i.a.createElement(g.a,null,i.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,2,1]]]);
//# sourceMappingURL=main.3753ebee.chunk.js.map