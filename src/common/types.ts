export type Flag = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean
}

export interface IJoke {
    id: number;
    safe: boolean;
    setup?: string;
    joke?: string;
    delivery?: string;
    flags: Flag;
    lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
    type: "single" | 'twopart';
    category: "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas";
}

export type FlagKeys =
    | "nsfw"
    | "religious"
    | "political"
    | "racist"
    | "sexist"
    | "explicit";
