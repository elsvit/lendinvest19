import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import React from "react";

import { ILoan } from "../../../types/ILoans";
import "./loans.scss";

interface ILoansViewProps {
  loans: ILoan[];
  amount: number;
  onClick: (loan: ILoan) => void;
}

const LoansView = ({ loans, amount, onClick }: ILoansViewProps) => {
  const amountText = `Amount: $${amount.toFixed(2)}`;
  return (
    <div className={"loans-page"}>
      <div className="loans-amount">{amountText}</div>
      {loans.map((loan: ILoan) => (
        <Paper
          className={"loan-row"}
          key={loan.id}
          onClick={() => {
            onClick(loan);
          }}
        >
          <Grid container>
            <Grid container item xs={11}>
              <Grid item xs={12}>
                <div className="loan-title">{loan.title}</div>
              </Grid>
              <Grid item xs={3}>
                <div className="loan-title">{`Tranche: ${loan.tranche}`}</div>
              </Grid>
              <Grid item xs={3}>
                <div className="loan-title">{`Available: ${
                  loan.available
                }`}</div>
              </Grid>
              <Grid item xs={3}>
                <div className="loan-title">{`Return: ${
                  loan.annualisedReturn
                }`}</div>
              </Grid>
            </Grid>
            <Grid xs={1}>
              <Checkbox checked={loan.checked} />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default LoansView;
