import { Box, Button, ButtonGroup, DataGrid, FileUploader, NumberBox, ResponsiveBox, SelectBox, Tabs, TextBox } from 'devextreme-react'
import Form, { GroupItem, SimpleItem, Label, ButtonItem } from 'devextreme-react/form'
import { Col, Location, Row } from 'devextreme-react/responsive-box'
import { Item } from 'devextreme-react/tabs'
import { MotionConfig, motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Detail.css'
const state = [
    {
        name: 'gujrat',
        id: 1,
    },
    {
        name: 'hariyana',
        id: 2,
    },
    {
        name: 'chandigadh',
        id: 2,
    },

]
const Detail = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        firmName: {
            code: 0,
            name: '',
            OrderBy: ''
        },
        ownerName: ''

    });

    const stateEditorOption = {
        items: ['gujarat', 'hariyana', 'panjab'],
        searchEnabled: true,
        value: ''
    }

    const typeOption = {
        items: [
            {
                name: 'proprietor',
                id: 'A'
            },
            {
                name: 'sprprietor',
                id: 'B'
            },

        ],
        displayExpr: 'name'
    }
    const chalanOption = {
        items: ['yes', 'no']
    }

    return (

        <motion.div
            initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{}} viewport={{ once: false }}>
            <form action="#" className='Form'>

                <Form colCount={12} labelLocation="top" formData={formData} className='form1'>
                    <GroupItem colSpan={6} colCount={20} cssClass={"leftSideForm"}>
                        <GroupItem colSpan={20} alignItemLabels={"start"} colCount={20} caption="Basic detail">

                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label"} >
                                <Label text={"Firm Name"} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Firm Name</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />

                            </SimpleItem>

                            <SimpleItem editorType={"empty"} dataField="code" colSpan={3} cssClass={"basicTop"}>
                                <NumberBox></NumberBox>
                                <Label text={"code"} alignment="center" />
                            </SimpleItem>

                            <SimpleItem editorType={"empty"} dataField="name" colSpan={11} cssClass={"basicTop"}>
                                <Label text={"name"} alignment="center" />
                                <TextBox />
                            </SimpleItem>

                            <SimpleItem
                                dataField="order"
                                cssClass={"basicTop"}
                                colSpan={3}
                                editorType={"empty"}
                            >
                                <NumberBox ></NumberBox>
                                <Label text={"order by"} alignment="center" />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label1"}>
                                <Label text={"Owner Name"} alignment="left" component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>owner Name</p>
                                            <span>:</span>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label1"}>
                                <Label text={"Office Address"} alignment="left" component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>Office address</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17} editorType={"empty"}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem colSpan={3} cssClass={"label1"} >
                                <Label editorType={"empty"} text={"Factory Address"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>Factory Address</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem colSpan={3} cssClass={"label1"}>
                                <Label editorType={"empty"} text={"Phone No"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>Phone No</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17}>
                                <NumberBox defaultValue={""} />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label1"}>
                                <Label text={"Email id"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>Email id</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={7} editorType={"empty"}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label1"}>
                                <Label text={"Backup Email id"} alignment="start" />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={7}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={'label1'}>
                                <Label text={"Contact people"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Contact people</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={7}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={'label1'}>
                                <Label text={"Reference by"} alignment="start" />
                            </SimpleItem>


                            <SimpleItem colSpan={7}>
                                <TextBox />
                            </SimpleItem>
                            <SimpleItem colSpan={3} cssClass={"label1"}>
                                <Label editorType={"empty"} text={"God Name in Bill"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>God Name in Bill</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17}    >
                                <TextBox />
                            </SimpleItem>
                        </GroupItem>


                        <GroupItem colCount={20} colSpan={20} caption={"Taxation Details"}>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={3}>
                                <Label text={"State Name"} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>State Name</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={4} editorType={"dxSelectBox"} editorOptions={stateEditorOption}>
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={2}>
                                <Label text={"city Name"} />
                            </SimpleItem>
                            <SimpleItem colSpan={5} editorType={"dxSelectBox"} editorOptions={stateEditorOption}>
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={2}>
                                <Label text={"pinCode"} />
                            </SimpleItem>
                            <SimpleItem colSpan={4} >
                                <NumberBox defaultValue={""} />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={3}>
                                <Label text={"GST Number"} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>GST number</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={4} editorType={"dxTextBox"} editorOptions={stateEditorOption}>
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={2}>
                                <Label text={"PAN No"} />
                            </SimpleItem>
                            <SimpleItem colSpan={5} editorType={"dxTextBox"} editorOptions={stateEditorOption}>
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={2}>
                                <Label text={"Type"} />
                            </SimpleItem>
                            <SimpleItem colSpan={4} editorType={"dxSelectBox"} editorOptions={typeOption} >
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={3}>
                                <Label text={"LUT No"} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>LUT No</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={4} editorType={"dxNumberBox"}>
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} cssClass={"label1"} colSpan={2}>
                                <Label text={"LUT Date:"} />
                            </SimpleItem>
                            <SimpleItem colSpan={5} editorType={"dxDateBox"}>
                            </SimpleItem>
                            <SimpleItem colSpan={6}></SimpleItem>
                            <SimpleItem cssClass={"label1"} editorType={"empty"} colSpan={3}>
                                <Label text={"Business Desc."} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>Bussiness  Desk</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={17} editorType={"dxTextBox"}></SimpleItem>
                        </GroupItem>
                        <GroupItem colCount={20} colSpan={20} caption={"Bank Detail"}>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label"}>
                                <Label text={"Bank Detail-1"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Bank Detail-1</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />

                            </SimpleItem>

                            <SimpleItem dataField="BankName" colSpan={5} editorType={"dxTextBox"} >
                                <Label text={'Name'} alignment="center" />
                            </SimpleItem>
                            <SimpleItem dataField="IFSC" colSpan={3} editorType={"dxTextBox"} >
                                <Label text={"IFSC"} alignment="center" />
                            </SimpleItem>
                            <SimpleItem dataField="AccountNo" colSpan={5} editorType={"dxNumberBox"} >
                                <Label text={"A/C No"} alignment="center" />
                            </SimpleItem>
                            <SimpleItem dataField="Branch" colSpan={4} editorType={"dxTextBox"} >
                                <Label text={"Branch"} alignment="center" />
                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={"label1"}>
                                <Label text={"Bank Detail-2"} alignment="start" component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Bank Detail-2</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={5}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={3}></SimpleItem>
                            <SimpleItem editorType={'dxNumberBox'} colSpan={5}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={4}></SimpleItem>

                        </GroupItem>
                    </GroupItem>
                    <GroupItem colSpan={6} colCount={20}>
                        <GroupItem colCount={20} colSpan={20} caption={"Financial Year"} >
                            <SimpleItem editorType={"empty"} colSpan={3} >
                                <Label text={'Financial Form Year'} component={() => {
                                    return (
                                        <div className='autoLabel'>
                                            <p className='p'>Financial Form Year</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={6} editorType="dxDateBox">

                            </SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={1} >
                                <Label text={'To'} component={() => {
                                    return (
                                        <div className='autoLabel'>
                                            <p className='p'>To</p>
                                            <span>:</span>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem colSpan={6} editorType="dxDateBox">

                            </SimpleItem>
                        </GroupItem>
                        <GroupItem colSpan={20} colCount={20} caption={"Bank Detail"}>
                            <SimpleItem colSpan={3} >
                                <Label text={'SGST A/C'} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>SGST A/C</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxSelectBox'} colSpan={12}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={5}></SimpleItem>
                            <SimpleItem colSpan={3} >
                                <Label text={'CGST A/C'} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>CGST A/C</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxSelectBox'} colSpan={12}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={5}></SimpleItem>
                            <SimpleItem colSpan={3}  >
                                <Label text={'IGST A/C'} component={() => {
                                    return (
                                        <div className='customLabel'    >
                                            <p className='labelText'>IGST A/C</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxSelectBox'} colSpan={12}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={5}></SimpleItem>
                            <SimpleItem colSpan={3}>
                                <Label text={'OTHER A/C'} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>OTHER A/C</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxSelectBox'} colSpan={12}></SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={5}></SimpleItem>
                            <SimpleItem colSpan={3} cssClass={'label1'}>
                                <Label text={'Challan Multi Book'} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Challan Multi Book</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorOptions={chalanOption} colSpan={3} editorType={'dxSelectBox'}></SimpleItem>
                        </GroupItem>
                        <GroupItem colSpan={20} colCount={20} caption={"E-invoice/E-wayBill credential"}>
                            <SimpleItem colSpan={3}>
                                <Label text={'E-Inv UName'} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>E-inv UName</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={7}></SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3} cssClass={'labelDate'}>
                                <Label text={'E-Inv Pass'} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={7}></SimpleItem>
                            <SimpleItem colSpan={3} >
                                <Label text={'E-Way UName'} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>E-Way UName</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={7}></SimpleItem>
                            <SimpleItem colSpan={3} cssClass={'labelDate'}>
                                <Label text={'E-way Pass'} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={7}></SimpleItem>
                            <SimpleItem editorType={"empty"} colSpan={3}>
                                <Label text={'Ins. policy No. '} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Ins.policy No.</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextBox'} colSpan={7}></SimpleItem>

                            <SimpleItem colSpan={3} cssClass={'labelDate'}>
                                <Label text={'Ins. Expy Date '} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxDateBox'} colSpan={7}></SimpleItem>
                            <SimpleItem colSpan={3} editorType={"empty"}>
                                <Label text={'Terms & conditions'} component={() => {
                                    return (
                                        <div className='customLabel'>
                                            <p className='labelText'>Terms & conditions</p>
                                            <p>:</p>
                                        </div>
                                    )
                                }} />
                            </SimpleItem>
                            <SimpleItem editorType={'dxTextArea'} colSpan={17} editorOptions={{ height: 140 }}></SimpleItem>
                            <SimpleItem editorType={"empty"} dataField={'Firm logo'} colSpan={8} cssClass="fileuploader-container">
                                <FileUploader selectButtonText="browse" labelText="" accept="image/*" uploadMode="useForm" className='uploader'>

                                </FileUploader>

                                <Label text={"Firm logo"} alignment="center" />
                            </SimpleItem>
                            <SimpleItem dataField={'Firm logo'} editorType={"empty"} colSpan={8} cssClass="fileuploader-container" >
                                <FileUploader selectButtonText="browse" labelText="" accept="image/*" uploadMode="useForm" className='uploader' />
                                <Label text={"Signature"} alignment="center" />
                            </SimpleItem>
                        </GroupItem>
                    </GroupItem>

                </Form>
                <hr />
                <div className="btn-group">
                    <Button className='btn1' type='default' icon='plus' text='New' />
                    <Button className='btn1' type='default' onClick={(e) => navigate('/TextInvoice')} icon='file' text='save' />
                    <Button className='btn1' type='default' icon='clear' text='Clear' />
                    <Button className='btn1' type='default' icon='trash' text='delete' />
                    <Button className='btn1' type='default' icon='find' text='find' />
                    <Button className='btn1' type='default' icon='close' text='exit' />
                </div>


            </form >

        </motion.div>
    )
}

export default Detail