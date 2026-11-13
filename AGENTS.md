# Project conventions

- Mount the homepage Vimeo iframe only when the `md` media query matches; CSS hiding alone still downloads video on mobile.
- Keep birthday promotion timing and session dismissal in a shared provider so the bar, home event, metadata and navigation offset expire together using Europe/Rome time.