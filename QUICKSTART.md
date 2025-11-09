# Quick Start - SMTP Email Setup ✉️

## 🚀 Get Started in 3 Steps

### 1️⃣ Get Gmail App Password

1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Copy the 16-character password (remove spaces)

### 2️⃣ Update .env File

Open `.env` and replace `your-app-password-here` with your Gmail app password:

```env
SMTP_PASS=your-16-char-app-password-here
```

### 3️⃣ Run Backend & Frontend

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## ✅ Test It

1. Go to your portfolio website
2. Fill out the contact form
3. Submit
4. Check your email at bhaktisanghani2002@gmail.com

## 📚 Need More Help?

See `BACKEND_SETUP.md` for detailed instructions, troubleshooting, and production deployment.

## 🔧 Key Files Created

- `server.js` - Express backend with SMTP
- `.env` - Your SMTP credentials (NEVER commit this!)
- `.env.example` - Template for others
- `src/components/Contact.tsx` - Updated to call backend API

## 🎯 What Happens Now?

When someone fills the contact form:
1. Frontend sends data to `http://localhost:3001/api/contact`
2. Backend validates the data
3. Nodemailer sends email via Gmail SMTP
4. You receive formatted email at bhaktisanghani2002@gmail.com
5. User sees success message

Happy coding! 🎉

