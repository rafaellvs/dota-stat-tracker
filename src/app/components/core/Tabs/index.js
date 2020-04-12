import React from 'react'
import PropTypes from 'prop-types'

import { tabs } from 'app/helpers/data'

import {
  Container,
  TabsContainer,
  Tab,
  ContentContainer
} from './styled'

const Tabs = ({ selected, setSelected, children }) =>
  <Container>
    <TabsContainer>
      {
        tabs.map(tab =>
          (
            <Tab
              key={tab.id}
              onClick={() => setSelected(tab.slug)}
              active={tab.slug === selected}
            >
              <h3>{tab.label}</h3>
            </Tab>
          )
        )
      }
    </TabsContainer>

    <ContentContainer>
      {React.cloneElement(children, { selected: selected })}
    </ContentContainer>
  </Container>

Tabs.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
  children: PropTypes.node
}

export default Tabs
