import * as React from 'react';
import Nylas, {AuthUrlOptions, ExchangeCodeOptions} from "@nylas/nylas-js";

export interface NylasContextInterface {
  client: Nylas;
  authState: boolean;
  authWithRedirect(opts: AuthUrlOptions): Promise<void|boolean>;
  exchangeCodeFromUrlForToken(opts?: ExchangeCodeOptions): Promise<string | boolean>;
}

const NylasContext = React.createContext<NylasContextInterface | null>(null);

export const useNylas = (): NylasContextInterface => React.useContext(NylasContext) as NylasContextInterface;

export default NylasContext;