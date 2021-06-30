import nodefetch from "node-fetch";
import { Bot} from "../structures/Bot";
import { User } from "../structures/User";

interface Req {
    url?: string | "https://discord.boats/api";
};

export class Api {

    private url: string;

    /**
     * @param {Req} req
     * Base Url 
     */
    constructor(req: Req) {

        this.url = req?.url;
    };

    /**
     * ID of the user to fetch
     * @param {string} id 
     * @returns {Promise} JSON format
     */
    async fetchUser(id?: string): Promise<User> {

        return new Promise(async (resolve, reject) => {

            try {

                const get = await nodefetch(this.url + `/user/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await get.json();

                if (data.error === true) {
                    return reject(new TypeError(data.message));
                };

                resolve(new User(data));

            } catch (e) {
                reject(new Error(e));
            };
        });
    };

    /**
    * ID of the bot to fetch
    * @param {string} id 
    * @returns {Promise} JSON format
    */
    async fetchBot(id?: string): Promise<Bot> {

        return new Promise(async (resolve, reject) => {

            try {

                const get = await nodefetch(this.url + `/bot/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await get.json();

                if (data.error === true) {
                    return reject(new TypeError(data.message));
                };

                resolve(new Bot(data));

            } catch (e) {
                reject(new Error(e));
            };
        });
    };
    /**
     * @param {string} bot The id of your bot
     * @param {string} userid The id of the user
     * @returns {Promise} Boolean
     */
    async isVoted(bot?: string, userid?: string): Promise<number> {

        return new Promise(async (resolve, reject) => {
            try {

                const get = await nodefetch(this.url + `/bot/${bot}/voted?id=${userid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await get.json();

                if (data.error === true) {
                    return reject(new TypeError(data.message));
                };

                resolve(data.voted);

            } catch (e) {
                reject(new Error(e));
            };
        });
    };
};