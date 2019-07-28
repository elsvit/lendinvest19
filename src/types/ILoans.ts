export interface IRawLoan {
  id: string;
  title: string;
  tranche: string;
  available: string;
  annualised_return: string;
  term_remaining: string;
  ltv: string;
  amount: string;
}

export interface ILoan {
  id: string;
  title: string;
  tranche: string;
  available: number;
  annualisedReturn: number;
  termRemaining: number;
  checked: boolean;
}

export interface ITransformedLoans {
  loans: ILoan[],
  ltv: number,
  amount: number,
}

