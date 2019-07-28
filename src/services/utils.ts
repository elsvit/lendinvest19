import isEmpty from "lodash-es/isEmpty";
import { ILoan, IRawLoan, ITransformedLoans } from "../types/ILoans";

export const transformRawLoans = (rawLoans: {
  loans: IRawLoan[];
}): ITransformedLoans => {
  if (isEmpty(rawLoans.loans)) {
    return {
      loans: [],
      ltv: 0,
      amount: 0
    };
  }
  return {
    loans: rawLoans.loans.map((rawLoan: IRawLoan) => {
      const { id, title, tranche, ...rest } = rawLoan;
      return {
        id,
        title,
        tranche,
        available: Number(rest.available),
        annualisedReturn: Number(rest.annualised_return),
        termRemaining: Number(rest.term_remaining),
        checked: false
      };
    }),
    ltv: Number(rawLoans.loans[0].ltv),
    amount: Number(rawLoans.loans[0].amount)
  };
};
