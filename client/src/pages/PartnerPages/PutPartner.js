import React, { Component } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import { store } from '../../utils/services/store';
import { connect } from 'react-redux';
import PartnerForm from './PartnerForm.js';

import { setPostPartnerFormField, setPartnerResult, setPartnerError } from '../../utils/services/partner/partnerActions';

import putPartner from '../../utils/services/partner/putPartner';
import getPartner from '../../utils/services/partner/getPartner';
const dispatch = store.dispatch;

export class PutPartner extends Component {
  componentDidMount() {
    const { match, setField, setPartnerResult, setPartnerError } = this.props;
    getPartner(match.params.id, (data, error) => {
      if (error) return dispatch(setPartnerError(error));
      dispatch(setPartnerResult({}));
      Object.keys(data).forEach(key => {
        dispatch(setField(key, data[key]));
      });
    });
  }

  render () {
    const { initialFormData, formData } = this.props;
    const { loading: getLoading, success: getSuccess, error: getError } = initialFormData;
    const { loading: putLoading, success: putSuccess, error: putError } = formData;
 
    return (
      <PageWrapper>
        <h3>Edit Partner</h3>
        <p>
          <Link to="/partners">&lt;-- Search Partners</Link>
        </p>
        {getLoading ? <p>Loading Partner...</p> : ''}
        {getSuccess ? (
          <PartnerForm
            submitData={putPartner}
            submitText="Save Changes"
            submitClass="btn btn-warning"
          />
        ) : ''}
        {getError ? <p className="text-danger">{getError.message}. Please reload the page.</p> : ''}
        <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
        { putLoading ? <p>Saving Changes...</p>: ''}
        { putError ? <p className="text-danger">{putError.message}</p>: ''}
        { putSuccess ? <p className="text-success">Changes Saved!</p>: ''}
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  initialFormData: state.getPartner,
  formData: state.partnerForm
});

const mapDispatchToProps = () => ({
  setField: setPostPartnerFormField,
  setPartnerResult,
  setPartnerError
});

const PutPartnerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <PutPartner {...props}/>);

export default PutPartnerPageContainer;