# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio website with SMTP functionality to Vercel.

## 📋 Prerequisites

- Vercel account (sign up at https://vercel.com)
- GitHub repository with your code
- Gmail App Password (see BACKEND_SETUP.md for instructions)

## 🔧 Project Structure

Your project now has both frontend and serverless backend:

```
bhakti-codes-backend/
├── api/
│   └── contact.js          # Vercel serverless function
├── src/
│   └── components/
│       └── Contact.tsx      # Updated with environment-based API
├── vercel.json             # Vercel configuration
├── .env.local              # Local development environment
├── .env.production         # Production environment
├── .env                    # SMTP credentials (local server only)
└── server.js               # Local development server (not used on Vercel)
```

## 📝 Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

```bash
git add .
git commit -m "Add Vercel serverless functions and SMTP support"
git push origin main
```

### Step 2: Import Project to Vercel

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your repository
4. Click **"Import"**

### Step 3: Configure Environment Variables

Before deploying, add your SMTP credentials:

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `SMTP_HOST` | `smtp.gmail.com` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_SECURE` | `false` | Production, Preview, Development |
| `SMTP_USER` | `your-email@gmail.com` | Production, Preview, Development |
| `SMTP_PASS` | `your-16-char-app-password` | Production, Preview, Development |
| `RECIPIENT_EMAIL` | `your-email@gmail.com` | Production, Preview, Development |

**Important:** Use your Gmail App Password for `SMTP_PASS`, not your regular password.

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## ✅ Test Your Deployment

1. Visit your deployed website
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email at bhaktisanghani2002@gmail.com

## 🔄 How It Works

### Local Development
- Frontend: `http://localhost:5173` (Vite dev server)
- Backend: `http://localhost:3001` (Express server)
- API calls: `http://localhost:3001/api/contact`

### Production (Vercel)
- Frontend & Backend: `https://your-project.vercel.app`
- API calls: `/api/contact` (serverless function)

The `Contact.tsx` component automatically uses the correct API URL based on environment:
- **Local:** Uses `VITE_API_URL=http://localhost:3001`
- **Production:** Uses relative path `/api/contact`

## 🛠️ Local Development After Deployment

You can still develop locally:

**Option 1: Use local Express server (recommended for testing)**
```bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - Frontend
npm run dev
```

**Option 2: Test serverless function locally with Vercel CLI**
```bash
npm install -g vercel
vercel dev
```

## 🔐 Security Best Practices

✅ **DO:**
- Keep SMTP credentials in Vercel environment variables
- Use App Passwords, never your main Gmail password
- Keep `.env` in `.gitignore`

❌ **DON'T:**
- Commit `.env` file with credentials
- Share your App Password
- Use your main Gmail password

## 🐛 Troubleshooting

### "Email not sending" on Vercel

**Check:**
1. Environment variables are set correctly in Vercel dashboard
2. All 6 SMTP variables are added for Production environment
3. Using App Password (not regular Gmail password)
4. Check Vercel function logs: Dashboard → Deployments → Click deployment → Functions

### "ERR_NOT_FOUND" or "404"

**Solution:**
- Make sure `api/contact.js` is committed to your repository
- Check `vercel.json` exists in root directory
- Redeploy: Vercel Dashboard → Deployments → Click "..." → Redeploy

### "CORS Error"

**Solution:**
- The `api/contact.js` already includes CORS headers
- If still occurring, check browser console for exact error
- Ensure you're not blocking third-party cookies

### Function Timeout

**Solution:**
- Vercel free tier has 10s timeout for serverless functions
- SMTP usually completes in 1-3 seconds
- If timing out, check SMTP credentials are correct

## 📊 Monitoring

View function logs in Vercel:
1. Go to Vercel Dashboard
2. Click on your project
3. Click **"Functions"** tab
4. Click on `/api/contact`
5. View logs for successful sends or errors

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel automatically redeploys on every push to main branch.

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

## 💡 Additional Features

### Rate Limiting (Recommended for Production)

Add rate limiting to prevent spam. Install in `api/contact.js`:

```bash
npm install @vercel/rate-limit
```

### Email Templates

Customize the email HTML in `api/contact.js` at line 87-103.

### Auto-Reply

Add an auto-reply email in `api/contact.js` after line 117:

```javascript
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: email,
  subject: "Thanks for contacting me!",
  html: `<p>Hi ${name},</p><p>Thanks for your message. I'll get back to you soon!</p>`
});
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Environment Variables on Vercel](https://vercel.com/docs/projects/environment-variables)

## 🆘 Still Having Issues?

1. Check Vercel function logs
2. Test locally with `npm run server` first
3. Verify all environment variables are set
4. Check Gmail security settings
5. Review error messages in browser console

---

**Success!** 🎉 Your portfolio with SMTP is now live on Vercel!

