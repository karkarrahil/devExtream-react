import { Form, Sortable, TabPanel, Tabs } from 'devextreme-react'
import { Item } from 'devextreme-react/tab-panel'

import React from 'react'
import Detail from '../DetailPage/Detail'
import './FormMaster.css'

const FormMaster = () => {


  return (
    <div>
      <TabPanel deferRendering={false} id={'tabPanel'} focusStateEnabled={false}>
        <Item title={"New Firm(F11)"}>

          <TabPanel hoverStateEnabled={false} focusStateEnabled={false} scrollByContent={true}>
            <Item title={'Firm Detail'} visible={true} >
              <Detail />
            </Item>
            <Item title={'Message Detail'}>
              <p>No data</p>
            </Item>
          </TabPanel>
        </Item>
        <Item title={"List Firm(F12)"}>
          <p>No data available</p>
        </Item>
      </TabPanel>
    </div>
  )
}

export default FormMaster