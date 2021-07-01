
interface Data {
    user_id: number;
    user_name: string;
    user_website: string;
    user_twitter: string;
    user_github: string;
    user_instagram: string;
    user_reddit: string;
    user_bio: string;
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

        this.id = data.user_id;

        this.name = data.user_name;

        this.website = data.user_website;

        this.twitter = data.user_twitter;

        this.github = data.user_github;

        this.instagram = data.user_instagram;

        this.reddit = data.user_reddit;

        this.bio = data.user_bio;

    };
};