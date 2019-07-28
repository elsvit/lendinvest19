import {put, takeEvery} from 'redux-saga/effects';
import {CURRENT_LOANS} from '../../constants/stub'
import {ILoan, IRawLoan} from '../../types/ILoans'
// import { api } from '../store'; // todo in real app
import {LoansActions, setLoansAction,} from './loans';
import {transformRawLoans}from '../../services/utils'

export function* sagaGetLoans() {
  try {
    // yield put(setLoading({ actionType: LoansActions.GET_LOANS })); // todo in real app
    // const res: IListResponse<ICountry> = yield api.listsApi.getLoans(payload); //todo in real app
    // yield put(setLoaded({ actionType: LoansActions.GET_LOANS })); // todo in real app
    const data: {loans: IRawLoan[]} = CURRENT_LOANS;
    yield put(setLoansAction(transformRawLoans(data)));
  } catch (err) {
    console.error('ERROR'); // todo error handler in real app
  }
}

export default function*(): Generator {
  yield takeEvery(LoansActions.GET_LOANS, sagaGetLoans);
}
