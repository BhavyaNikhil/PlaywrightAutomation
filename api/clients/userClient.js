import { request } from '@playwright/test';

export class UserClient {
    async createUser(userPayload) {
        const apiContext = await request.newContext();
        const response = await apiContext.post(
            'https://api.demoblaze.com/signup',
            { data: userPayload }
        );
        return response;
    }
}