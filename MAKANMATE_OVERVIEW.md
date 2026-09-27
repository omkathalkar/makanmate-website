# MakanMate — Startup Overview

*Last updated: 27 September 2026 · Pilot city: Pune*

---

## What is MakanMate?

MakanMate is a verified, zero-brokerage PG and rental discovery platform for Pune (India), built for students, job-seekers, bachelors, couples, and anyone relocating to a new city. The core promise: **browse every listing free, see a phone number for free, pay zero brokerage — always.**

Every property is physically visited by the MakanMate team before it goes live. Photos, rent figures, and commute times match what you find on move-in day.

---

## The Problem

Three things make renting in Pune painful:

1. **Brokers take a month's rent** before you've properly seen the place.
2. **Listings lie** — old photos, inflated specs, "5 min from station" that's a 25-minute auto ride.
3. **You land alone** — no local network, no one to call when the geyser breaks or to ask where the good chai stall is.

Existing platforms (NoBroker, 99acres, MagicBricks) either charge to unlock contact details, or list unverified properties with no accountability.

---

## The Solution

| Platform problem | MakanMate answer |
|---|---|
| Contact unlock fees | Zero fees to browse or message, always |
| Fake/stale listings | In-person verification before going live |
| Hidden costs | Rent + deposit + maintenance shown together from card 1 |
| Sign-in walls | Full browse without an account |
| Broker middleman | Tenant talks directly to owner via in-app chat |

---

## Target Audience

| Persona | Needs |
|---|---|
| **Priya** — 23, from Nagpur, starting IT job at Hinjewadi, budget ₹15k | Women-only, veg kitchen, safety score, commute time, total cost upfront |
| **Students** — near Kothrud / Wakad colleges | PG with food, cheap, parents can verify |
| **Flat-sharers** — 2–3 friends splitting a 2/3 BHK | Per-person rent calculation, bathrooms, owner allows bachelors |
| **Ramesh (owner)** — 50s, runs a 12-bed Kothrud PG + one Hinjewadi flat, uses WhatsApp daily | Simple rent tracking, visit management, no new app to learn |

---

## Two Products, One Codebase

MakanMate ships two separate Android apps built from a single Kotlin/Compose codebase using build variants. They are **intentionally kept separate**: owner UX (large targets, one job/screen, voice input, non-tech-savvy) and tenant UX (discovery-heavy, dense cards) serve fundamentally different people and would compromise each other if merged. The backend will share auth tokens and user IDs.

### 1. MakanMate (Tenant app)
For people finding a place.

**Bottom tabs:** Explore · Community · Saved · Chats · My Stay

**Key flows:**
- **Onboarding** — language (EN/HI/MR), WhatsApp OTP ("just browsing" skips), 3-step preferences (why moving / who stays / office + budget + must-haves)
- **Explore** — cards ranked by match %, filters (budget / commute / type / furnishing / gender rules / must-haves), safety banner, "New to Pune?" guide
- **Listing detail** — photo gallery → why it matches → commute at 9 am → full move-in cost → flat details → split-rent calculator → safety score → owner → reviews → sticky Chat/Visit/Reserve actions
- **Book a visit** — in-person or WhatsApp video, pick day + slot, WhatsApp reminder 2 h before, "reached safely?" check
- **Save & compare** — shortlist, compare up to 3 on rent / safety / commute / move-in cost (better value in green)
- **Reserve** — ₹5,000 token via UPI held by MakanMate, adjusted into deposit, full refund within 48 h
- **Paperwork** — DigiLocker ID → work/college proof → e-sign leave & licence (Aadhaar OTP) → police verification
- **My Stay** — pay rent (UPI / AutoPay / HRA receipt), raise repairs, view papers, house rules, city guide, move-out notice
- **Safety & SOS** — press-and-hold SOS → 112 + live location to trusted contacts; helplines 112/1091/108
- **Community (new)** — social feed + local services marketplace (see below)

### 2. MakanMate Owner (Owner app)
For PG and flat owners. Designed for non-tech-savvy owners — large tap targets, one job per screen, emoji icons, voice input, EN/HI/MR.

**Bottom tabs:** Home · Properties · Rent · Tenants · More

