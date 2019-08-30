import React from 'react';
import './Footer.scss';

import { ExternalLink as ExLink } from '../../common/ExternalLink/ExternalLink';

export default () => {
  return (
    <footer id="footer">
      <p>
        Volunteer Core was built by <ExLink to="https://alex-cannon.github.io/portfolio/">Alex L Cannon</ExLink> and <ExLink to="https://www.linkedin.com/in/steven-abadie/">Steven Abadie</ExLink> at <ExLink to="http://codeforfoco.org/">Code for FoCo</ExLink>
      </p>
    </footer>
  )
};