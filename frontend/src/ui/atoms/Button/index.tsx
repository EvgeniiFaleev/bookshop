import { Link } from 'react-router-dom';
import React, { FC } from 'react';

export interface IButtonProps {
  type: 'button' | 'link',
  onClick?: () => void
  style : string
}

export const Button:FC<IButtonProps> = ({
  type, onClick, style, children,
}) => {
  if (type === 'button') {
    return (
      <button
        onClick={onClick}
        type="button"
        className={style}
      >
        {children}
      </button>
    );
  }
  return (
    <Link className={style} to="/">
      {children}
    </Link>
  );
};
