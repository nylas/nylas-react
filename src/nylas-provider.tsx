import React, { useEffect, useState } from 'react';
import Nylas from '@nylas/nylas-js';

export const NylasContext = React.createContext<Nylas | null>(null);

export const useNylas = () => {
  return React.useContext(NylasContext) as Nylas;
};

export interface NylasProviderProperties {
  serverBaseUrl: string;
  onChange: any;
  children?: React.ReactNode;
}

const NylasProvider = (props: NylasProviderProperties): JSX.Element => {
  const { children, onChange, ...nylasProps } = props;
  const [client, setClient] = useState<Nylas>();

  const safeSetState = (state: Nylas) => {
    console.log('setting state');
    if (client) {
      console.log('client already exists');
      return;
    }

    if (onChange) {
      onChange(state);
    }

    setClient(state);
  };

  useEffect(() => {
    if (!nylasProps || !nylasProps.serverBaseUrl) {
      return;
    }
    console.log({nylasProps})
    const n = new Nylas(nylasProps);
    console.log(n);
    safeSetState(n);
  }, [nylasProps]);

  return (
    <NylasContext.Provider value={client}>{children}</NylasContext.Provider>
  );
};

export default NylasProvider;
