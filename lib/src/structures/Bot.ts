
interface Data {
    bot_id: string;
    bot_name: string;
    bot_prefix: string;
    bot_library: string;
    bot_avatar: string;
    bot_short_desc: string;
    bot_long_desc: string;
    bot_owners: string[];
    bot_invite_link: string;
    bot_support_discord: string;
    bot_website: string;
    bot_github_repo: string;
    bot_server_count: string;
    bot_vote_count: string;
    bot_visible: number;
    bot_in_queue: string;
    bot_certified: boolean;
    bot_categories: string[];
    bot_rate_one: number;
    bot_rate_two: number;
    bot_rate_three: number;
    bot_rate_four: number;
    bot_rate_five: number;
    bot_rate_average: number;
};

export class Bot {

    public id: string;

    public name: string;

    public prefix: string;

    public library: string;

    public avatar: string;

    public shortdescription: string;

    public longdescription: string;

    public owners: string[];

    public invite: string;

    public support: string;

    public website: string;

    public github: string;

    public servers: string;

    public votes: string;

    public visibility: number;

    public queue: string;

    public certified: boolean;

    public categories: string[];

    public rateone: number;

    public ratetwo: number;

    public ratethree: number;

    public ratefour: number;

    public ratefive: number;

    public rateaverage: number

    constructor(data?: Data) {

        /**
         * @type {string}
         */
        this.id = data.bot_id;

        /**
         * @type {string}
         */

        this.name = data.bot_name;

        /**
         * @type {string}
         */

        this.prefix = data.bot_prefix;

        /**
         * @type {string}
         */

        this.library = data.bot_library;

        /**
         * @type {string}
         */

        this.avatar = data.bot_avatar;

        /**
         * @type {string}
         */

        this.shortdescription = data.bot_short_desc;

        /**
         * @type {string}
         */

        this.longdescription = data.bot_long_desc;

        /**
         * @type {string}
         */

        this.owners = data.bot_owners;

        /**
         * @type {string}
         */

        this.invite = data.bot_invite_link;

        /**
         * @type {string}
         */

        this.support = data.bot_support_discord;

        /**
         * @type {string}
         */

        this.website = data.bot_website;

        /**
         * @type {string}
         */

        this.github = data.bot_github_repo;

        /**
         * @type {string}
         */
        
        this.servers = data.bot_server_count;

        /**
         * @type {string}
         */

        this.votes = data.bot_vote_count;

        /**
         * @type {number}
         */

        this.visibility = data.bot_visible;
        
        /**
         * @type {string}
         */

        this.queue = data.bot_in_queue;

        /**
         * @type {boolean}
         */

        this.certified = data.bot_certified;

        /**
         * @type {number}
         */

        this.categories = data.bot_categories;

        /**
         * @type {number}
         */

        this.rateone = data.bot_rate_one;

        /**
         * @type {number}
         */

        this.ratetwo = data.bot_rate_two;

        /**
         * @type {number}
         */

        this.ratethree = data.bot_rate_three;

         /**
         * @type {number}
         */

         this.ratefour = data.bot_rate_four;

          /**
         * @type {number}
         */

          this.ratefive = data.bot_rate_five;

          /**
           * @type {string}
           */

          this.rateaverage = data.bot_rate_average;
    };
};