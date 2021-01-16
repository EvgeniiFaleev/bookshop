import { Link } from 'react-router-dom';
import React, { FC } from 'react';

export interface IButtonProps {
  type: 'button' | 'link',
  onClick?: () => void
  style : string,
  path? : string,
  isDisabled?: boolean
}

export const Button:FC<IButtonProps> = ({
  type, onClick, style, children, path = '/', isDisabled = false,
}) => {
  if (type === 'button') {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        type="button"
        className={style}
      >
        {children}
      </button>
    );
  }
  return (
    <Link className={style} to={path}>
      {children}
    </Link>
  );
};
