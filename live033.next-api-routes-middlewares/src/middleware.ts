import { NextResponse, NextRequest } from 'next/server';

const isLogged = false;


// manually created middleware
export default function middleware(request: NextRequest) {

  if(!isLogged) {
    console.log('User is not logged in');

    return NextResponse.redirect(new URL('/login', request.nextUrl.origin).toString())
  }

  return NextResponse.next()
}


export const config = {
  matcher: '/contacts/create'
}
