module.exports = {
    head: [
        ['link', {rel: 'icon', href: '/蜡笔小新.jpeg'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    base: '/',
    themeConfig: {
        lastUpdated: '上次更新',
        logo: '/蜡笔小新.jpeg',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'External', link: 'https://baidu.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'},
                    {
                        text: 'Languages',
                        ariaLabel: 'Language Menu',
                        items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    }
                ]
            }
        ],
        sidebar: [
            '/',
            '/about/'
        ],

    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-55Q17EWT5P' // UA-00000000-0
            }
        ],
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        ['@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'eat-happy',
            repo: 'docs',
            clientId: '5a212d3c7aa3fa22f545',
            clientSecret: 'bbc1ed584209b2ec34b3c7e15ca633a65e6cbaef',
            autoCreateIssue: true
        },]

    ]
}