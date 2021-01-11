import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { headerSelected } from '../../modules/contents';
import { useCallback } from 'react';

export default function useMainNav() {
  const selectedHeaderId = useSelector((state: RootState) => state.contents.selectedHeaderId);
  const dispatch = useDispatch();

  const onSelected = useCallback((id: number | null) => dispatch(headerSelected(id)), [dispatch]);
  return {
    selectedHeaderId,
    onSelected,
  };
}