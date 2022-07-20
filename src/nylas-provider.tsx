import React, {useEffect, useState} from "react";
import NylasContext from "./nylas-context";
import Nylas from "@nylas/nylas-js";

export interface NylasProviderProperties {
  serverBaseUrl: string;
  children?: React.ReactNode;
}

const NylasProvider = (props: NylasProviderProperties): JSX.Element => {
  const {children, ...nylasProps} = props;
  const [client, setClient] = useState<Nylas>();

  useEffect(() => {
    if(!props || !props.serverBaseUrl) {
      return;
    }

    setClient((nylas) => {
      if(client) {
        return client;
      }

      return nylas;
    });
  }, [props])

  return (
    <NylasContext.Provider value={client}>
      {children}
    </NylasContext.Provider>
  )
}

export default NylasProvider;