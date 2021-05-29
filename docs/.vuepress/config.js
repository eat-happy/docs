module.exports = {
    themeConfig: {
        lastUpdated: 'Last Updated',
        logo: '/蜡笔小新.jpeg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'External', link: 'https://baidu.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                    {
                        text: 'Languages',
                        ariaLabel: 'Language Menu',
                        items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    }
                ]
            }
        ],
        sidebar: [
            '/',
            '/about/'
        ]

    },
}