# VAISHNAVI LADIES WEAR, AMRAVATI
## Standard Public Website Deployment via Firebase Hosting (No-Cost / Spark Plan)

This guide shows you how to deploy the **Vaishnavi Ladies Wear** e-commerce website using **Standard Firebase Hosting** (which runs on the free **Spark plan** without requiring Google Cloud Billing or Firebase App Hosting).

---

### Key Architectural Highlights (No Cloud Billing Required)

1. **Standard Firebase Hosting (`firebase.json`)**:
   - Deploys the static single-page app (SPA) output directly from `dist/` to Google's global CDN.
   - Includes automatic, free SSL/HTTPS certificates.
   - No Cloud Run container or Cloud Build charges.
   - No Firebase App Hosting requirement.

2. **Cloud Firestore (Free Spark Plan Quota)**:
   - 1 GB stored documents.
   - 50,000 document reads/day, 20,000 document writes/day.
   - Fully covers normal website traffic and product/order management.

3. **Firebase Authentication (Free Spark Plan Quota)**:
   - Up to 50,000 monthly active users for customer login / Google sign-in at zero cost.

4. **Zero Paid Gemini API Dependency**:
   - The entire customer shopping flow (catalog browsing, color variant switching, cart, checkout, Cash on Delivery, order confirmation, order tracking, admin catalog management) runs client-side directly against Firebase.

---

### Step-by-Step Deployment Instructions

#### Step 1: Build the Static Website
Build the production bundle inside the project root:
```bash
npm run build
```
This generates the optimized static production files inside the `dist/` folder.

#### Step 2: Login to Firebase CLI (One-time)
If you haven't logged into your Firebase account in your terminal:
```bash
firebase login
```
*Note: If deploying from an automated CI/CD environment or headless machine, run `firebase login:ci` or use GitHub Actions with a `FIREBASE_TOKEN`.*

#### Step 3: Deploy to Standard Firebase Hosting
Deploy only the static hosting site (avoiding any paid App Hosting / Cloud Run triggers):
```bash
firebase deploy --only hosting
```
Or use the npm script:
```bash
npm run deploy:hosting
```

If you also want to update your Firestore security rules simultaneously:
```bash
firebase deploy --only hosting,firestore:rules
```

---

### Your Public HTTPS Website URLs

Once `firebase deploy --only hosting` finishes, your site is immediately live at:

1. **`https://gen-lang-client-0815996180.web.app`**
2. **`https://gen-lang-client-0815996180.firebaseapp.com`**

#### Adding Your Custom Domain (e.g. `vaishnaviladieswear.com`):
1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Open your project: **`gen-lang-client-0815996180`**.
3. In the left menu, click **Build > Hosting**.
4. Click **Add Custom Domain** and enter your domain name (e.g., `vaishnaviladieswear.com` or `shop.vaishnaviladieswear.com`).
5. Add the provided TXT/A DNS records at your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace, etc.).
6. Firebase will automatically issue and renew a free SSL certificate for your website.

---

### Verifying All Website Features

Once deployed, all features remain 100% functional:
- **Homepage**: Hero banner, category carousels, boutique story, and customer reviews.
- **Showroom Page**: Details, map link, and timings for the Amravati Rajkamal Square showroom.
- **Catalog & Shop**: Category filters, price sorting, real-time search.
- **Product Detail**: Multi-angle zoom, color swatch variant switching, size selectors, dynamic stock levels.
- **WhatsApp Concierge**: Direct chat and inquiries pre-filled for phone **+91 73787 72329**.
- **Cart & Checkout**: Real-time total calculation, free shipping thresholds, Cash on Delivery (COD) and UPI.
- **Order Tracking**: Real-time status lookup by Order ID.
- **Admin Studio**: Secret staff panel (`/admin`) for adding/editing products and managing customer orders.
