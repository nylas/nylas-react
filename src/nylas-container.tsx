import React, { useCallback, useState } from "react";
import NylasContext from "./nylas-context";
import Nylas, { AuthUrlOptions, ExchangeCodeOptions } from "@nylas/nylas-js";

export interface NylasContainerOptions {
  serverBaseUrl: string;
  children?: React.ReactNode;
}

const NylasContainer = (opts: NylasContainerOptions): JSX.Element => {
  const {children, ...nylasProps} = opts;
  const [client] = useState(() => new Nylas(nylasProps));
  const [authState, setAuthState] = useState(false);

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

export default NylasContainer;