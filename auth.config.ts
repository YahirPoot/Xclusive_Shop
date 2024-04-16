import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: 'Login',
    },
    // callbacks: {
    //     authorized({ auth, request: { nextUrl } }) {
    //         const isLoggedIn = !!auth?.user;
    //         const isOnDashboard = nextUrl.pathname.startsWith('/');
    //         if (isOnDashboard) {
    //             if (isLoggedIn) return true;
    //             return false;
    //         }
    //         else if (isLoggedIn) {
    //             return Response.redirect(new URL('/dashboard', nextUrl));
    //         }
    //         return true;
    //     },
    // },
    providers:[],
} satisfies NextAuthConfig;

