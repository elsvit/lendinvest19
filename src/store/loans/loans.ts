import { Reducer } from "redux";

import { ILoan, ITransformedLoans } from "../../types/ILoans";

// Actions
export enum LoansActions {
  GET_LOANS = "loans/GET_LOANS",
  SET_LOANS = "loans/SET_LOANS",
  SET_CHECKED_LOAN = "loans/SET_CHECKED_LOAN",
  RESET = "loans/RESET"
}

export type LoansLoadableT = typeof LoansActions.GET_LOANS;

export interface IGetLoansAction {
  type: typeof LoansActions.GET_LOANS;
}

interface ISetLoansAction {
  type: typeof LoansActions.SET_LOANS;
  payload: ITransformedLoans;
}
interface ISetCheckedLoanAction {
  type: typeof LoansActions.SET_CHECKED_LOAN;
  payload: ILoan;
}

interface IResetLoansAction {
  type: typeof LoansActions.RESET;
}

type LoansActionsT =
  | IGetLoansAction
  | ISetLoansAction
  | ISetCheckedLoanAction
  | IResetLoansAction;

export const getLoansAction = (): IGetLoansAction => ({
  type: LoansActions.GET_LOANS
});

export const setLoansAction = (
  payload: ITransformedLoans
): ISetLoansAction => ({
  type: LoansActions.SET_LOANS,
  payload
});

export const setCheckedLoanAction = (
  payload: ILoan
): ISetCheckedLoanAction => ({
  type: LoansActions.SET_CHECKED_LOAN,
  payload
});

export const resetLoansAction = (): IResetLoansAction => ({
  type: LoansActions.RESET
});

//Reducer
export interface ILoansState {
  loans: ILoan[];
  ltv: number;
  amount: number;
}

export type LoansStateT = Readonly<ILoansState>;

const initialState: ILoansState = {
  loans: [],
  ltv: 0,
  amount: 0
};

const reducer: Reducer<LoansStateT> = (
  state: ILoansState = initialState,
  action: LoansActionsT
) => {
  switch (action.type) {
    case LoansActions.SET_LOANS:
      return {
        ...state,
        ...action.payload
      };

    case LoansActions.SET_CHECKED_LOAN: {
      const {payload} = action;
      const loanIdx = state.loans.findIndex(
        loan => loan.id === payload.id
      );
      if (loanIdx !== -1) {
        const loans = [...state.loans];
        loans[loanIdx].checked = true;
        return {
          ...state,
          loans,
          amount: state.amount - payload.available,
        }
      }
      return state;
    }

    case LoansActions.RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
