"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/collections/Collections.module.css";

export default function CollectionsHeader() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const overlayOpen = menuOpen || searchOpen;

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function closeEverything() {
    setMenuOpen(false);
    setSearchOpen(false);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanQuery = query.trim();

    if (!cleanQuery) {
      return;
    }

    closeEverything();
    router.push(`/search?q=${encodeURIComponent(cleanQuery)}`);
  }

  return (
    <>
      <header className={styles.header}>
        <nav
          className={styles.primaryNav}
          aria-label="Main navigation"
        >
          <Link href="/shop">Shop</Link>

          <Link
            className={styles.activeLink}
            href="/collections"
          >
            Collections
          </Link>

          <button
            className={styles.disabledNav}
            type="button"
            aria-disabled="true"
            title="Legacy — coming soon"
          >
            Legacy
          </button>

          <Link href="/journal">Journal</Link>

          <Link href="/collections/second-project">
            Second Project
          </Link>
        </nav>

        <Link
          className={styles.logo}
          href="/"
          aria-label="TWNTY4 home"
        >
          <span className={styles.logoNumber}>24</span>
          <span className={styles.logoName}>TWNTY4</span>
          <span className={styles.logoStudio}>Studio</span>
        </Link>

        <nav
          className={styles.storeNav}
          aria-label="Store navigation"
        >
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
          >
            Search
          </button>

          <Link href="/cart">Cart (0)</Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setSearchOpen(false);
              setMenuOpen(true);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        className={`${styles.siteOverlay} ${
          overlayOpen ? styles.siteOverlayOpen : ""
        }`}
        aria-hidden={!overlayOpen}
      >
        <button
          className={styles.overlayClose}
          type="button"
          onClick={closeEverything}
          aria-label="Close"
        >
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav
            className={styles.overlayNavigation}
            aria-label="Full navigation"
          >
            <Link href="/" onClick={closeEverything}>
              <small>00</small>
              Home
            </Link>

            <Link href="/shop" onClick={closeEverything}>
              <small>01</small>
              Shop
            </Link>

            <Link
              href="/collections"
              onClick={closeEverything}
            >
              <small>02</small>
              Collections
            </Link>

            <button
              type="button"
              aria-disabled="true"
              title="Legacy — coming soon"
            >
              <small>03</small>
              Legacy
              <em>Coming soon</em>
            </button>

            <Link href="/journal" onClick={closeEverything}>
              <small>04</small>
              Journal
            </Link>

            <Link href="/cart" onClick={closeEverything}>
              <small>05</small>
              Cart
            </Link>
          </nav>
        )}

        {searchOpen && (
          <form
            className={styles.collectionSearch}
            onSubmit={submitSearch}
          >
            <label htmlFor="collection-search">
              Search TWNTY4
            </label>

            <div>
              <input
                id="collection-search"
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search pieces and collections"
                autoFocus
              />

              <button type="submit">Search</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
