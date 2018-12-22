import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
import firebase from "../../firebase";
class UserPanel extends Component {
  state = {
    user: this.props.currentUser
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignOut}>Sign Out</span>
    }
  ];
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed Out!"));
  };
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Grid style={{ background: "#4c3c4c" }}>
          <Grid.Column>
            <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
              {/*AppLication Heder*/}
              <Header inverted floated="left" as="h2">
                <Icon name="code" />
                Chat
              </Header>
              {/** User Dropdown */}
              <Header as="h4" style={{ padding: "0.25em" }} inverted>
                <Dropdown
                  trigger={
                    <span>
                      <Image src={user.photoURL} spaced="right" avatar />
                      {user.displayName}
                    </span>
                  }
                  options={this.dropdownOptions()}
                />
              </Header>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default UserPanel;
