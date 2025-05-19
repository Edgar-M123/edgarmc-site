import { PortfolioAppData } from "./types";


const rizzLabAppData: PortfolioAppData = {
    title: "Rizz Lab",
    subtitle: "AI Dating Assistant & Multiplayer Game",
    color: "#F31663",
    description: `Dating assistant that lets users upload screenshots of text conversations and profiles. 
        Users can also play online with other users to create the best pickup line.`,
    thumbnail: "/rizz_lab_pics/rizzlab_thumbnail.png",
    logo: "/rizz_lab_pics/rizzlab_icon.png",
    app_info: {
        app_store_url: "https://apps.apple.com/us/app/rizz-lab/id6739786282",
        play_store_url: "https://play.google.com/store/apps/details?id=com.ekcsoftware.rizzlab",
        pics: [
            "/rizz_lab_pics/rizzlabai-sc.png", 
            "/rizz_lab_pics/rizz-multiplayer.png", 
            "/rizz_lab_pics/spice-meter-sc.png",  
            "/rizz_lab_pics/rizz-leaderboard-sc.png",
            "/rizz_lab_pics/upload-profile-sc.png",
        ]
    },
    marketing_site: {
        url: "https://www.rizzlab.app",
        pics: ["/rizz_lab_pics/rizzlab-site-pic.png"]
    },
    ads: [],
    code: {private: true, url: ""},
    stack: [
        {name: "React Native", logo: "", color: "blue", description: "React Native 18 on the front-end. First time using it."}
    ],
    my_role: "I did all of the development, most of the marketing.",
    lessons: `I learned a lot about app development since this was my first app. 
        I learned Typescript, React Native, a lot of back-end elements like Docker, networking,
        authentication, and authorization.`
}

const tellableAppData: PortfolioAppData = {
    title: "'tellable'",
    subtitle: "Transform everyday life into engaging stories.",
    color: "#4169E1",
    description: `Dating assistant that lets users upload screenshots of text conversations and profiles. 
        Users can also play online with other users to create the best pickup line.`,
    thumbnail: "/tellable_pics/tellable-thumbnail.png",
    logo: "/tellable_pics/tellable-logo.png",
    app_info: {
        app_store_url: "",
        play_store_url: "",
        pics: [
            "/rizz_lab_pics/rizzlabai-sc.png", 
            "/rizz_lab_pics/rizz-multiplayer.png", 
            "/rizz_lab_pics/spice-meter-sc.png",  
            "/rizz_lab_pics/rizz-leaderboard-sc.png",
            "/rizz_lab_pics/upload-profile-sc.png",
        ]
    },
    marketing_site: {
        url: "https://www.rizzlab.app",
        pics: ["/rizz_lab_pics/rizzlab-site-pic.png"]
    },
    ads: [],
    code: {private: true, url: ""},
    stack: [
        {name: "React Native", logo: "", color: "blue", description: "React Native 18 on the front-end. First time using it."}
    ],
    my_role: "I did all of the development, most of the marketing.",
    lessons: `I learned a lot about app development since this was my first app. 
        I learned Typescript, React Native, a lot of back-end elements like Docker, networking,
        authentication, and authorization.`
}

export const allAppData: {[key: string]: PortfolioAppData} = {
    "rizz_lab": rizzLabAppData,
    "tellable": tellableAppData
    
}