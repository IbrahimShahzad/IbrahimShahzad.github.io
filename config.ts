const siteMetadata = {
    title: `Ibrahim`,
    siteUrl: `https://IbrahimShahzad.github.io`,
    capitalizeTitleOnHome: false,
    logo: `/images/log.jpg`,
    icon: `/images/log.jpg`,
    titleImage: `/images/new_wall.jpg`,
    ogImage: `/images/new_wall.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `DEVELOPER | ARTIST`,
    description: `Familiar with C/C++, python, packet processing, paint brushes and canvases`,
    about:
        "Working as a Software Design Engineer  apt with C/C++, python, linux and bash. My expertise lies in fast packet processing, mainly using DPDK. I am bit of a fanatic about learning new stuff. I have taken part in designing, developing, optimizing and deploying an inline packet processing solutions. Other than that I always enjoyed activities like robotics, gaming, sketching/painting and reading about history.",
    author: `@ibrahim`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/IbrahimShahzad",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/Beemu.ibi",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/callmeibi",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/callmeibi/",
        },
        {
            name: "Linkedin",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/muhammad-ibrahim-shahzad-71305773/",
        },
        {
            name: "GitHub",
            icon: "/images/github.svg",
            url: "https://github.com/IbrahimShahzad",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://youtube.com/playlist?list=PLZjeTNCS1WxYujVwCJ5KJHIV92m__ZVxu",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `Get in touch.`,
        mail: "ibrahim.shahzad.mirza@gmail.com",
        phone: "",
        address: "",
    },
    disqus: "ibrahimshahzad-github-io",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
