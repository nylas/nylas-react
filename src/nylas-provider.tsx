import React, {useCallback, useState} from "react";
import NylasContext from "./nylas-context";
import Nylas, {AuthUrlOptions, ExchangeCodeOptions} from "@nylas/nylas-js";

export interface NylasProviderProperties {
  serverBaseUrl: string;
  children?: React.ReactNode;
}

const NylasProvider = (props: NylasProviderProperties): JSX.Element => {
  const {children, ...nylasProps} = props;
  // todo::set to state
  const [client] = useState(() => new Nylas(nylasProps));

  //todo::safeSetState

  const authWithRedirect = useCallback(
    async (opts: AuthUrlOptions): Promise<void|boolean> => client.authWithRedirect(opts),
    [client]
  );

  const exchangeCodeFromUrlForToken = useCallback(
    async (opts?: ExchangeCodeOptions): Promise<string | boolean> => client.exchangeCodeFromUrlForToken(opts),
    [client]
  )

  return (
    <NylasContext.Provider value={{
      client,
      authWithRedirect,
      exchangeCodeFromUrlForToken
    }}>
      {children}
    </NylasContext.Provider>
  )
}

export default NylasProvider;