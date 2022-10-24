import React from 'react';
import { AppState } from 'src/store/store';
import { useAppSelector } from '../hooks/reducer';

interface Props {
  children: React.ReactNode;
}

export default function ProviderAuth({ children }: Props) {
  const auth = useAppSelector((state: AppState) => state.app.auth);
  return (
    <div>
      {auth.accesstoken ? <div>{children}</div> : <div>loading...</div>}
    </div>
  );
}
