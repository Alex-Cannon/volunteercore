import React, { Component } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Link } from 'react-router-dom';
import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import { store } from '../../utils/services/store';
import { connect } from 'react-redux';
import PartnerForm from './PartnerForm.js';

import { setPostPartnerFormData as setFormData, setGetPartnerResult, setGetPartnerError } from '../../utils/services/partner/partnerActions';

import putPartner from '../../utils/services/partner/putPartner';
import getPartner from '../../utils/services/partner/getPartner';
const dispatch = store.dispatch;

export class PutPartner extends Component {
  componentDidMount() {
    const { match, setField, setGetPartnerResult, setGetPartnerError } = this.props;
    getPartner(match.params.id, (data, error) => {
      if (error) return dispatch(setGetPartnerError(error));
      dispatch(setGetPartnerResult({}));
      Object.keys(data).forEach(key => {
        dispatch(setField(key, data[key]));
      });
    });
  }

  render () {
    const { initialFormData, putPartnerForm } = this.props;
    const { loading: getLoading, result: getResult, error: getError } = initialFormData;
    const { loading: putLoading, result: putResult, error: putError } = putPartnerForm;
 
    return (
      <PageWrapper>
        <h3>Edit Partner</h3>
        <p>
          <Link to="/partners">&lt;-- Search Partners</Link>
        </p>
        {getLoading ? <p>Loading Partner...</p> : ''}
        {getResult ? (
          <PartnerForm
            submitData={putPartner}
            submitText="Save Changes"
            submitClass="btn btn-warning"
          />
        ) : 'No Result'}
        {getError ? <p className="text-danger">{getError.message}. Please reload the page.</p> : ''}
        <p>* Request modifications to this form by <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">submitting an issue</ExLink>.</p>
        { putLoading ? <p>Saving Changes...</p>: ''}
        { putError ? <p className="text-danger">{putError.message}</p>: ''}
        { putResult ? <p className="text-success">Changes Saved!</p>: ''}
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  initialFormData: state.getPartner,
  putPartnerForm: state.putPartnerForm
});

const mapDispatchToProps = () => ({
  setFormData,
  setGetPartnerResult,
  setGetPartnerError
});

const PutPartnerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <PutPartner {...props}/>);

export default PutPartnerPageContainer;