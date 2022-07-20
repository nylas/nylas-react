import * as React from 'react';
import Nylas from '@nylas/nylas-js';

export interface NylasContextInterface {
  client: Nylas;
}

const NylasContext = React.createContext<NylasContextInterface | null>(null);

export const useNylas = (): NylasContextInterface =>
  React.useContext(NylasContext) as NylasContextInterface;

export default NylasContext;
