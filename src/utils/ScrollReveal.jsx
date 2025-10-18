import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll(".scroll-reveal");
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio; // quanto do elemento está visível
                if (ratio > 0.1) { // só considera visível se > 10%
                    entry.target.classList.add("show");
                    // obs.unobserve(entry.target); // deixa permanente após aparecer
                } else if (ratio === 0) { // só remove se estiver totalmente invisível
                    entry.target.classList.remove("show");
                }
            });
        }, { threshold: Array.from({length: 101}, (_, i) => i / 100) });
        sections.forEach(section => { observer.observe(section); });

        return () => observer.disconnect();
    }, []);
}