import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { tabs } from 'app/helpers/data'

import {
  Container,
  TabsContainer,
  Tab,
  ContentContainer
} from './styled'

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(tabs[0].tabSlug)

  return (
    <Container>
      <TabsContainer>
        {
          tabs.map(tab =>
            (
              <Tab
                key={tab.id}
                onClick={() => setSelected(tab.tabSlug)}
                active={tab.tabSlug === selected}
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
  )
}

Tabs.propTypes = {
  children: PropTypes.node
}

export default Tabs
