import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll(".scroll-reveal");
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    // obs.unobserve(entry.target); // deixa permanente após aparecer
                } else {
                    entry.target.classList.remove("show");
                }
            });
        }, { threshold: 0 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
}