**Key flows:**
- **Home** — "Namaste, Ramesh ji", property switcher, "Needs you today" (late rent / next visit / urgent repair)
- **Multi-property dashboard** — per-property card with bed breakdown, room mini-bars, lat/lng, listing health %; PG type shows occupied/notice/vacant chip counts
- **Add property wizard** — 5 steps: type → who can stay → rooms/beds/size → rent/rules → photos + VR walk. Voice input on every field. Can be completed via WhatsApp.
- **Bed map** — visual grid per room: occupied/notice/vacant; warning level pill per tenant; tap → full tenant profile
- **Tenant detail (new)** — phone, emergency contact, ID verification, rent/deposit, 4-axis warning meter
- **Rent & reminders** — collected vs expected, auto WhatsApp reminders on 1st and 5th with UPI link, cash record, receipts
- **Visit requests** — accept/reschedule/call, verified tenant profiles
- **Pseudo map (new)** — Canvas-based property + competitor map with lat/lng, cluster toggle, pin detail
- **Analytics** — views, enquiries, reply time, occupancy rate, rent vs similar listings
- **Subscription plans** — Free · Verified (₹299/mo) · Pro (₹799/mo)
- **WhatsApp assistant** — enquiries, reminders, listing updates all from WhatsApp

---

## Community Feature (Tenant App)

The Community tab makes MakanMate a social platform for people navigating housing in Pune — not just a listing directory.

### Feed
Posts from real people in the community, categorised:

| Category | Example |
|---|---|
| Looking for PG | "Women-only PG near Bhumkar Chowk, Wakad. Budget ₹10k." |
| Looking for Room | "Single room in shared flat, Baner or Aundh. ₹14k all-in." |
| Looking for Flat | "Couple looking for 1BHK, Viman Nagar, ₹20–25k." |
| Offering Room | "Room in 3BHK from Oct 15, Baner. ₹13,500/mo. 2 bathrooms." |
| Flatmate wanted | "Looking for 3rd person for 3BHK Wakad. ₹11k each." |
| Area tip | "Prabhat Road street food ₹60–80. Idli-vada near Karve statue 🔥" |
| Need help | "Just arrived from Indore for TCS Hinjewadi. Budget ₹12k, any tips?" |

- Like, comment, DM the author
- New post bottom sheet: category, area, text
- Filter chips: All · Looking · Offering · Flatmates · Tips

### Local Services
Find and book vetted service providers near your PG or flat:

| Category | Sample provider |
|---|---|
| Plumber | Raju Plumber, Wakad, 0.8 km, ★4.8, ₹200 call charge |
| Electrician | Shyam Electricals, Baner, 1.2 km, ★4.6, ₹250/hr |
| Maid / Cook | Kaveri Maid Services, Hinjewadi, 0.6 km, ★4.9, ₹2,800/mo |
| Carpenter | Deepak Carpenter, Kothrud, 2.8 km, ★4.6, ₹400/hr |
| AC Repair | Suresh AC Service, Wakad, 2.1 km, ★4.7, ₹500 service |
| Deep clean | CleanHome Services, Hinjewadi, 0.8 km, ★4.8, ₹1,200/visit |

Each card shows: rating, review count, distance, price, avg response time, verified badge, Call + WhatsApp Book buttons.

---

## Owner Tenant Management

### Tenant Detail Screen
Per-tenant full profile accessible by tapping a bed in the bed map:
- **Identity:** name, initials, work/company, hometown, move-in date, ID type + verified status
- **Contact:** phone number, emergency contact (name, relation, phone), Call + WhatsApp
- **Financials:** rent/month, deposit held
- **Warning meter:** 4 axes scored 1–10 each month by owner:
  - 💰 Rent payment (10 = always on time)
  - 🧹 Cleanliness (10 = spotless)
  - 🤝 Behaviour (10 = no complaints)
  - 🔇 Noise (10 = very quiet)
  - Composite bar → **WarningLevel:** ✅ Good (avg ≥7.5) · ⚠️ Watch (≥5) · 🔴 Issue (<5)
- Owner private notes (saved locally until backend)
- Actions: Papers, Repairs, End tenancy

### Pseudo Map (Owner)
Canvas-based map showing all properties and nearby competitor PGs without requiring the Maps SDK:
- Two cluster views toggled: **Kothrud** and **Hinjewadi**
- Own properties = green rounded squares; competitor PGs = gray circles
- Tap any pin → name, subtitle, lat/lng coordinate chips, share/details actions
- Full pin list below map with coordinates
- Accessible from Properties screen and More menu

---

## Website (makanmate.in)

