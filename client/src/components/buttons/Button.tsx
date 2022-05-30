import React from 'react';

type Params = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export function Button({ children, onClick }: Params) {
  return <div onClick={onClick}>{children}</div>;
}
