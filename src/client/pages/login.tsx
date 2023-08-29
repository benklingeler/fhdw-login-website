import axios from "axios";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const login = async () => {
    setIsLoggingIn(true);

    try {
      const response = await axios.post("/login", { username, password });
      resetForm();
      setLoggedIn(true);
    } catch (err) {
      resetForm();
      console.error(err);
    }
  };

  const resetForm = () => {
    setIsLoggingIn(false);
    setUsername("");
    setPassword("");
  };

  const logout = () => {
    resetForm();
    setLoggedIn(false);
  };

  return (
    <main className="min-h-[100dvh] bg-black flex flex-col">
      <div className="relative z-10 h-full flex-1 flex flex-col items-center justify-center gap-8">
        <img src={"/fhdw-logo.svg"} className="h-24" />
        <div className="bg-gray-300/10 border border-white/30 p-8 rounded-lg text-white backdrop:blur-xl text-center flex flex-col gap-8 w-96">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Sicherer Login</h1>
            <p className="text-lg text-slate-300">versprochen sicher. 🤫</p>
          </div>
          {isLoggedIn ? (
            <div
              onClick={() => logout()}
              className="cursor-pointer w-full flex items-center justify-center bg-green-400/20 border border-green-200 p-4 rounded-lg text-green-100 font-medium"
            >
              Erfolgreich eingeloggt!
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                disabled={isLoggingIn}
                placeholder="Benutzername"
                className={twMerge(
                  "px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/80 focus:outline-none focus:border-white transition-all",
                  isLoggingIn ? "opacity-70" : ""
                )}
              />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="text"
                disabled={isLoggingIn}
                placeholder="Passwort"
                className={twMerge(
                  "px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/80 focus:outline-none focus:border-white transition-all",
                  isLoggingIn ? "opacity-70" : ""
                )}
              />
              <button
                onClick={() => login()}
                className={twMerge(
                  "self-center px-4 py-2 rounded-lg bg-sky-600 border border-white/30 text-white focus:outline-none focus:border-sky-500 transition-all",
                  isLoggingIn ? "animate-pulse" : ""
                )}
              >
                {isLoggingIn ? "Einloggen..." : "Einloggen"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/40" />
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-sky-900/30" />
      <img
        src="/background.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
    </main>
  );
}
