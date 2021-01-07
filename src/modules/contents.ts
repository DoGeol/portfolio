const SELECTED = 'contents/SELECTED' as const;

export const headerSelected = (id: number | null) => ({ type: SELECTED, payload: id });

type ContentsAction = | ReturnType<typeof headerSelected>;

type ContentsState = {
  selectedHeaderId: number | null;
};

const initialState: ContentsState = {
  selectedHeaderId: null,
};

function contents(state: ContentsState = initialState, action: ContentsAction) {
  switch (action.type) {
    case SELECTED:
      return { selectedHeaderId: action.payload };
    default:
      return state;
  }
}

export default contents;