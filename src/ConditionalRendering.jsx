import React from "react";

// --------------------- EXAMPLE 1 START------------------------------//
function UserGreet(props) {
  return <h1>Welcome Back!</h1>;
}

function GuestGreet(props) {
  return <h1>Please! Sign Up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreet />;
  }
  return <GuestGreet />;
}
// index.js ===>> <ConditionalRendering isLoggedIn={true/false}>
// --------------------- EXAMPLE 1 END------------------------------//

// ----------------- =====> EXAMPLE 2 START <===== --------------------- //
function LoginButton(props) {
  return (
    <>
      <button onClick={props.onClick}>Login</button>
    </>
  );
}

function LogoutButton(props) {
  return (
    <>
      <button onClick={props.onClick}>Logout</button>
    </>
  );
}

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <hr />
      </div>
    );
  }
}
// ----------------- =====> EXAMPLE 2 END <===== --------------------- //

export default ConditionalRendering;
