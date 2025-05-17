export interface StackInfo {
    name: string;
    logo: string;
    color: string;
    description: string;
}

export interface AppInfo {
    app_store_url: string;
    play_store_url: string;
    pics: string[];
}

export interface SiteInfo {
    url: string;
    pics: string[];
}

export interface PortfolioAppData {
    title: string;
    color: string;
    subtitle: string;
    logo: string;
    description: string;
    thumbnail: string;
    app_info: AppInfo;
    marketing_site: SiteInfo;
    ads: string[];
    code: { private: boolean, url: string; };
    stack: StackInfo[];
    my_role: string;
    lessons: string;
}