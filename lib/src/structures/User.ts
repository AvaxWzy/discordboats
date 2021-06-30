
interface Data {
    id: number;
    name: string;
    website: string;
    twitter: string;
    github: string;
    instagram: string;
    reddit: string;
    bio: string;
}

export class User {

    public id: number;

    public name: string;

    public website: string;

    public twitter: string;

    public github: string;

    public instagram: string;

    public reddit: string;

    public bio: string;

    constructor(data?: Data) {

        this.id = data.id;

        this.name = data.name;

        this.website = data.website;

        this.twitter = data.twitter;

        this.github = data.github;

        this.instagram = data.instagram;

        this.reddit = data.reddit;

        this.bio = data.bio;

    };
};