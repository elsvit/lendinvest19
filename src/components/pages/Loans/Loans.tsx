import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { toast } from "react-toastify";

import { IAppState } from "../../../store";
import { getLoansAction, setCheckedLoanAction } from "../../../store/loans";
import { ILoan } from "../../../types/ILoans";
import LoansView from "./LoansView";
import InvestDialogModal from "./InvestDialogModal";

interface IStateMap {
  loans: ILoan[];
  amount: number;
}

interface IDispatchMap {
  getLoans: typeof getLoansAction;
  setCheckedLoan: typeof setCheckedLoanAction;
}

type ILoansProps = IStateMap & IDispatchMap;

interface ILoansState {
  isModalOpen: boolean;
  loan: Maybe<ILoan>;
}

class Loans extends Component<ILoansProps, ILoansState> {
  constructor(props: ILoansProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      loan: null
    };
  }

  public componentDidMount(): void {
    this.props.getLoans();
  }

  public onClick = (loan: ILoan) => {
    const { loans, amount } = this.props;
    if (loan && loan.checked) {
      toast.info("This tranche is already invested");
    } else {
      if (amount >= loan.available) {
        this.setState({
          isModalOpen: true,
          loan
        });
      } else {
        toast.error("Your amount less then loan available");
      }
    }
  };

  public invest = () => {
    const { loan } = this.state;
    this.closeModal();
    loan && this.props.setCheckedLoan(loan);
  };

  public closeModal = () => {
    this.setState({
      isModalOpen: false,
      loan: null
    });
  };

  public render() {
    return (
      <>
        <LoansView
          loans={this.props.loans}
          amount={this.props.amount}
          onClick={this.onClick}
        />
        {this.state.loan != null && (
          <InvestDialogModal
            open={this.state.isModalOpen}
            onClose={this.closeModal}
            invest={this.invest}
            loan={this.state.loan}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = ({ loans: { loans, amount } }: IAppState) => ({
  loans,
  amount
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getLoans: getLoansAction,
      setCheckedLoan: setCheckedLoanAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loans);
