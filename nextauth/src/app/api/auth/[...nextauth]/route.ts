import { NEXT_AUTH_CONFIG } from "@/lib/auth_config";
import nextAuth from "next-auth";


const handler = nextAuth(NEXT_AUTH_CONFIG)


export { handler as GET, handler as POST }