Static HTML/CSS/JS — no framework, no build step. Hosted on GitHub Pages at `makanmate.in` (GoDaddy DNS, Let's Encrypt SSL). Form backend via Google Apps Script → Google Sheet.

**Repo:** `omkathalkar/makanmate-website`, branch `main`

### Pages
| Page | Purpose |
|---|---|
| `index.html` | Main landing page — hero, search widget, features, waitlist form |
| `explore.html` | Listing grid with filter chips and listing cards |
| `listing.html` | Individual listing detail (photos, safety score, contact owner, reviews) |
| `owner.html` | Owner-facing dashboard prototype |
| `pune.html` | Pune city and neighbourhood guide |
| `data.js` | Shared listings data (`MM` object, mirrors Android `SampleListings.kt`) |

### Index page sections (in order)
1. Announce bar — zero brokerage / verified in person / Pune pilot
2. Hero — "Find your place in Pune. *Zero brokerage.*" with search widget, budget chips, area select
3. Problem — 3 pain points (brokers, fake listings, landing alone)
4. **How we're different** — 4-card grid (no contact fees / verified always / upfront cost / browse first)
5. **App features** — seeker/owner toggle, 9 feature cards each
6. How it works — 3-step process
7. Audience — tag cloud (students, job-seekers, bachelors, couples, remote workers, new to Pune)
8. For owners — limited onboarding per neighbourhood, Pune pin map
9. Outer-Pune owner strip — Pimpri-Chinchwad, Talegaon, Chakan, Nigdi, Kondhwa
10. Pune section — photo + neighbourhood map (student hubs / IT hubs)
11. Trust rows — verified always / zero brokerage / nothing hidden / community
12. Founder quote
13. FAQ (5 questions)
14. Waitlist form — seeker (join list) or owner (list property), Apps Script backend

---

## Sample Listings (Pune PoC, 7 listings)

| ID | Type | Location | Rent |
|---|---|---|---|
| b | Flatmates (room) | Balewadi | ₹14,500/room — women only |
| e | 2 BHK flat | Tathawade | ₹24,000/mo |
| c | PG | Wakad | ₹9,500/bed — women only, meals included |
| f | 1 BHK flat | Hinjewadi Phase 3 | ₹17,500/mo — fully furnished |
| g | 3 BHK flat | Baner | ₹42,000/mo — bachelor-friendly |
| d | Studio / 1 RK | Wakad | ₹12,000/mo |
| a | 2 BHK premium | Hinjewadi Phase 1 | ₹38,000/mo — central AC |

Each listing carries: safety score (0–10), match % (weighted by budget / commute / must-haves), commute times by bus/scooty/cab, move-in cost breakdown, house rules, reviews, owner details.

---

## Design System

| Token | Value | Use |
|---|---|---|
| Brand green | `#1F8A5B` | Primary actions, highlights |
| Amber | `#C45E1A` | Owner accent, CTA |
| Wine / burgundy | `#7C1D35` | Editorial italic, eyebrows, FAQ marker |
| Background | `#F7F3EE` | Warm ivory — screens, sections |
| Ink | `#1C1611` | Headings, dark text |
| WhatsApp green | `#25D366` | WhatsApp actions only |
| Warning amber | `#B35C00` on `#FFF1E0` | Due soon, watch-level tenant |
| Danger red | `#C0392B` on `#FDECEC` | Late rent, issue-level tenant |

**Fonts:** Newsreader (serif — headings, italic accents) + Manrope (sans — body, UI). Target Mukta for Devanagari support.

**Dark mode (website only):** `[data-theme="dark"]` on `<html>`, persisted to `localStorage`.

---

## Design Principles

1. **Answer the real question first** — tenant: "does it fit me?"; owner: "what needs me today?"
2. **WhatsApp-first** — OTP, chat relay, reminders, visit confirmations, owner assistant all run on WhatsApp. The app never requires it to be open.
3. **Built for non-tech-savvy owners** — 48dp tap targets, one job per screen, emoji icons, voice input, 3 languages.
4. **Trust by default** — owner and tenant ID-verified; phone numbers hidden until both parties agree; money through MakanMate only.
5. **Show the whole cost** — move-in cost = first month + deposit + maintenance + agreement fees; brokerage always ₹0.
6. **Browse first, sign in later** — full listings (photos, safety score, rent, distances) visible without an account.
7. **Community over contract** — introduce new arrivals to others in the same area; local services, feed, flatmate connections.

---

## Data Model (first cut)

```
User(id, phone, name, role[tenant|owner], language, verifiedAt, createdAt)
TenantProfile(userId, homeTown, work, officeLatLng, maxCommuteMin, budget, mustHaves[], gender, moveInDate)
Property(id, ownerId, type[PG|FLATMATES|FLAT|STUDIO], title, address, lat, lng, status, verifiedAt)
FlatDetails(propertyId, bhk, bedrooms, sqft, floor, bathrooms, balconies, furnishing, parking, facing,
            buildingAge, allowed[], lockIn, noticeDays, inventory[], society[])
Room(id, propertyId, name, type)
Bed(id, roomId, label, state[OCCUPIED|VACANT|NOTICE], tenantId?)
Listing(id, propertyId|bedId, rent, rentUnit, deposit, maintenance, availableFrom, rules[], amenities[], hasTour)
Photo(id, propertyId, url, roomTag, isCover, order)
SafetyScore(propertyId, score, lighting, police, womenReports, cctv, fire, updatedAt)
Visit(id, listingId, tenantId, mode[IN_PERSON|VIDEO], at, status, shareWithFamily)
Thread(id, listingId?, tenantId, ownerId|support)
Message(id, threadId, fromUserId, text|voiceUrl, at)
Reservation(id, listingId, tenantId, tokenAmount, status, paidAt, refundedAt)
Tenancy(id, bedId|propertyId, tenantId, startDate, rent, deposit, noticeGivenAt, endDate)
Payment(id, tenancyId, month, amount, method[UPI|CASH], status, paidAt, receiptUrl)
Paperwork(tenancyId, idVerified, workProof, agreementSignedUrl, policeVerificationRef)
Repair(id, tenancyId, category, description, mediaUrl, urgency, status, createdAt, fixedAt)
Review(id, tenancyId, cleanliness, owner, safety, value, food, text)
Report(id, reporterId, listingId|userId, reason, note, status)

-- New for community & services:
FeedPost(id, authorId, category, area, text, mediaUrl?, likes, createdAt)
ServiceProvider(id, name, category, lat, lng, rating, reviewCount, priceLabel, phone, responseMin, verified)
TenantRating(id, tenancyId, month, paymentScore, cleanlinessScore, behaviourScore, noiseScore, ownerNote)
```

---

## Tech Stack

### Android (current)
| Layer | Choice |
|---|---|
| Language | Kotlin |
| UI | Jetpack Compose + Material 3 |
| Architecture | Single activity, Navigation Compose, ViewModel |
| Build | Two flavors: `tenant` + `owner` from one source tree |
| State | `TenantViewModel` (tenant); local state + `OwnerData` (owner, until backend) |
| Money formatting | `rupees(Int)` → Indian grouping (₹1,26,000) |

### Backend (planned)
| Need | Option |
|---|---|
| Auth | Firebase Auth (phone OTP) + WhatsApp authentication template |
| Data | Firestore or Supabase (Postgres) + Room offline cache |
| File storage | Firebase Storage / Supabase Storage (server-side resize) |
| WhatsApp | Meta WhatsApp Business Cloud API via Cloud Functions / Node |
| Maps | Maps SDK for Android, Places autocomplete, Routes API (9 am commute) |
| Payments | Razorpay or Cashfree — UPI intent, payment links, AutoPay; token in escrow |
| KYC & e-sign | DigiLocker (ID), Aadhaar e-sign via licensed provider |
| Agreement | Maharashtra online leave and licence registration |
| Police verification | Pune Police tenant information submission |
| 360° tours | Equirectangular images + panorama WebView; start with photo walk-through |
| Push | Firebase Cloud Messaging (mirrored to WhatsApp) |
| Analytics / crashes | Firebase Analytics + Crashlytics |

### Website
| Layer | Choice |
|---|---|
| Hosting | GitHub Pages (`omkathalkar/makanmate-website`) |
| Domain | `makanmate.in` — GoDaddy DNS, Let's Encrypt SSL |
| Form backend | Google Apps Script → Google Sheet |
| Framework | None — pure HTML/CSS/JS |

---

## App Build Status (27 September 2026)

| Screen area | Tenant | Owner |
|---|---|---|
| Sign-in (phone, language) | UI only | UI only |
| Home / Explore | ✅ | ✅ |
| Listing detail, flat details, split-rent | ✅ | — |
| Multi-property dashboard (PG bed breakdown, lat/lng, health) | — | ✅ |
| Saved & compare | ✅ | — |
| Chat (canned replies) | ✅ | Placeholder |
| Book a visit | ✅ | Placeholder |
| Reserve token + pay rent | ✅ (fake) | — |
| Rent & reminders | — | ✅ |
| Paperwork steps | ✅ (fake) | Placeholder |
| Bed map (with warning pills) | — | ✅ |
| Tenant detail + warning meter | — | ✅ |
| Pseudo map (Canvas, lat/lng, clusters) | — | ✅ |
| Safety & SOS | ✅ (dialog only) | Placeholder |
| Community feed (posts, like, DM, new post) | ✅ | — |
| Local services (6 categories, 15 providers) | ✅ | — |
| Real map (Google Maps SDK) | Placeholder | Placeholder |
| 360° tour | Placeholder | Placeholder |
| Backend, auth, payments, WhatsApp, maps | Not started | Not started |

**Known gaps:**
- Font: system default — target Mukta (Latin + Devanagari via Google Fonts)
- In-app language switch: Android 13+ only
- Light theme only; filter sheet is visual-only
- No persistence — everything resets on restart
- Warning meter scores are static sample data; needs monthly feedback submission UI
- Android repo has no GitHub remote configured yet

---

## Roadmap

| Phase | What |
|---|---|
| **1 (now)** | Both apps compile ✅; placeholder replacement in progress; Mukta font; GitHub remote for Android repo |
| **2 Backend v1** | Phone auth, listings API, photos, saved, in-app chat, visits; owner add-property wizard |
| **3 WhatsApp** | OTP, chat relay, visit confirmations, owner assistant, rent reminders |
| **4 Money** | Reserve token with refunds, rent collection, UPI AutoPay, HRA receipts |
| **5 Paperwork** | DigiLocker KYC, Aadhaar e-sign, Maharashtra agreement registration, police verification |
| **6 Maps & tours** | Real Google Map with commute ring, Routes API (9 am ETA), 360° tours |
| **7 Pilot launch** | Play Store: internal → closed → production; Pune neighbourhood-by-neighbourhood rollout |

**Long-term:** expand to other Maharashtra cities → central/south India → buying/selling → short stays.

---

## Metrics to Watch

**Tenant:** sign-up → first enquiry · enquiry → visit · video tour → booking without travel · days from first search to move-in · on-time rent % · scam reports per 1,000 listings · tenant stay length · community post engagement.

**Owner:** time to list (target < 5 min) · listings above 80% health score · owner reply time · vacant bed-days · % tenants fully verified · days to fix a repair · % actions done via WhatsApp · free → paid conversion rate · warning meter ratings submitted per month.

---

## Privacy & Compliance

- India's **Digital Personal Data Protection Act, 2023** — clear consent, collect minimum, account deletion on request.
- Phone numbers hidden from both sides by default until both parties agree.
- Money flows through MakanMate's nodal account; personal UPI IDs never shared until tenancy begins.
- Tenant personal details (ID, emergency contact) visible to owner only after tenancy begins.
- No personal data in analytics events.

---

## Business Model

| Revenue stream | Detail |
|---|---|
| Owner subscriptions | Free / Verified ₹299/mo / Pro ₹799/mo |
| Transaction take-rate | Small % on rent payments processed through the platform |
| Paperwork facilitation | Fee for agreement registration, e-sign, police verification (pass-through + convenience fee) |
| Premium placements | Promoted listings for owners outside the standard ranking |
| Services marketplace | Commission on bookings via local services (plumber, electrician, maid, etc.) |

Tenant-side is always free — no unlock fees, no subscriptions, no brokerage.

---

## Repository Structure

```
omkathalkar/makanmate-website   GitHub Pages — live at makanmate.in
  index.html                    Landing page
  explore.html                  Listing grid
  listing.html                  Listing detail
  owner.html                    Owner dashboard prototype
  pune.html                     Pune city guide
  data.js                       Shared listing data (MM object)
  images/                       Listing photos + UI images

~/Desktop/makanmate/MakanMate   Android app (local, no GitHub remote yet)
  app/src/main/                 Shared: MainActivity, theme/Color.kt, Components.kt, res/
  app/src/tenant/               Tenant app: AppRoot, data/(Listings, ChatScript, CommunityData), ui/
  app/src/owner/                Owner app: AppRoot, data/OwnerData, ui/
  docs/PRODUCT_SPEC.md          Full product spec (canonical source of truth)
  docs/prototypes/              HTML clickable prototypes (visual reference)

~/Desktop/makanmate/MAKANMATE_OVERVIEW.md   This file
```

---

*MakanMate is in active development. Website live at makanmate.in. Android apps build cleanly (70 tasks, both flavors) as of 27 September 2026. Backend not yet started.*
