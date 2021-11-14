module.exports = {
    title: 'Daily Note',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: "Home", link: "/" },
            {
                text: "JavaScript", items: [
                    {
                        text: "变量、作用域与内存",
                        link: "/js/变量作用域与内存/"
                    }
                ]
            },
            { text: "Contact", link: "/contact" },
        ],
    }
}