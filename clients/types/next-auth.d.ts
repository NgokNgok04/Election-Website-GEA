// next-auth.d.ts
import { DefaultSession, Session } from 'next-auth';
import { Interface } from 'readline';

// Import your custom user type
// import { UserData } from './app/lib/UserData';

// Extend the default NextAuth.js types
declare module 'next-auth' {
  interface User {
    // id: number
    // token: string
    isVote: number
    accType: boolean
  }
  interface Session{
    user?: User;
  }
}