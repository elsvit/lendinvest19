import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { Component } from "react";

import { ILoan } from "../../../../types/ILoans";

interface IInvestDialogModalProps {
  open: boolean;
  invest: () => void;
  onClose: () => void;
  loan: ILoan;
}

class InvestDialogModal extends Component<IInvestDialogModalProps> {
  public render() {
    const { loan } = this.props;
    const title = `Invest $${loan.available.toFixed(2)} to tranche ${
      loan.tranche
    }?`;

    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="invest-dialog-title"
        aria-describedby="invest-dialog-description"
      >
        <DialogTitle id="invest-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="invest-dialog-description">
            Are You sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.props.invest} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default InvestDialogModal;
