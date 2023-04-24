import Detail from "../components/DetailPage/Detail";
import FormMaster from "../components/FormMaster/FormMaster";

import FirmMaster from "./FirmMaster";

const MenuItems = [
    {
        name: 'Master',
        id: '1',
        items: [
            {
                id: 'A',
                name: 'FirmMaster',
                component: <FormMaster />
            },
            {
                id: 'B',
                name: 'simpleMaster',
                component: <h1>simple master</h1>
            }
        ]
    },
    {
        id: '4',
        name: 'Transition',
        items: [
            {
                id: 'C',
                name: 'data',
                component: <h1>Data</h1>
            },
            {
                id: 'D',
                name: 'history',
                component: <h1>history</h1>
            }
        ]
    },
    {
        name: 'vourcher',
        id: '5',
        items: [
            {
                id: 'E',
                name: 'credit',
                component: <h1>credit</h1>
            },
            {
                id: 'F',
                name: 'affordable',
                component: <h1>affordable</h1>
            }
        ]
    },
    {
        name: 'production',
        id: '5',
        items: [
            {
                id: 'G',
                name: 'display',
                component: <h1>credit</h1>

            },
            {
                id: 'H',
                name: 'show',
                component: <h1>affordable</h1>
            }
        ]
    },
    {
        name: 'Reports',
        id: '6',
        items: [
            {
                id: 'I',
                name: 'normal'
            },
            {
                id: 'J',
                name: 'special'
            }
        ]
    },
    {
        name: 'Accounting Reports',
        id: '7',
        items: [
            {
                id: 'K',
                name: 'normal'
            },
            {
                id: 'L',
                name: 'special'
            }
        ]
    },
    {
        name: 'Theme',
        id: '8',
        items: [
        ]
    }

];

const sequence = MenuItems.map((item) => item.items);

export { MenuItems, sequence }