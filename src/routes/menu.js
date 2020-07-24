const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
   
 
   
    {
        title: '其它',
        key: '/others',
        icon: 'paper-clip',
        auth: [1],
        subs: [
            { title: '进度条', key: '/others/progress', icon: '' },
            { title: '动画', key: '/others/animation', icon: '' },
            { title: '上传', key: '/others/upload', icon: '' },
            { title: '富文本', key: '/others/editor', icon: '' },
            { title: '404', key: '/404', icon: '' },
            { title: '500', key: '/500', icon: '' }
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
