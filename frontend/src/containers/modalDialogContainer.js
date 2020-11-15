import _ from 'lodash';
import { connect } from 'react-redux';
import { ModalDialog } from '../components/ModalDialog';
import { closeDialog } from '../actions/dialog';
import { ReducerNames } from '../constants';

const mapStateToProps = (state, { dialogType }) =>
  _.get(state, [ReducerNames.dialog, dialogType], {});

const mapDispatchToProps = (dispatch, { dialogType }) => ({
  handleClose: () => {
    dispatch(closeDialog(dialogType));
  },
});

export const ModalDialogContainer = connect(mapStateToProps, mapDispatchToProps)(ModalDialog);
