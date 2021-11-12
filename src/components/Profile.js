import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

      <div align="right">
        <img src={user.picture} alt={user.given_name} />
        <h2>{user.given_name}</h2>
        {/* <p>{user.email}</p> */}
        {/* <JSONPretty data={user} /> */}
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    ),

    isAuthenticated && (
      <div align="center" >
        <h2 class="text1">Namaste {user.given_name} !</h2>
      </div>
    )
  )
}

export default Profile
