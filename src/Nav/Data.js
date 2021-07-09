import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as TiIcons from 'react-icons/ti'
import * as CgIcons from 'react-icons/cg'
import Homes from '../Assets/home.png'
import Communication from '../Assets/com.png'
import User from '../Assets/user.png'
import Visitor from '../Assets/visit.png'
import Events from '../Assets/events.png'
import Foods from '../Assets/food.png'
import Payment from '../Assets/pay.png'
import Shop from '../Assets/shop.png'
import Landory from '../Assets/landory.png'
import Last from '../Assets/last.png'


export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        image:<img src={Homes} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,

        subNav:[
            {
                title:'Receptionist',
                path:'/home/receptioist',
                icon:<AiIcons.AiOutlineCaretRight/>
            },
            {
                title:'Director of culinary',
                path:'/home/director',
                icon:<AiIcons.AiOutlineCaretRight/>
            },
            {
                title:'Director of Recreation',
                path:'/home/recreation',
                icon:<AiIcons.AiOutlineCaretRight/>
            }
        ]
    },
    {
        title:'Communication',
        path:'/communication',
        image:<img src={Communication} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Residents',
        path:'/residents',
        image:<img src={User} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Visitors',
        path:'/visitors',
        image:<img src={Visitor} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Event Calender',
        path:'/event',
        image:<img src={Events} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Culinary',
        path:'/culinary',
        image:<img src={Foods} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Payments',
        path:'/payments',
        image:<img src={Payment} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Shopping Hub',
        path:'/shopping',
        image:<img src={Shop} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Vendors & services',
        path:'/vendor',
        image:<img src={Landory} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    },
    {
        title:'Rooms & Amenitie',
        path:'/rooms',
        image:<img src={Last} alt="Homes" style={{width:"19px",height:"19px"}}/>,
        iconClosed:<FiIcons.FiPlus/>,
        iconOpened:<FiIcons.FiMinus/>,
    }
]