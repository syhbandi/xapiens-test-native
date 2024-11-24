import api from "@/axios";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

type ContextType = {
  user: any;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading?: boolean;
};

const authContext = createContext<ContextType>({
  user: null,
  async signIn() {},
  async signOut() {},
  loading: true,
});

export function useAuth() {
  return useContext(authContext);
}

export default function AuthProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SecureStore.getItemAsync("session")
      .then((value) => {
        setUser(JSON.parse(value!));
        console.log(value);
        setLoading(false);
      })
      .catch(() => {
        console.log("tidak dapat key");
        setLoading(false);
      });
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { data } = await api.post("/login", { email, password });
    await SecureStore.setItemAsync("session", JSON.stringify(data));
    setUser(data);
  }, []);

  const signOut = useCallback(async () => {
    console.log(user?.token);
    await api.post("/logout");
    await SecureStore.deleteItemAsync("session");
    setUser(null);
  }, [user]);

  const contextValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      loading,
    }),
    [user, signIn, signOut, loading]
  );

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
}
