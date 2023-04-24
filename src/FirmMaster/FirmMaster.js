/* eslint-disable jsx-a11y/no-access-key */
import { Button, Popup, RadioGroup, TabPanel } from 'devextreme-react'
import React, { useCallback, useEffect, useState } from 'react'
import '.././report.css'

import { Menu } from 'devextreme-react'

import logo from './../Images/logo.png'
import './MenuBar.css'
import './FirmMaster.css'


import { MenuItems, sequence } from './MenuItem'
const FirmMaster = () => {
    const [tab, setTab] = useState([]);     
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState('light');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const AllTab = sequence.flat(); 
    useEffect(() => {
        const styleLink = document.querySelector('#style-link');
        styleLink.setAttribute('href', `https://cdn3.devexpress.com/jslib/21.1.6/css/dx.${selectedTheme}.css`);
        
        
    }, [selectedTheme])
    console.log( document.body.style.backgroundColor)
    const radioOptions = [
        { text: 'light', value: "light" },
        { text: 'dark', value: "dark" },
        { text: 'dark-moon', value: "darkmoon" },
        { text: 'contrast', value: "contrast" },
        { text: 'greenmist', value: "greenmist" },
    ];
    if (selectedTheme === "light") {
        document.body.style.backgroundColor = "#f4f4f4"
    }
    else if (selectedTheme === "dark") {
        document.body.style.backgroundColor = "#545454"


    }
    else if (selectedTheme === "darkmoon") {
        document.body.style.backgroundColor = "#69758a"
    }
    else if (selectedTheme === "contrast") {
        document.body.style.backgroundColor = "#353535"
    }
    else if (selectedTheme === "greenmist") {
        document.body.style.backgroundColor = "#7eede5"
    }


    const handleConfirm = (e) => {
        // console.log(e)
        setSelectedTheme(e.value)
        setIsPopupVisible(false);
    };

    const closeTeb = useCallback((item) => {
        const newTab = [...tab];

        const index = newTab.indexOf(item)
        newTab.splice(index, 1);
        setTab(newTab)
        if (index >= newTab.length && index > 0) {
            setSelectedItem(newTab[index - 1]);
        }
    }, [tab, setSelectedItem, setTab])


    const renderTitle =useCallback((data) => (


        <>
            <span style={{
                marginRight
                    : '12px',
                textAlign: 'center',

            }}>{data.name}</span>

            <i className='dx-icon dx-icon-close' onClick={() => closeTeb(data)}></i>


        </>


    ), [tab, closeTeb]);

    // const renderContent = useCallback(() => {
    //     if (selectedTabedata === 1) {
    //         return <Firmdetailsform />;
    //     } else if (selectedTabedata === 2) {
    //         return <h1>Account Master</h1>;
    //     } else if (selectedTabedata === 3) {
    //         return <h1>Bank Master</h1>;
    //     } else if (selectedTabedata === 4) {
    //         return <h1>Master 123</h1>;
    //     }
    // }, [selectedTabIndex, selectedTabedata]);

    return (
        <div>
            <div className="rootMenu">
                <div className="header">
                    <img src={logo} alt="" className='logo' />
                    <p style={{ color: 'gray' }}>MegiTech</p>
                </div>
                <div className="mainMenu">
                    <Menu dataSource={MenuItems} displayExpr="name" onItemClick={(e) => {
                        let name = e.itemData.name
                        console.log("e.itemdata--", e.itemData)
                        const alreadyInTab = tab.findIndex(
                            (ele) => ele.id === e.itemData.id
                        );
                        console.log(alreadyInTab);
                        if (alreadyInTab > -1) {
                            // setTab([e.itemData, ...tab])
                            return false;
                        } else {
                            let includesData = AllTab.some((item) => item.id === e.itemData.id);
                            if (includesData === true) {
                                setTab([e.itemData, ...tab])
                            } 
                            

                        }

                        if (name === "Theme") {
                            setIsPopupVisible(true)
                        }


                    }} />
                </div>
            </div>
            <Popup dragEnabled={false} visible={isPopupVisible} width={500} height={400} onHiding={() => setIsPopupVisible(false)} closeOnOutsideClick={true} showTitle={true} title={"select option"}>
                <div className='themProvider'>

                    <RadioGroup items={radioOptions} onValueChange={handleConfirm} stylingMode={'outlined'} />
                </div>
            </Popup>    
            <TabPanel
                dataSource={tab}
                showNavButtons={true}
                scrollingEnabled={true}
                accessKey={'Hello'}
                itemTitleRender={renderTitle}
                focusStateEnabled={false}
                selectedItem={selectedItem}

                repaintChangesOnly={true}
                itemRender={(e) => {
                    return e.component
                }
                }

            >
            </TabPanel >    
        </div >
    )
}

export default FirmMaster