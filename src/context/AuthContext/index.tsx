import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { SignIn } from "../../@types/sign-in";
import { UserData } from "../../@types/user";
import { Loading } from "../../components/Loading";
import { LoginFirebase } from "../../firebase/messaging-config";
import { useLoad } from "../../hooks/useLoad";
import { clearAuthToken, getAuthTokens } from "../../utils/auth-token";
import extractInfoUserOfToken from "../../utils/extractUserInformation";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextType{
    isAuthenticated: boolean;
    error: string;
    user: UserData | null;
    signIn: ({username, password}: SignIn) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({children}: AuthProviderProps) {
    const [error, setError] = useState("");
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const isAuthenticated = !!user;
    const { toggleLoading } = useLoad();

    async function verifyToken() {
      try {
        const { securityToken } = getAuthTokens();
        if (securityToken) {
          const userData = extractInfoUserOfToken(securityToken);
          setUser(userData);
        }
      } catch {
        clearAuthToken();
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      (async () => {
        await verifyToken();
      })();
    }, []);


    async function trySignIn({username, password}: SignIn) {
      toggleLoading(true);
      try{
        const { user } = await LoginFirebase({username, password})
        setUser(user)
      }catch(err){
        setError("E-mail ou senha incorretos");
      }finally {
        toggleLoading(false)
      }
    }

    const signIn = useCallback(async ({ username, password }: SignIn) => {
        try{
          await trySignIn({ username, password })
        }catch(error){
          setError("E-mail ou senha incorretos");
        }finally {
            toggleLoading(false);
        }
    }, []);

    const signOut = useCallback(() => {
        clearAuthToken();
        setUser(null);
    },[])

    if (loading) {
      return <Loading />;
    }

    return (
        <AuthContext.Provider
          value={{
            user,
            error,
            isAuthenticated,
            signIn,
            signOut,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}

export { AuthProvider, AuthContext };