import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCapturing=true) {
    const ref = useRef();
    useEffect(
      function () {
        function handleClick(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            handler();
          }
        }
        //we added true because we want to catch event in capturing phase
        document.addEventListener("click", handleClick, listenCapturing);
        return () => document.removeEventListener("click", handleClick);
      },
      [handler, listenCapturing]
    );

    return ref
}