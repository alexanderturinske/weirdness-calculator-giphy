/*
 * LinkedButton
 *
 * A button that acts like a link
 *
 */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

const LinkButton = ({ history, onClick = _.noop, to, staticContext, ...rest }) => {
  // ^ filtering out props that `button` doesn’t know what to do with.
  return (
    <button
      type="submit"
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  history: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
