export class SessionModel {
    access: string;
    refresh: string;

    constructor(
        access: string,
        refresh: string,
    ) {
        this.access = access
        this.refresh = refresh
    };
}