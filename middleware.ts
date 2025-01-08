import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const publicRoutes = [
    '/',
    '/signin',
    '/signup',
    '/forgot-password',
    '/check-email',
    '/reset-password',
    '/password-changed'
];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    const token = (await cookies()).get(`${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`)?.value;

    if (!isPublicRoute && !token) return NextResponse.redirect(new URL('/signin', req.nextUrl));
    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith('/app')
    ) {
        return NextResponse.redirect(new URL('/app', req.nextUrl))
    }

    if (path === '/check-email') {
        const referer = req.headers.get("referer");
        if (!referer?.includes("/forgot-password")) return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    if (path === '/reset-password') {
        const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const email = req.nextUrl.searchParams.get("email");
        const token = req.nextUrl.searchParams.get("access_token");
        const isEmailCorrect = email ? emailRegex.test(email) : false;

        if (!isEmailCorrect || !token) return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}