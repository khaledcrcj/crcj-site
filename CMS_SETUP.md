# CRCJ Website Editor Setup

This website is prepared for Sanity, which gives you an editing dashboard.

## What You Will Get

- Website stays hosted on Vercel.
- Domain stays on Cloudflare.
- You edit website text from `/studio`.
- If Sanity is not connected yet, the website still uses the old text.

## Step 1: Create Sanity Account

1. Go to https://www.sanity.io
2. Sign up or log in.
3. Create a new project.
4. Name it `CRCJ Website`.
5. Choose dataset name `production`.

## Step 2: Copy These Two Values

In Sanity, find:

- Project ID
- Dataset

The dataset should usually be:

```text
production
```

## Step 3: Add Values In Vercel

1. Go to Vercel.
2. Open the CRCJ website project.
3. Go to Settings.
4. Go to Environment Variables.
5. Add:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID
```

Value: your Sanity Project ID

6. Add:

```text
NEXT_PUBLIC_SANITY_DATASET
```

Value:

```text
production
```

7. Redeploy the website.

## Step 4: Open The Editor

After redeploying, open:

```text
https://crcj.org/studio
```

Log in with your Sanity account.

## Step 5: Create The Website Content

1. Click `Website Content`.
2. Create a new document.
3. The English and Arabic fields will appear.
4. Edit the text you want.
5. Click Publish.

The website refreshes content automatically, usually within one minute.

## Important

The Arabic text in the old code is corrupted. You can fix the Arabic directly
inside the Sanity editor after setup.
