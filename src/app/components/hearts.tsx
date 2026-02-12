"use client";

export default function Hearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            fontSize: `${14 + Math.random() * 20}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}
