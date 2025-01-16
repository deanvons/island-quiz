import { Navigate } from 'react-router-dom';

// This is our HOC that we attempted but fixed
export default function withAuth(Component) {
  function AuthenticatedComponent(props) {
    // Replace this with your actual authentication check.
    const isAuthenticated = false; // or true, based on your logic. 

    if (isAuthenticated === false) {
      // not allowed, redirect
      return <Navigate to="/" />;
    }

    // allowed, render page that was wrapped by this HOC -> check routes in App.jsx
    return <Component {...props} />;
  }

  return AuthenticatedComponent;
}

//#region alternative syntax
// alternative using function experssions
// const withAuth = (Component) => {
//   const AuthenticatedComponent = (props) => {
//     const isAuthenticated = true; // Replace with your actual authentication logic

//     if (!isAuthenticated) {
//       return <Navigate to="/" />;
//     }

//     return <Component {...props} />;
//   };

//   return AuthenticatedComponent;
// };

// export default withAuth;
//#endregion