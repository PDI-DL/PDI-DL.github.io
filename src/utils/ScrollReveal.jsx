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
        }, { threshold: 0.1 }); // 10% visível ativa

        sections.forEach(section => {
            observer.observe(section);
        });

        // sections.forEach(section => {
        //     const rect = section.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         section.classList.add("show");
        //     } else {
        //         observer.observe(section);
        //     }
        // });

        return () => observer.disconnect();
    }, []);
}