import { Transition as TTransition } from "../api/transition/Transition";

export const TRANSITION_TITLE_FIELD = "transitionId";

export const TransitionTitle = (record: TTransition): string => {
  return record.transitionId?.toString() || String(record.id);
};
