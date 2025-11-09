# Backend SMTP Setup Guide

This guide will help you set up the backend server with SMTP email functionality for your portfolio contact form.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account (or other email provider)

## Installation

1. **Install backend dependencies:**

```bash
npm install express nodemailer cors dotenv
```

Or if you prefer to add them to package.json:

```json
{
  "type": "module",
  "scripts": {
    "server": "node server.js",
    "dev:server": "node --watch server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

Then run: `npm install`

## Gmail SMTP Configuration

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification**

### Step 2: Generate App Password

1. After enabling 2-Step Verification, go to: https://myaccount.google.com/apppasswords
2. Select **Mail** as the app and **Windows Computer** (or your device) as the device
3. Click **Generate**
4. Copy the 16-character password (remove spaces)

### Step 3: Update .env File

Open the `.env` file and update with your credentials:

```env
# Server Configuration
PORT=3001

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@email.com
SMTP_PASS=your-16-char-app-password-here

# Email recipient
RECIPIENT_EMAIL=your-email@email.com
```

**Important:** Replace `your-16-char-app-password-here` with the app password you generated.

## Alternative Email Providers

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Other Providers

Check your email provider's SMTP settings documentation.

## Running the Backend

### Development Mode

```bash
npm run server
```

Or with auto-reload (Node 18+):

```bash
npm run dev:server
```

The server will start on `http://localhost:3001`

### Test the Server

You can test if the server is running:

```bash
curl http://localhost:3001/api/health
```

You should see: `{"status":"OK","message":"Server is running"}`

## Testing the Contact Form

1. **Start the backend server:**
   ```bash
   npm run server
   ```

2. **Start your frontend (in a separate terminal):**
   ```bash
   npm run dev
   ```

3. **Fill out the contact form** on your portfolio website and submit

4. **Check your email** - you should receive the message at the RECIPIENT_EMAIL address

## Troubleshooting

### "SMTP configuration error"

- Double-check your SMTP credentials in the `.env` file
- Make sure you're using an App Password (not your regular Gmail password)
- Verify that 2-Step Verification is enabled

### "Network error" or "Failed to fetch"

- Ensure the backend server is running on port 3001
- Check if another application is using port 3001
- Verify CORS is enabled in `server.js`

### "Authentication failed"

- Generate a new App Password from Google
- Copy it exactly (remove all spaces)
- Make sure SMTP_USER matches the Gmail account that generated the App Password

## Production Deployment

For production, you'll need to:

1. **Deploy the backend** to a hosting service (Heroku, Railway, Render, etc.)
2. **Update the API endpoint** in `Contact.tsx`:
   ```typescript
   const response = await fetch('https://your-backend-url.com/api/contact', {
   ```
3. **Set environment variables** on your hosting platform
4. **Enable HTTPS** (most hosting platforms do this automatically)

## Security Notes

- ✅ `.env` file is in `.gitignore` - never commit credentials
- ✅ Always use App Passwords, never your main account password
- ✅ Use environment variables for all sensitive data
- ✅ Consider adding rate limiting for production use

## Support

If you encounter issues:
1. Check the server console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email client first to confirm SMTP works
4. Check your email provider's security settings

