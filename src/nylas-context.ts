import * as React from 'react';
import Nylas from '@nylas/nylas-js';

const NylasContext = React.createContext<Nylas | null>(null);

export const useNylas = (): Nylas => React.useContext(NylasContext) as Nylas;

export default NylasContext;
