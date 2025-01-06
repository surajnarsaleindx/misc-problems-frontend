import React, { PropsWithChildren } from 'react';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type UserProps = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: Address;
  klass?: string; //handle class
  setUser?: React.Dispatch<React.SetStateAction<object>>; // This is the set method of useState hook which can be used here inside component
  onChange: React.ChangeEventHandler<HTMLInputElement>; //handle event
};

const User: React.FC<PropsWithChildren<UserProps>> = (props): JSX.Element => {
  return (
    <div className={`bg-red-200 p-5  ${props.klass}`}>{props.children}</div>
  );
};

export default User;
