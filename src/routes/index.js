import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))



// 表单
const FormBaseView = loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/FormView/FormBaseView'))
const FormStepView = loadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/FormView/FormStepView'))

//用户

const UserShowDataTableView = loadable(()=> import(/* webpackChunkName: 'formStep' */ '@/views/User/ShowData/TableView'))


const Three = loadable(() => import(/* webpackChunkName: 'three' */ '@/views/TestView'))
const About = loadable(() => import(/* webpackChunkName: 'about' */ '@/views/About'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    
    { path: '/form/base-form', exact: false, name: '表单', component: FormBaseView },
    { path: '/form/step-form', exact: false, name: '表单', component: FormStepView },
    
    
    // 用户demo
   
    { path:  '/user/showData/table', exact: false, name: '列表', component: UserShowDataTableView },


    { path: '/one/two/three', exact: false, name: '三级', component: Three },



    { path: '/about', exact: false, name: '关于', component: About, auth: [1] }
]

export default routes
