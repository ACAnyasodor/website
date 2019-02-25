// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { withResize } from '../utils/WindowProvider'

class Section extends Component {
  static propTypes = {
    actionButton: PropTypes.element,
    children: PropTypes.element,
    name: PropTypes.string
  }

  render() {
    const { name, actionButton, children, isMobile } = this.props
    return (
      <>
        {isMobile ? (
          <>
            <Row className="section-header">
              <Col xs={12}>
                <div className="section-title">{name}</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="section-button">{actionButton}</div>
              </Col>
            </Row>
          </>
        ) : (
          <Row className="section-header">
            <Col md={3} lg={4}>
              <div className="section-title">{name}</div>
            </Col>
            <Col md={9} lg={8}>
              <div className="section-button">{actionButton}</div>
            </Col>
          </Row>
        )}
        {children}
      </>
    )
  }
}

export default withResize(Section)
