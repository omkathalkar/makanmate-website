# MakanMate — Full Feature List

*Last updated: 3 October 2026 · Pilot city: Pune*

---

## Tenant App

### Onboarding
- Language selection (English / हिंदी / मराठी)
- WhatsApp OTP sign-in (skippable — "just browsing" goes straight to Explore)
- 3-step preference setup: why moving → who stays (solo / couple / friends) → office location + budget + must-haves

### Explore & Search
- Browse all listings without an account
- Cards ranked by match % (weighted: budget + commute + must-haves)
- Filter chips: budget range / commute time / type (PG / shared flat / whole flat) / furnishing / gender rules / meals / must-haves (AC, Wi-Fi, parking, etc.)
- Safety banner on every card
- "New to Pune?" guide shown to first-time users
- Popular quick-filters: Under ₹9k / Women only / Near Hinjewadi / Meals included

### Listing Detail
- Full photo gallery with room labels
- "Why it matches you" section (scored against your preferences)
- Commute at 9 am by bus / scooty / cab
- Full move-in cost breakdown: rent + deposit + maintenance + agreement fees + ₹0 brokerage
- Flat details: BHK, sq ft, floor, bathrooms, balconies, furnishing, parking, facing, building age
- Split-rent calculator (divides total by number of people for shared flats)
- Safety score 0–10 with sub-scores: street lighting / police proximity / CCTV / women safety reports / fire safety
- Owner profile: name, reply time, since year, verified badge
- Resident reviews
- Sticky action bar: Chat / Book Visit / Reserve

### Save & Compare
- Heart/save any listing to shortlist
- Compare up to 3 listings side-by-side: rent / safety score / commute / move-in cost
- Better-value cell highlighted in green

### Book a Visit
- In-person or WhatsApp video tour
- Pick day and time slot from owner availability
- WhatsApp reminder 2 hours before visit
- "Reached safely?" check-in after visit
- Share visit details with family in one tap

### Reserve a Room
- ₹5,000 token via UPI, held by MakanMate in escrow
- Adjusted into deposit on move-in
- Full refund if owner cancels, place doesn't match, or cancelled within 48 hours

### Paperwork (all digital)
- DigiLocker identity verification
- Work / college proof upload
- E-sign leave & licence agreement (Aadhaar OTP)
- Maharashtra online leave & licence registration
- Police verification submission (Pune Police)
- All steps trackable with status indicators

### My Stay (post move-in)
- Pay rent via UPI, UPI AutoPay, or cash record
- Auto-generate HRA receipt
- View all signed papers and agreements
- Raise repair requests with photo / voice description and urgency level
- House rules reference
- City guide and local tips
- Submit move-out notice

### Safety & SOS
- Press-and-hold SOS → calls 112 + sends live location to up to 3 emergency contacts
- Women helpline 1091, ambulance 108, police 112 — one tap each
- Safety score breakdown visible on every listing

### Chat
- In-app chat with owner (both phone numbers hidden until tenancy begins)
- All conversations on record
- Canned quick replies

### Community Feed
- Posts from real people: Looking for PG / Looking for room / Offering room / Flatmate wanted / Area tips / Need help
- Like, comment, DM the author
- Post composer: category + area + text
- Filter chips: All / Looking / Offering / Flatmates / Tips

### Local Services Marketplace
- Find vetted providers near your PG or flat: Plumber / Electrician / Maid–Cook / Carpenter / AC Repair / Deep clean
- Each card shows: rating, review count, distance, price, avg response time, verified badge
- Call + WhatsApp Book buttons

---

## Owner App

### Home Dashboard
- Personalised greeting ("Namaste, Ramesh ji")
- Property switcher at the top
- "Needs you today" feed: late rent → upcoming visit → urgent repair (most urgent first)

### Multi-Property Dashboard
- Per-property card with bed breakdown (occupied / on notice / vacant counts)
- Room mini-bar visualisation
- Lat/lng shown per property
- Listing health % score

### Add Property Wizard (5 steps)
- Step 1 — Property type: PG / shared flat / whole flat / studio
- Step 2 — Who can stay: women / men / anyone / couples
- Step 3 — Rooms, beds, size
- Step 4 — Rent, deposit, rules, amenities
- Step 5 — Photos + 360° VR walk
- Voice input on every field
- Can be completed entirely via WhatsApp (send photos + address; team handles the listing)

