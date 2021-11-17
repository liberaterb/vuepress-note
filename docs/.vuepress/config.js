module.exports = {
    title: 'Daily Note',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    themeConfig: {
        sidebar: 'auto',
        nav: [
            // {text: "Home", link: "/"},
            {
                text: "JavaScript", items: [
                    {
                        text: "变量、作用域与内存",
                        link: "/js/变量作用域与内存/"
                    },
                    {
                        text: "网络请求与远程资源",
                        link: "/js/网络请求与远程资源/"
                    },   {
                        text: "动画与canvas图形",
                        link: "/js/动画与canvas图形/"
                    }, {
                        text: "基本引用类型",
                        link: "/js/基本引用类型/"
                    },
                ]
            },
        ],
    }
}
