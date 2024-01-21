
export interface HederMarketParams {
    locale: string
}

export interface HederMarketResponses {
    id?: number
    attributes?: any
}

export interface IconMarketplaceParams {
    locale: string
}

export interface mpHeaderProps {
    hsDesc?: string
    hsTitle?: string
    id?: number
}


export interface IconMarketplaceResponses {
    id?: number;
    attributes?: {
        mpName?: string;
        mpDesc?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        mpUrlHearingAid?: string;
        mpAltTextLogo?: string;
        mpUrlAddress?: string;
        mpLogoHorzAltText?: string;
        mpUrlOptic?: string;

        mpLogo?:Array<{
            data?: {
                id?: number;
                attributes?: {
                    name?: string;
                    alternativeText?: string | null;
                    caption?: string | null;
                    width?: number;
                    height?: number;
                    formats?: {
                        large?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        small?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        medium?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        thumbnail?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                    };
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string | null;
                    provider?: string;
                    provider_metadata?: any | null;
                    createdAt?: string;
                    updatedAt?: string;
                };
            };
        }>;

        mpLogoHorz?:Array<{
            data?: {
                id?: number;
                attributes?: {
                    name?: string;
                    alternativeText?: string | null;
                    caption?: string | null;
                    width?: number;
                    height?: number;
                    formats?: {
                        large?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        small?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        medium?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                        thumbnail?: {
                            ext?: string;
                            url?: string;
                            hash?: string;
                            mime?: string;
                            name?: string;
                            path?: string | null;
                            size?: number;
                            width?: number;
                            height?: number;
                        };
                    };
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string | null;
                    provider?: string;
                    provider_metadata?: any | null;
                    createdAt?: string;
                    updatedAt?: string;
                };
            };
        }>;
        
     
    };
}


export interface mpLogoProps {
    data?: hrImageDataAttributes
}

export interface hrImageDataAttributes {
    id?: string
    attributes?: any
}

