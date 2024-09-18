import React from 'react';

interface GoogleLoginButtonProps {
  text: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ text }) => {
  return (
    <div>{text}</div>
  );
};

export default GoogleLoginButton;