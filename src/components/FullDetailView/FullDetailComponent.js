// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React, { Component, Fragment } from 'react'
import { Row, Button, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cloneDeep from 'lodash/cloneDeep'
import find from 'lodash/find'
import get from 'lodash/get'
import { Section } from '../'
import FileList from '../FileList'
import FacetsEditor from '../FacetsEditor'
import Tooltip from 'antd/lib/tooltip'
import Contribution from '../../utils/contribution'
import DescribedSection from '../Navigation/Sections/DescribedSection'
import RawDataSection from '../Navigation/Sections/RawDataSection'
import HeaderSection from '../Navigation/Sections/HeaderSection'
import LabelRenderer from '../Navigation/Ui/LabelRenderer'
import LicensedSection from '../Navigation/Sections/LicensedSections'
import ButtonWithTooltip from '../Navigation/Ui/ButtonWithTooltip'
import CurationsSection from '../Navigation/Sections/CurationsSection'
import TitleWithScore from '../Navigation/Ui/TitleWithScore'

class FullDetailComponent extends Component {
  static propTypes = {
    handleClose: PropTypes.func,
    handleSave: PropTypes.func,
    handleRevert: PropTypes.func,
    curations: PropTypes.object.isRequired,
    definition: PropTypes.object.isRequired,
    harvest: PropTypes.object.isRequired,
    modalView: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool.isRequired,
    renderContributeButton: PropTypes.element,
    previewDefinition: PropTypes.object,
    getCurationData: PropTypes.func
  }

  /* eslint-disable react/jsx-no-comment-textnodes */
  globTooptipText() {
    return (
      <div>
        <p>
          Globbing patterns use common wildcard patterns to provide a partial path that can match zero or hundreds of
          files all at the same time.
        </p>
        <p>"?" matches a single character.</p>
        <p>"*" matches any number of characters within name.</p>
        For example:
        <br />
        // Match any file or folder starting with "foo"
        <br />
        <code>foo*</code>
        <br />
        // Match any file or folder starting with "foo" and ending with .txt
        <br />
        <code>foo*.txt</code>
        <br />
        // Match any file or folder ending with "foo"
        <br />
        <code>*foo</code>
        <br />
        // Match a/b/z but not a/b/c/z
        <br />
        <code>a/*/z</code>
        <br />
        // Match a/z and a/b/z and a/b/c/z
        <br />
        <code>a/**/z</code>
        <br />
        // Matches hat but not ham or h/t
        <br />
        <code>/h?t</code>
      </div>
    )
    /* eslint-enable react/jsx-no-comment-textnodes */
  }

  render() {
    const {
      definition,
      harvest,
      onChange,
      previewDefinition,
      readOnly,
      handleRevert,
      changes,
      getCurationData,
      curations,
      inspectedCuration
    } = this.props
    if (!definition || !definition.item || !curations || !harvest) return null
    const filesOrFacetsHaveBeenChanged = find(
      changes,
      (_, key) => (key && key.startsWith('files')) || key.startsWith('described.facets')
    )
    const item = { ...definition.item }
    const image = Contribution.getImage(item)
    return (
      <div>
        <Row>
          <Col md={1}>{image && <img className={`list-image`} src={image} alt="" />}</Col>
          <Col md={11}>
            <HeaderSection {...this.props} />
          </Col>
        </Row>
        <Row>
          <Col md={1} />
          <Col md={11}>
            <Section name={<TitleWithScore title={'Described'} domain={item.described} />}>
              <Fragment>
                <DescribedSection rawDefinition={item} {...this.props} />
                <Row className="mt-3">
                  <Col md={6}>
                    <Row>
                      <Col md={3}>
                        <LabelRenderer text="Facets" />
                      </Col>
                      <Col md={9}>
                        {/* using minimatch package in service */}
                        <Tooltip title={this.globTooptipText()} overlayStyle={{ width: '800px' }}>
                          <i className="fas fa-info-circle" />
                        </Tooltip>
                      </Col>
                    </Row>
                    <FacetsEditor
                      definition={item}
                      onChange={onChange}
                      previewDefinition={previewDefinition}
                      readOnly={readOnly}
                      onRevert={handleRevert}
                    />
                  </Col>
                  <Col md={6}>
                    <CurationsSection curations={curations} />
                  </Col>
                </Row>
              </Fragment>
            </Section>
            <Section name={<TitleWithScore title={'Licensed'} domain={item.licensed} />}>
              <LicensedSection rawDefinition={item} {...this.props} />
            </Section>
            <Section
              name={
                <section>
                  <span>Files</span>
                  &nbsp;
                  {!readOnly && (
                    <ButtonWithTooltip tip="Revert all file and facet changes on this definitions">
                      <Button
                        data-test-id="revert-files-and-facets"
                        bsSize="small"
                        bsStyle="danger"
                        onClick={() => {
                          handleRevert('files')
                          handleRevert('described.facets')
                        }}
                        disabled={!filesOrFacetsHaveBeenChanged}
                      >
                        <i className="fas fa-undo" />
                        <span>&nbsp;Revert Changes</span>
                      </Button>
                    </ButtonWithTooltip>
                  )}
                </section>
              }
              actionButton={
                get(item, 'described.urls.download') && (
                  <Button bsStyle="primary" href={get(item, 'described.urls.download')}>
                    <i className="fas fa-download" />
                    <span>&nbsp;Download component</span>
                  </Button>
                )
              }
            >
              <Row>
                <Col md={12}>
                  <FileList
                    files={cloneDeep(item.files)}
                    onChange={onChange}
                    component={definition}
                    previewDefinition={previewDefinition}
                    readOnly={readOnly}
                  />
                </Col>
              </Row>
            </Section>
            <Section name="Raw data">
              <Row>
                <Col md={12}>
                  <RawDataSection
                    curations={curations}
                    definition={definition}
                    item={item}
                    getCurationData={getCurationData}
                    inspectedCuration={inspectedCuration}
                    harvest={harvest}
                  />
                </Col>
              </Row>
            </Section>
          </Col>
        </Row>
      </div>
    )
  }
}

export default FullDetailComponent
