export interface UserSession {
    refresh: string;
    access: string;
    exp: number;
    user: {
        user_id: number;
        id: number;
    };
}
