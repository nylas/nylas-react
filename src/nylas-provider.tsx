import React, { useCallback, useState } from "react";
import NylasContext from "./nylas-context";
import Nylas, { AuthUrlOptions, ExchangeCodeOptions } from "@nylas/nylas-js";

export interface NylasProviderProperties {
  serverBaseUrl: string;
  children?: React.ReactNode;
}

const NylasProvider = (props: NylasProviderProperties): JSX.Element => {
  const {children, ...nylasProps} = props;
  // todo::set to state
  const [client] = useState(() => new Nylas(nylasProps));
  // todo::eliminate
  const [authState, setAuthState] = useState(false);

  //todo::safeSetState

  const authWithRedirect = useCallback(
    async (opts: AuthUrlOptions): Promise<void|boolean> => client.authWithRedirect(opts),
    [client]
  );

  const exchangeCodeFromUrlForToken = useCallback(
    async (opts?: ExchangeCodeOptions): Promise<string | boolean> => {
      const accessToken = await client.exchangeCodeFromUrlForToken(opts);
      if(accessToken !== false) {
        setAuthState(true);
      }

      return accessToken;
    },
    [client, authState]
  )

  return (
    <NylasContext.Provider value={{
      client,
      authState,
      authWithRedirect,
      exchangeCodeFromUrlForToken
    }}>
      {children}
    </NylasContext.Provider>
  )
}

export default NylasProvider;