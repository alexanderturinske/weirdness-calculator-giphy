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

const LinkButton = ({
  history,
  onClick = _.noop,
  to,
  staticContext,
  ...rest
}) => (
  // ^ filtering out props that `button` doesn’t know what to do with.
  <button
    type="submit"
    {...rest}
    onClick={event => {
      // eslint-disable-next-line no-unused-expressions
      onClick && onClick(event);
      history.push(to);
    }}
  />
);

LinkButton.propTypes = {
  history: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  staticContext: PropTypes.object,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
