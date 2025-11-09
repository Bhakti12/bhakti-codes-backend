# 🚀 Deploy to Vercel - Quick Steps

## Before You Deploy

1. **Get Gmail App Password:**
   - Enable 2-Step Verification: https://myaccount.google.com/security
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Copy the 16-character password

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Vercel serverless functions"
   git push origin main
   ```

## Deploy Steps

### 1. Import to Vercel
- Go to https://vercel.com/new
- Import your GitHub repository
- Click "Import"

### 2. Add Environment Variables
In Vercel Dashboard → Settings → Environment Variables:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-16-char-app-password-here
RECIPIENT_EMAIL = your-recipient-email@gmail.com
```

**Important:** Select "Production, Preview, Development" for all variables.

### 3. Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Done! 🎉

## Test Your Site

1. Visit your deployed URL
2. Go to contact form
3. Submit a test message
4. Check your email

## Local Development

Still works as before:

```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

## Files Created for Vercel

- ✅ `api/contact.js` - Serverless function
- ✅ `vercel.json` - Vercel config
- ✅ `.env.local` - Local dev config
- ✅ `.env.production` - Production config
- ✅ Updated `Contact.tsx` - Smart API URL

## Troubleshooting

**404 Error?**
- Ensure `api/contact.js` and `vercel.json` are committed
- Redeploy from Vercel dashboard

**Email not working?**
- Check environment variables in Vercel
- Use App Password, not Gmail password
- Check function logs in Vercel

**Need Help?**
See `VERCEL_DEPLOYMENT.md` for detailed guide.

---

That's it! Your site is now live on Vercel with working contact form emails! 🎉

