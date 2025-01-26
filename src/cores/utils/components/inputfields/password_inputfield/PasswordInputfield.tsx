import React, { useState } from 'react';
import Inputfield from '../app_inputfield/Inputfield';
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

export interface PasswordInputfieldProps {
  value?: string | null,
  errorMessage?: string | null,
  onChanged?: React.ChangeEventHandler<HTMLInputElement>,
}

const PasswordInputfield: React.FC<PasswordInputfieldProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Inputfield
      autoComplete='on'
      value={props.value}
      placeholder="Password"
      onChanged={props.onChanged}
      errorMessage={props.errorMessage}
      type={visible ? 'text' : 'password'}
      trailing={visible ? <HiOutlineEyeOff style={{
        height: '16px',
        width: '24px',
        color: 'var(--success)',
      }} /> : <HiOutlineEye style={{
        height: '16px',
        width: '24px',
        color: 'var(--dark-grey)'
      }} />}
      onTapTrailing={() => setVisible(!visible)
      }
    />
  );
};

export default PasswordInputfield;
