import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-4">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
          <div>
          <p><strong>We welcome you back to our Login Page.</strong></p>
          <br></br>
          <p>If you have forgotten your password and you will have to sign up/register with us again. </p>
          <br></br>
          {/* More marketing materials */}
          <br></br>
          <p style={{color: 'orange', fontSize:'30px'}}>Here are some of extra measures that we have in place to give you extra peace of mind for your next ski break.</p>
          <br></br>
          <p>1.  COVID-19 refund promise - If things change and we have to cancel your holiday because of Covid, you can pick another trip, or get a full refund.</p>
          <br></br>
          <p>2.  We'll do our very best to make sure your holiday is everything what should be. However, due to the constantly evolving nature of the COVID-19 crisis, we might need to change or withdraw some of the advertised accommodation facilities and resort services to keep everyone safe.  Wherever we could, you will be notified in advance but sometimes it might be at a short notice.</p>
          <br></br>
          <p>3.  All staff members will be required to wear face coverings when in the close proximity to individuals outside their own bubble.</p>
          <br></br>
          <p>4.  All staff will be required to certify that they are not experiencing any Covid-19 symptoms before starting work each day.  Any staff experiencing symptoms will not attend work and appropriate actions will be made with the local regulations and our own protocols.</p>
          <br></br>
          <p>5. Everyone, including staff, are expected to wear face coverings when travelling on any transport to and from the resort, in line with all local regulations.  We make it mandatory that you must bring your face covering.</p>
          <br></br>
          <p>6. Don't forget to purchase your travel insurance and bring all your ski essentials.</p>
          <br></br>
          
          </div>


      </form>
    </div>
  );
}

export default Login;
