// middleware.js
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('accessToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
 
};
