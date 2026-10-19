# MakanMate website: feature checklist

Written 2026-10-17 from the site as cloned (branch `main`, commit `ff6654d`). Rule for the redesign: **no feature on this list is removed.** The look can change, the features stay. Tick each box when it works in the new design.

## Site-wide

- [x] Palette (2026-10-17, replaces ivory, green and orange): white and blue only, text black or dark blue, filled buttons blue (`--fill` #1E40AF, white text 8.7:1), navy (#172554) for the owner banner, Pune call to action and footer. Only the logo mark stays green (kept from the old top). Audit script found 0 off-palette colours on all pages; contrast AAA (7:1, large text 4.5:1)
- [x] Fonts: Plus Jakarta Sans for everything, Mukta as the Devanagari fallback (all pages)
- [x] One shared look for Explore, Listing, Pune and Owner: `site.css` (header, footer, tokens, dark theme) and `site.js` (menu button, "Coming soon"); the home page keeps its own copy in `index.html`
- [ ] Saved listings kept in the browser (`mm_saved` / `mm-saved`)
- [ ] Signed-in user kept in the browser (`mm_user`)
- [x] Theme choice kept in the browser (`mm-theme`): light and navy dark theme on Explore, Listing and Owner
- [x] Mobile layout and hamburger menu on every page (no sideways scroll at 320, 360, 390, 768, 1024, 1280, 1440, 1920 px; menu closes with Escape)
- [ ] Favicon, apple-touch-icon, CNAME `makanmate.in`

## Home (`index.html`)

- [x] Sticky header with no divider line: logo on the left, navigation in the middle (Browse PGs, How it works, Pune guide, Help), on the right Download app (says "Coming soon"), List your property (navy blue) and Sign in (done 2026-10-17)
- [ ] Signed-in header: avatar, name, menu (My profile, Saved listings, Sign out)
- [x] Mobile menu: the same links plus Download app and List your property (done 2026-10-17)
- [ ] Sign-in modal: name, mobile number, validation errors, success state
- [x] Opening frame (replaces the old hero section, which was removed on request 2026-10-17): headline "Find a verified PG in Pune. Pay", the giant word ZERO BROKERAGE, the supporting line, and small sliding text (no card box) at the right: a heading with a line typed under it for Verified in person, Full move-in cost upfront and Refundable token (3 items, 2 s hold after typing; "No brokerage" is the big word) (`glyph-portal.js`, `glyph-portal.css`, `hero-facts.js`)
- [x] Search under the big word: 3 tabs (PGs and hostels, Shared flats, Whole flats), Near, Budget, For, Search button, and the Popular pills (Under ₹9,000, Women only, Near Hinjewadi IT Park, Meals included); shared search code, custom dropdowns (`select-menu.js`); stacked layout on phones; pills hidden under 600px tall
- [x] Letter choosing: hover, tap or arrow-key a letter to pick where the zoom goes in; "Choose a letter" menu on touch screens; hidden skip link ("See how it works") for keyboard users
- [x] Zoom into a letter as you scroll (fast: 0.8 of a screen of scrolling), then the steps open: "From first search to move-in, in days" with 4 numbered steps; reachable from the "How it works" links (`#how-content`); plain blue panel with reduced motion or no JS
- [x] One hidden page heading (h1) for screen readers and search engines
- [ ] Removed with the hero by request: hero photo, bus-time tag, move-in cost card, the animated grid background, the separate rotating trust card in the hero, the old trust strip and the old standalone "How it works" section (its text now lives in the steps above)
- [ ] "Move in this month" listing cards drawn from `data.js`, heart to save, "See all 15 PGs"
- [ ] Browse by area: 4 area cards linking to Explore
- [ ] Opening-next tags and WhatsApp alert button
- [ ] Price transparency: checklist and itemised move-in cost card
- [ ] Owner banner: checklist, "List your property free", "List on WhatsApp", mini owner dashboard
- [ ] FAQ accordion: 5 questions, "Chat with us" on WhatsApp
- [ ] Footer: brand text, Tenants / Owners / Contact columns, Instagram, Telegram, email

## Explore (`explore.html`)

- [x] Page header with listing count
- [x] Type chips: All, PG, Shared flat, Whole flat, Studio
- [x] Budget chips: Any, Under ₹5k, ₹5-8k, ₹8-12k, ₹12k+
- [x] Sort: recommended (was "best match", all scores were 0, so it now falls back to safety), price low to high, price high to low, safety score
- [x] Listing cards: photo, verified badge, match % (shown only when above 0), 360° badge, price, safety, bus time, rating ("New listing" until there are reviews), tags, View details, heart to save
- [x] Filters from the home page search and quick links: `near`, `budget` (maximum rent), `for` (women, men), `type` (shared, whole), `area`, `meals=1`, `saved=1`; shown as removable "Showing results for" pills with Clear all; values from the URL are written as text, not HTML
- [x] Empty state: "No listings match these filters" with a Clear all filters button
- [x] Header with dark-mode toggle (the old "Join waitlist" button pointed at a form that does not exist and was replaced by the shared Sign in / List your property buttons)
- [x] Saved listings keep working from the heart and from the home menu (Saved listings opens `explore.html?saved=1`)

## Listing (`listing.html`)

- [x] Photo gallery: main photo, previous/next (labelled for screen readers), counter, thumbnails, 360° badge
- [ ] Title, badges (Verified in person, type), address
- [ ] Rent, deposit, maintenance, total move-in cost
- [ ] Safety score bar
- [x] Commute times (bus, scooty, cab; blue line icons replace the colour emoji) and nearby places
- [ ] Amenities, house rules, "Why this listing matches"
- [ ] Flat details and society amenities (flats only)
- [ ] Reviews and star rating
- [ ] Open in Google Maps link
- [ ] Sticky sidebar: owner card, Chat on WhatsApp, Reserve button
- [x] Reserve modal with confirmation state (now a proper dialog: closes with Escape, labelled)
- [x] Book a visit form (name, phone, date, time slot) with success state (labels linked to inputs, 16px fields so phones do not zoom)
- [x] Save listing, dark-mode toggle
- [x] Unknown listing id: clear "We could not find that listing" message with the header and footer kept

## Pune guide (`pune.html`)

- [x] Intro with photo cards and stats (the hero text used to sit below the photo and was clipped; it now overlays the photo)
- [x] "Why Pune, and why now"
- [x] "What no one tells you before you move to Pune" (6 tips, blue line icons instead of colour emoji)
- [x] "Where we operate": 11 neighbourhood cards in two groups (the earlier note said 17; the page has 4 student hubs and 7 IT hubs)
- [x] Closing call-to-action strip: the old "Join the waitlist" button linked to `index.html#waitlist`, which does not exist, so it now reads "Browse PGs in Pune" (Explore) and "List your property" (Owner)

## Owner (`owner.html`)

- [x] Header ("Welcome back, Ramesh") and avatar
- [x] Tabs: My listings, Visits, Rent, + Add property (with counts; scroll sideways inside the bar on phones; `owner.html#add` opens the last one)
- [ ] Stat cards
- [ ] Visit requests with Accept and Decline
- [ ] "Send listing on WhatsApp"
- [ ] Rent and reminders, tenant details, tenant paperwork
- [x] Add-property wizard, 5 steps: Basics, Rooms, Features, Location, Photos (option chips now work with the keyboard; on phones only the current step keeps its label)
- [ ] Rooms and beds steppers (+/-), photo preview
- [ ] "Listing submitted" success screen

## Web-app prototypes

- [ ] `tenant/` installable web app (manifest, service worker, icons, screens, chips, sheets)
- [ ] `owner/` installable web app (manifest, service worker, icons, screens, chips)

## Known problems to fix while redesigning (found 2026-10-17)

- [x] Home search and pills send `?budget=`, `?for=`, `?near=`, `?meals=`, `?area=`: Explore now reads them (fixed 2026-10-17)
- [x] Footer link `owner.html#plans` had no Plans section: the link was removed from the footer (docs mention Free, Verified ₹299, Pro ₹799; decide whether to build the section)
- [ ] Dark mode is on Explore, Listing and Owner, not on Home or Pune
- [ ] Reserve token is ₹5,000 on Home and ₹500 on Listing
- [x] Placeholder numbers on cards: "0% match" is hidden and "4.5 stars (0)" now reads "New listing" (the placeholder ratings are still in `data.js`)
- [ ] Some cover photos are signboards or rule boards
- [ ] Owner phone numbers are in the public `data.js`
- [ ] Forms: no submit code found, overview says Google Apps Script
- [ ] Photos total about 81 MB and are not compressed
