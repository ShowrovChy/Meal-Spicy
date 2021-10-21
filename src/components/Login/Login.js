import React from "react";
import { Form, Button } from "react-bootstrap";
import useFirebase from "../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div className="login-main-Container">
      <Form className="form-container mx-auto mt-5">
        {/* <h3 className="mb-3">Log in</h3> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="loginBtn mt-4" variant="danger" type="submit">
          Log in
        </Button>
      </Form>
      <div>
        <h3 className="orStyle text-center">-----------or-----------</h3>
        <div className="text-center mt-4">
          <Button
            onClick={signInWithGoogle}
            className="bg-danger border-0 me-4"
          >
            Google login
          </Button>
          <Button className="bg-dark border-0 ms-4">Github login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
{
  /* <Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text> */
}
{
  /* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */
}
