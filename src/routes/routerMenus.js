const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        key: '/user',
        title: '用户管理',
        icon: 'user',
        auth: [1],
        subs: [
            {
                title: '数据展示',
                key: '/user/showData',
                icon: '',
                subs: [{ title: '列表', key: '/user/showData/table', icon: '' }]
            }


        ]
    },
    {
        key: '/form',
        title: '表单',
        icon: 'bars',
        auth: [1],
        subs: [
            { title: '基础表单', key: '/form/base-form', icon: '' },
            { title: '步骤表单', key: '/form/step-form', icon: '' }

        ]
    },

    // {
    //     title: '多级导航',
    //     key: '/one',
    //     icon: 'bars',
    //     subs: [
    //         {
    //             title: '二级',
    //             key: '/one/two',
    //             icon: '',
    //             subs: [{ title: '三级', key: '/user/showData/table', icon: '' }]
    //         }
    //     ]
    // },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [99]
    }
]

export default menu
