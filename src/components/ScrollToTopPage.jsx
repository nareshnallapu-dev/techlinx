import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is effective for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" for animation
    });
  }, [pathname]);

  return null;
}