### Bed Map
- Visual grid of every room and bed
- Status chips: occupied / on notice / vacant
- Warning level pill per tenant (Good / Watch / Issue)
- Tap any bed → full tenant profile

### Tenant Detail
- Name, work/company, hometown, move-in date
- ID type and verified status
- Phone + emergency contact (name, relation, phone) with Call & WhatsApp buttons
- Rent per month and deposit held
- Warning meter — 4 axes rated 1–10 each month by owner:
  - 💰 Rent payment punctuality
  - 🧹 Cleanliness
  - 🤝 Behaviour
  - 🔇 Noise
  - Composite score → **Good** (avg ≥ 7.5) / **Watch** (≥ 5) / **Issue** (< 5)
- Owner private notes (saved locally until backend)
- Actions: Papers / Repairs / End tenancy

### Rent & Reminders
- Collected vs expected at a glance
- Auto WhatsApp reminder on 1st of month with UPI payment link
- Second reminder on 5th if still unpaid
- Record cash payments
- Generate digital receipts

### Visit Management
- New / upcoming / done tabs
- Accept, reschedule, or decline visit requests
- View verified tenant profile before accepting
- Call tenant directly from the request card

### Pseudo Map (no Maps SDK required)
- Canvas-based map showing own properties + nearby competitor PGs
- Two cluster views: Kothrud and Hinjewadi
- Own properties = green pins; competitor PGs = grey circles
- Tap any pin → name, coordinates, share / details actions
- Full pin list below the map canvas

### Analytics Dashboard
- Views, enquiries, reply time, occupancy rate
- Rent vs similar listings comparison
- 7 / 30 / 90 day periods
- Listing health score with specific improvement tips

### Subscription Plans
- **Free** — list the property, basic enquiries
- **Verified** ₹299/mo — trust badge, faster matching
- **Pro** ₹799/mo — priority ranking, dedicated support

### WhatsApp Assistant
- Handle new tenant enquiries entirely from WhatsApp (button taps + voice notes)
- Send rent reminders with one tap
- Update listing details from WhatsApp
- No need to open the app for daily tasks

### 360° VR Tour
- Walk through the property with any phone camera
- Stitched into a shareable 360° panorama
- Send to prospective tenants on WhatsApp so they can tour without travelling

---

## Website (makanmate.in)

- Landing page with hero search widget: PGs / shared flats / whole flats, budget filter, gender filter
- Explore page with listing grid and filter chips
- Individual listing detail pages
- Owner-facing dashboard prototype
- Pune neighbourhood guide
- Sign-in modal (name + phone → persisted in localStorage)
- Save / unsave listings to localStorage
- Waitlist / early-access form with Google Sheets backend (seeker + owner modes)
- Favicon: SVG + multi-size ICO + apple-touch-icon
- Hosted on GitHub Pages, custom domain makanmate.in (GoDaddy DNS)

---

## Platform-wide Backend (planned)

- Phone OTP auth via Firebase + WhatsApp authentication template
- Listings API with photo storage (Firebase Storage / Supabase)
- In-app chat relay — both sides' real phone numbers stay hidden
- Money flows through MakanMate nodal account — Razorpay / Cashfree
- UPI intent, payment links, UPI AutoPay
- Reserve token in escrow with automated refund logic
- DigiLocker KYC integration
- Aadhaar e-sign via licensed provider
- Maharashtra leave & licence online registration
- Pune Police tenant information submission
- Google Maps SDK — commute ring, Routes API (9 am ETA), Places autocomplete
- Firebase Cloud Messaging + WhatsApp push mirroring
- Firebase Analytics + Crashlytics

---

## Business Model

| Revenue stream | Detail |
|---|---|
| Owner subscriptions | Free / Verified ₹299/mo / Pro ₹799/mo |
| Transaction take-rate | Small % on rent payments processed through the platform |
| Paperwork facilitation | Fee for agreement registration, e-sign, police verification (pass-through + convenience fee) |
| Premium placements | Promoted listings for owners outside standard ranking |
| Services marketplace | Commission on bookings via local services (plumber, electrician, maid, etc.) |

Tenant-side is always free — no unlock fees, no subscriptions, no brokerage.

---

## Build Status (3 October 2026)

| Screen area | Tenant | Owner |
|---|---|---|
| Sign-in (phone, language) | UI only | UI only |
| Home / Explore | ✅ | ✅ |
| Listing detail, flat details, split-rent | ✅ | — |
| Multi-property dashboard | — | ✅ |
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
