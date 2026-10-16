# MakanMate website: feature checklist

Written 2026-10-17 from the site as cloned (branch `main`, commit `ff6654d`). Rule for the redesign: **no feature on this list is removed.** The look can change, the features stay. Tick each box when it works in the new design.

## Site-wide

- [ ] Brand colours: ivory page, brand green, ink text, orange accent on owner and reserve actions
- [ ] Fonts: Fraunces (headlines), Mukta (body)
- [ ] Saved listings kept in the browser (`mm_saved` / `mm-saved`)
- [ ] Signed-in user kept in the browser (`mm_user`)
- [ ] Theme choice kept in the browser (`mm-theme`)
- [ ] Mobile layout and hamburger menu on every page
- [ ] Favicon, apple-touch-icon, CNAME `makanmate.in`

## Home (`index.html`)

- [x] Sticky header with no divider line: logo on the left, navigation in the middle (Browse PGs, How it works, Pune guide, Help), on the right Download app (says "Coming soon"), List your property (navy blue) and Sign in (done 2026-10-17)
- [ ] Signed-in header: avatar, name, menu (My profile, Saved listings, Sign out)
- [x] Mobile menu: the same links plus Download app and List your property (done 2026-10-17)
- [ ] Sign-in modal: name, mobile number, validation errors, success state
- [x] Opening frame (replaces the old hero section, which was removed on request 2026-10-17): headline "Find a verified PG in Pune. Pay", the giant word ZERO BROKERAGE, the supporting line, and a sliding trust card that types out Verified in person, Full move-in cost upfront and Refundable token (3 cards, 2 s hold; "No brokerage" is the big word) (`glyph-portal.js`, `glyph-portal.css`, `hero-facts.js`)
- [x] Search under the big word: 3 tabs (PGs and hostels, Shared flats, Whole flats), Near, Budget, For, Search button, and the Popular pills (Under ₹9,000, Women only, Near Hinjewadi IT Park, Meals included); shared search code, custom dropdowns (`select-menu.js`); stacked layout on phones; pills hidden under 600px tall
- [x] Letter choosing: hover, tap or arrow-key a letter to pick where the zoom goes in; "Choose a letter" menu on touch screens; hidden skip link ("See how it works") for keyboard users
- [x] Zoom into a letter as you scroll (1.5 screens), then the steps open: "From first search to move-in, in days" with 4 numbered steps; reachable from the "How it works" links (`#how-content`); plain blue panel with reduced motion or no JS
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

- [ ] Page header with listing count
- [ ] Type chips: All, PG, Shared flat, Whole flat, Studio
- [ ] Budget chips: Any, Under ₹5k, ₹5-8k, ₹8-12k, ₹12k+
- [ ] Sort: best match, price low to high, price high to low, safety score
- [ ] Listing cards: photo, verified badge, match %, 360° badge, price, safety, bus time, rating, tags, View details, heart to save
- [ ] Empty state: "No listings match these filters"
- [ ] Navbar with dark-mode toggle and "Join waitlist"

## Listing (`listing.html`)

- [ ] Photo gallery: main photo, previous/next, counter, thumbnails, 360° badge
- [ ] Title, badges (Verified in person, type), address
- [ ] Rent, deposit, maintenance, total move-in cost
- [ ] Safety score bar
- [ ] Commute times (bus, scooty, cab) and nearby places
- [ ] Amenities, house rules, "Why this listing matches"
- [ ] Flat details and society amenities (flats only)
- [ ] Reviews and star rating
- [ ] Open in Google Maps link
- [ ] Sticky sidebar: owner card, Chat on WhatsApp, Reserve button
- [ ] Reserve modal with confirmation state
- [ ] Book a visit form (name, phone, date, time slot) with success state
- [ ] Save listing, dark-mode toggle

## Pune guide (`pune.html`)

- [ ] Intro with photo cards and stats
- [ ] "Why Pune, and why now"
- [ ] "What no one tells you before you move to Pune"
- [ ] "Where we operate": 17 neighbourhood cards
- [ ] Closing call-to-action strip

## Owner (`owner.html`)

- [ ] Header ("Welcome back, Ramesh") and avatar
- [ ] Tabs: My listings, Visits, Rent, + Add property (with counts)
- [ ] Stat cards
- [ ] Visit requests with Accept and Decline
- [ ] "Send listing on WhatsApp"
- [ ] Rent and reminders, tenant details, tenant paperwork
- [ ] Add-property wizard, 5 steps: Basics, Rooms, Features, Location, Photos
- [ ] Rooms and beds steppers (+/-), photo preview
- [ ] "Listing submitted" success screen

## Web-app prototypes

- [ ] `tenant/` installable web app (manifest, service worker, icons, screens, chips, sheets)
- [ ] `owner/` installable web app (manifest, service worker, icons, screens, chips)

## Known problems to fix while redesigning (found 2026-10-17)

- [ ] Home search and pills send `?budget=`, `?for=`, `?near=`, `?meals=`, `?area=` but Explore does not read them
- [ ] Footer link `owner.html#plans` has no Plans section (docs mention Free, Verified ₹299, Pro ₹799)
- [ ] Dark mode only on Explore and Listing, not Home or Pune
- [ ] Reserve token is ₹5,000 on Home and ₹500 on Listing
- [ ] Placeholder numbers on cards: "0% match", "4.5 stars (0)"
- [ ] Some cover photos are signboards or rule boards
- [ ] Owner phone numbers are in the public `data.js`
- [ ] Forms: no submit code found, overview says Google Apps Script
- [ ] Photos total about 81 MB and are not compressed
