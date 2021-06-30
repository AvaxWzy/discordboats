import { EventEmitter } from "events";
import fetch from "node-fetch";
import { Api } from "../rest/Api";

export interface Boat {

    on(event: "ready");
    on(event: "posted", number);
};

export class Boat extends EventEmitter {

    private token: string;
    private url: string;
    public users: Api;

    constructor() {
        super();

        this.token = null;

        this.url = "https://discord.boats/api/v2";

        this.users = new Api({
            url: this.url
        });
    };

    login(token?: string) {

        if (!token || typeof (token) !== "string") {
            throw new ReferenceError("Discord Boats -> Token not provided");
        };

        return new Promise((resolve, reject) => {

            try {
            this.token = token;
            this.emit("ready");

            resolve(this);

            } catch (e) {
                reject(new Error(e));
            };
        });
    };
    /**
     * Post your bot's server count
     * @param id The ID of the bot you are requesting to update
     * @param number The bot's server count
     */
    async postServers(id?: string, servers?: number): Promise<any> {

        if (!id || typeof (id) !== "string") {
            throw new ReferenceError("Discord Boats -> Bot id is missing");
        };

        if (!servers || typeof (servers) !== "number") {
            throw new ReferenceError("Discord Boats -> Server count is missing");
        };

        if (!this.token || typeof (this.token) !== "string") {
            throw new ReferenceError("Discord Boats -> Token not provided");
        };

        return new Promise(async (resolve, reject) => {

            this.emit("posted", servers);

            await fetch(this.url + `/bot/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.token
                },
                body: JSON.stringify({
                    server_count: servers
                })
            })
        });
    };

    on(event?: string, listener?: any) {
        return super.on(event, listener);
    };
};