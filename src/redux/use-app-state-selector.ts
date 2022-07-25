import { useSelector } from 'react-redux';
import { RootState } from './store';

export const useAppStateSelector = <StoreFragment>(
  selector: (state: RootState) => StoreFragment,
  equalityFn?: (left: StoreFragment, right: StoreFragment) => boolean,
) => useSelector<RootState, StoreFragment>(selector, equalityFn);
