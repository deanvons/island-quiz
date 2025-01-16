

// // This is our HOC that adds authentication guard logic
// export function withAuth(WrappedComponent) {
//   return function AuthGuard(props) {
//     // Replace this with your actual authentication check.
//     const isAllowed = /* some condition, e.g. */ Boolean(localStorage.getItem('token'));

//     if (isAllowed) {
//       return <WrappedComponent {...props} />;
//     } else {
//       return <div>Not allowed</div>;
//     }
//   };
// }


import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;