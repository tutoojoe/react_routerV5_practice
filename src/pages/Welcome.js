import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>Welcome to this page.</h1>
      <Route path="/welcome/new-user">
        <p>New user page</p>
      </Route>
    </div>
  );
};
export default Welcome;
