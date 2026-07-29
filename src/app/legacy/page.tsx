"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./legacy.css";

export default function LegacyPage() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-legacy-section]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "legacy-visible",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="legacy-page">
      <header className="legacy-header">
        <Link href="/" className="legacy-wordmark" aria-label="TWNTY4 Home">
          <span>24</span>
          <small>TWNTY4</small>
        </Link>

        <div className="legacy-progress" aria-hidden="true">
          <span />
        </div>

        <Link href="/" className="legacy-close">
          Close
        </Link>
      </header>

      <div className="legacy-scroll">
        <section
          className="legacy-panel legacy-intro legacy-visible"
          data-legacy-section
        >
          <div className="legacy-grain" />

          <div className="legacy-content legacy-content-center">
            <p className="legacy-eyebrow">TWNTY4 Studio</p>

            <h1 className="legacy-main-title">
              Legacy
            </h1>

            <p className="legacy-intro-copy">
              A story built through ambition,
              discipline and purpose.
            </p>
          </div>

          <div className="legacy-scroll-indicator">
            <span>Scroll to discover</span>
            <i />
          </div>

          <span className="legacy-index">00</span>
        </section>

        <section
          className="legacy-panel legacy-light"
          data-legacy-section
        >
          <span className="legacy-vertical-label">
            The Beginning
          </span>

          <div className="legacy-content legacy-content-left">
            <p className="legacy-chapter">Chapter I</p>

            <h2>
              TWNTY4 began with the ambition
              of a young entrepreneur.
            </h2>
          </div>

          <span className="legacy-index">01</span>
        </section>

        <section
          className="legacy-panel legacy-stone"
          data-legacy-section
        >
          <div className="legacy-architecture" aria-hidden="true">
            <span className="legacy-arch-one" />
            <span className="legacy-arch-two" />
          </div>

          <div className="legacy-content legacy-content-right">
            <p className="legacy-chapter">Chapter II</p>

            <h2>
              Born in Turin.
            </h2>

            <p className="legacy-body-copy">
              Shaped by a passion for business, sport,
              travel and timeless elegance, the idea was
              never simply to create clothing.
            </p>
          </div>

          <span className="legacy-index">02</span>
        </section>

        <section
          className="legacy-panel legacy-dark"
          data-legacy-section
        >
          <div className="legacy-oxford-line" aria-hidden="true" />

          <div className="legacy-content legacy-content-center legacy-narrow">
            <p className="legacy-chapter">Chapter III</p>

            <h2>
              Oxford gave the ambition
              a direction.
            </h2>

            <p className="legacy-body-copy">
              After studying economics at Oxford,
              a vision became clear.
            </p>
          </div>

          <span className="legacy-index">03</span>
        </section>

        <section
          className="legacy-panel legacy-ivory"
          data-legacy-section
        >
          <div className="legacy-content legacy-content-left">
            <p className="legacy-chapter">The Vision</p>

            <h2 className="legacy-statement">
              To build a brand where every piece reflects
              discipline, purpose and quiet confidence.
            </h2>
          </div>

          <div className="legacy-values" aria-hidden="true">
            <span>Discipline</span>
            <span>Purpose</span>
            <span>Confidence</span>
          </div>

          <span className="legacy-index">04</span>
        </section>

        <section
          className="legacy-panel legacy-black"
          data-legacy-section
        >
          <div className="legacy-content legacy-content-center">
            <p className="legacy-chapter">TWNTY4</p>

            <h2 className="legacy-built-title">
              Success isn&apos;t worn.
            </h2>

            <p className="legacy-built-reveal">
              It&apos;s built.
            </p>
          </div>

          <span className="legacy-index">05</span>
        </section>

        <section
          className="legacy-panel legacy-final"
          data-legacy-section
        >
          <div className="legacy-content legacy-content-center">
            <div className="legacy-final-logo">
              <span className="legacy-final-number">24</span>
              <span className="legacy-final-name">TWNTY4</span>
              <small>Studio</small>
            </div>

            <p className="legacy-final-message">
              Pursue More.
            </p>

            <Link href="/collections" className="legacy-enter-link">
              <span>Explore the Collection</span>
              <i>↗</i>
            </Link>
          </div>

          <footer className="legacy-footer">
            <span>© TWNTY4 Studio</span>
            <span>Built with intention</span>
          </footer>

          <span className="legacy-index">06</span>
        </section>
      </div>
    </main>
  );
}
