import { useCallback, useState, useRef, useEffect } from "react";

const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  /**
   * @TODO simplify code by using cleanup function of ref callback
   * (will be available since React 19)
   * @see https://react.dev/reference/react-dom/components/common#react-19-added-cleanup-functions-for-ref-callbacks
   */
  const hoverableElRef = useCallback((node: HTMLElement | null) => {
    if (nodeRef.current) {
      nodeRef.current.removeEventListener("mouseenter", handleMouseEnter);
      nodeRef.current.removeEventListener("mouseleave", handleMouseLeave);
    }

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    nodeRef.current = node;
  }, [handleMouseEnter, handleMouseLeave]);

  useEffect(() => {
    return () => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener("mouseenter", handleMouseEnter);
        nodeRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return {
    hoverableElRef,
    isHovered,
  };
};

export default useIsHovered;