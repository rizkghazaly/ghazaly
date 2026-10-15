<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Enlarged-view videos are opt-in through `LightboxItem.video` and start only on explicit play. Every photo with a hover clip must also pass `video` in its Lightbox item, so the enlarged view shows the corner "Play video" pill (LightboxVideo in src/components/lightbox.tsx) — never leave a video photo photo-only in the enlarged view.
- Keep the uploaded construction illustration in the construction module as deterministic SVG driven by a single seekable timeline, so About preserves the supplied sequence without introducing a WebGL dependency.
