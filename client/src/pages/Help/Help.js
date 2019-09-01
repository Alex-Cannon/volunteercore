import React from 'react';

import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

export const Help = () => {
  return (
    <PageWrapper>
      <h3>Need Help?</h3>
      <p>Volunteer Core was built by <ExLink to="https://alex-cannon.github.io/portfolio/">Alex L Cannon</ExLink> and <ExLink to="https://www.linkedin.com/in/steven-abadie/">Steven Abadie</ExLink> at <ExLink to="http://codeforfoco.org/">Code for FoCo</ExLink>.</p>
      <p>Our source code is liscensed as MIT, open-source, and maintained by volunteers. We are responsible for maintaining the code that runs the website. We cannot guarantee we will maintain the production server our code lives on in the future or support general questions / issues.</p>
      <p>See the "references" section below for more information.</p>
      <br/>
      <p>If you need help, we recommend you follow the steps below:</p>
      <ol>
        <li>Try to find an answer in the "Common Questions" section.</li>
        <li>
          <p>
            If you still can't find an answer to your question...
          </p>
          <ol>
            <li>If it is a non-technical question, contact your site administrator.</li>
            <li>If it is a technical question, follow the instructions below on "Submitting an issue"</li>
          </ol>
        </li>
      </ol>
      <br/>
      <h4>> Common Questions</h4>
      <p>Q: How do I sign up?</p>
      <p>A: Only site Administrators can create new accounts.</p>
      <br/>
      <p>Q: I forgot my password. How do I reset it?</p>
      <p>A: Only site Administrators can reset passwords.</p>
      <br/>
      <p>Q: I found a <b>technical</b> issue. How do I submit it?</p>
      <p>A: Code For FoCo will fix technical issues. See "Submitting an Issue" below.</p>
      <br/>
      <p>Q: We ran out of space in our database. What can we do?</p>
      <p>A: Contact your hosting service and expand your database. As of writing this, Heroku's postgresql service is used.</p>
      <br/>
      <p>Q: How much is charged per month?</p>
      <p>A: Code For FoCo developed Volunteer Core for free. However, a hosting service is required, which is where the app will live and serve users.</p>
      <p>As of writing this, Heroku is used as a hosting service and offers a free 500 hosting hours a month. After this threshold is exceeded, you will be charged based on Heroku's pricing policy.</p>
      <br/>
      <h4>> Submitting an issue</h4>
      <p>
        If you have a feature request or found a technical issue,       <ExLink to="https://github.com/CodeForFoco/volunteercore/issues/new">Submit an issue on GitHub</ExLink>.
      </p>
      <br/>
      <h4>> References</h4>
      <p>Contact someone at <ExLink to="http://codeforfoco.org/">Code for FoCo</ExLink>.</p>
      <p>View our <ExLink to="https://github.com/CodeForFoco/volunteercore">Source Code</ExLink> which includes deployment documentation.</p>
    </PageWrapper>
  );
}

export default Help;