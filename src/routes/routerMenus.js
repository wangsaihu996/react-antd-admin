const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        key: '/form',
        title: '表单',
        icon: 'from',
        auth: [1],
        subs: [
            { title: '基础表单', key: '/form/base-form', icon: '' },
            { title: '步骤表单', key: '/form/step-form', icon: '' }

        ]
    },

    {
        title: '多级导航',
        key: '/one',
        icon: 'bars',
        subs: [
            {
                title: '二级',
                key: '/one/two',
                icon: '',
                subs: [{ title: '三级', key: '/one/two/three', icon: '' }]
            }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [99]
    }
]

export default menu
