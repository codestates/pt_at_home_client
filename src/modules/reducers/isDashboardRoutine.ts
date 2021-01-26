const DASHBOARD_TYPE_ROUTINE = 'DASHBOARD_TYPE_ROUTINE';

interface ActionToggleDashboardType {
  type: string;
  payload: boolean;
}
export const actionToggleDashboardType = (
  payload: boolean,
): ActionToggleDashboardType => ({
  type: DASHBOARD_TYPE_ROUTINE,
  payload,
});

const initialState: boolean = false;

const isDashboardRoutine = (
  state = initialState,
  action: ActionToggleDashboardType,
): boolean => {
  switch (action.type) {
    case DASHBOARD_TYPE_ROUTINE:
      return action.payload;
    default:
      return state;
  }
};

export default isDashboardRoutine;
