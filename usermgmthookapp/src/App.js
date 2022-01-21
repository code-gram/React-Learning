import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import UserLogin from "./Login/UserLogin";
import MainHeader from "./MainHeader/MainHeader";
import UserRegisteration from "./Register/UserRegistration";
import UserList from "./User/UserList";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <UserLogin />
        {/*
        <UserLogin />
        */}

        {/*
           <UserRegisteration />
          */}
        {/*
          <UserList />
          */}
        {/*
          <Dashboard />
          */}
      </main>
    </React.Fragment>
  );
}

export default App;
