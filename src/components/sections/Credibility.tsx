import { useEffect, useRef, useState } from "react";

import { COUNTERS, CREDENTIALS } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Credibility() {
  return (
    <section aria-label="Credenciais" className="bg-secondary">
      <div className="section-shell grid gap-6 border-b border-border py-12 sm:grid-cols-2 lg:grid-cols-4">
        {CREDENTIALS.map((item) => (
          <div key={item.value} className="min-w-0">
            <p className="font-display text-lg text-primary">{item.value}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="section-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {COUNTERS.map((item) => (
          <div key={item.label} className="min-w-0">
            <p className="font-display text-4xl font-semibold text-primary">
              <Counter value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}