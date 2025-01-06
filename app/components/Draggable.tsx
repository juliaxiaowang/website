import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  KeyboardEvent,
} from "react";

interface DraggableProps {
  children: React.ReactNode;
}

export const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    },
    [position]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      setPosition({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const step = 10;
    switch (e.key) {
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, y: prev.y - step }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, y: prev.y + step }));
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, x: prev.x - step }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, x: prev.x + step }));
        break;
    }
  }, []);

  return (
    <div
      ref={nodeRef}
      role="button"
      tabIndex={0}
      aria-label="Draggable item"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};
