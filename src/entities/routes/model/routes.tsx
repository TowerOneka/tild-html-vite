"use client";
import { routesToSaveCount } from "@/shared/constants/routes";

import { usePathname } from "next/navigation";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouteContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const RouteProvider = ({ children }: Props) => {
  const [routes, setRoutes] = useState<string[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setRoutes((prev) => {
        const currentPrev = [...prev];
        if (currentPrev.length > routesToSaveCount) {
          currentPrev.splice(0, 1).push(pathname);
        } else {
          currentPrev.push(pathname);
        }

        return currentPrev;
      });
    }
  }, [pathname]);

  const store = useMemo(
    () => ({
      routes,
    }),
    [routes],
  );

  return <RouteContext.Provider value={store}>{children}</RouteContext.Provider>;
};

export const useRouteProvider = () => {
  return useContext(RouteContext);
};
