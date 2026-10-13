# DevAssist OAuth return page

Static HTTPS login-return page for DevAssist Android. This repository contains only the public return page and its readiness metadata; the Android application source remains in its separate private repository.

Configured callback: https://shanmugampraveen81-pixel.github.io/devassist-oauth/oauth/

The page returns a temporary authorization code and state to the fixed Android package `app.devora.mobile`. It does not contain or store API keys, OAuth tokens, PKCE verifiers, shopping history or payment credentials. The Android app verifies the pending state and exchanges the code directly with Swiggy.

GitHub Pages source is `main`, `/(root)`. Deployment and authenticated shopping verification are separate: a published page does not prove a customer login, cart or payment succeeded.
