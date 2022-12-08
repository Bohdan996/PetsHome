import { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { useForm } from 'react-hook-form';
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer';
import './Login.scss';
 
const LoginPage = () => {
  const [userMetadata, setUserMetadata] = useState(null) as any;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY || "", {
    extensions: [new OAuthExtension()],
  });

  useEffect(() => {
    // On mount, we check if a user is logged in.
    // If so, we'll retrieve the authenticated user's profile.
    magic.user.isLoggedIn().then(magicIsLoggedIn => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(data => setUserMetadata(data));
      } else {
        // If no user is logged in, redirect to `/login`
        console.log('no login')
      }
    });
  }, []);


  const loginGoogle = async() => {
    await magic.oauth.loginWithRedirect({
      provider: 'google' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: 'http://localhost:3000/',
    });
  }
  
  const onSubmit = async (e: any) => {
    const { email } = e;

    if (email) {

      
      // const login = await magic.auth.loginWithSMS({
      //   phoneNumber: '+380635958416',
      // });
      const login = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });
      console.log('success', login);
    };
  };

  console.log('userMetadata', userMetadata);
  return (
    <LoginContainer>
      <div className="LoginPage">
        <div className="LoginPage__wrapper">
          <h1>PETS HOME</h1>
          <button type="button"></button>
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;