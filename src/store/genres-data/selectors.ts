import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveGenre = (state: Pick<State, NameSpace.Genre>): string => state[NameSpace.Genre].genre;
