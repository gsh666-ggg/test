import Index from "../pages/index"
import Today from "../pages/Today"
import List from "../pages/List"
import CreateList from "../pages/CreateList"
import CreateReminder from "../pages/CreateReminder"
import Modify from "../pages/Modify"
import All from "../pages/All"
import Complete from "../pages/Complete"
import ModifyList from "../pages/ModifyList"

const routes=[
    {
        path:'/',
        name:"Index",
        components:Index
    },
    {
        path:'/today',
        name:"Today",
        components:Today
    },
    {
        path:'/list',
        name:"List",
        components:List
    },
    {
        path:'/createList',
        name:"CreateList",
        components:CreateList
    },
    {
        path:'/createReminder',
        name:"CreateReminder",
        components:CreateReminder
    },
    {
        path:'/modify',
        name:"Modify",
        components:Modify
    },
    {
        path:'/all',
        name:"All",
        components:All
    },
    {
        path:'/complete',
        name:"Complete",
        components:Complete
    },
    {
        path:'/modifyList',
        name:"ModifyList",
        components:ModifyList
    }
];
export default routes;