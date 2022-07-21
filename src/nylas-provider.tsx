import React, {useEffect, useState} from "react";
import NylasContext from "./nylas-context";
import Nylas from "@nylas/nylas-js";

export interface NylasProviderProperties {
  serverBaseUrl: string;
  children?: React.ReactNode;
}

const NylasProvider = (props: NylasProviderProperties): JSX.Element => {
  const {children, ...nylasProps} = props;
  const [client, setClient] = useState(new Nylas(nylasProps));

  const safeSetState = (state: Nylas) => {
    if(client) {
      console.warn("Client already exists.");
      return;
    }

    setClient(state);
  };

  useEffect(() => {
    if(!nylasProps || !nylasProps.serverBaseUrl) {
      return;
    }

    safeSetState(new Nylas(nylasProps));
  }, [nylasProps])

  return (
    <NylasContext.Provider value={client}>
      {children}
    </NylasContext.Provider>
  )
}

export default NylasProvider;