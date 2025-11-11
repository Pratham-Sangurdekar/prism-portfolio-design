# EmailJS Setup Guide

Follow these steps to enable email functionality for your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended for pratham.savi0412@gmail.com)
4. Click **"Connect Account"** and authorize with your Gmail
5. Note down your **Service ID** (e.g., `service_abc1234`)
service_cwldman
## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** `Portfolio Contact Form`

**Subject:** `New Contact Form Message from {{from_name}}`

**Content:**
```
You have received a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

**Settings:**
- **From Name:** Portfolio Contact Form
- **From Email:** Use your verified email (pratham.savi0412@gmail.com)
- **Reply To:** `{{from_email}}` (This allows you to reply directly to the sender)
- **To Email:** pratham.savi0412@gmail.com

4. Click **"Save"**
5. Note down your **Template ID** (e.g., `template_xyz5678`)
template_bab5fw9
## Step 4: Get Your Public Key

1. Go to **"Account"** in the dashboard
2. Find **"Public Key"** section
3. Copy your public key (e.g., `abcdefGHIJKLMNOP`)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project:

```bash
cp .env.example .env
```

2. Edit `.env` and add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcdefGHIJKLMNOP
```

3. Make sure `.env` is in your `.gitignore` (it should be by default)

## Step 6: Test Your Form

1. Restart your development server:
```bash
npm run dev
```

2. Go to your contact page
3. Fill out the form with test data
4. Click Submit
5. Check your email at pratham.savi0412@gmail.com

## Important Notes

### Reply-To Configuration
The template is configured so that when someone fills out your form:
- **You receive the email** at pratham.savi0412@gmail.com
- **The "Reply-To" field** is set to the sender's email
- **When you hit reply**, it will go directly to the person who contacted you

### Free Tier Limits
- 200 emails per month
- 2 email services
- No credit card required

### Security
- Never commit your `.env` file to Git
- The public key is safe to use in frontend code
- EmailJS handles all the email sending securely

## Troubleshooting

### Email not sending?
1. Check browser console for errors
2. Verify all IDs are correct in `.env`
3. Make sure Gmail account is connected in EmailJS dashboard
4. Check EmailJS dashboard for failed delivery logs

### Want to customize the email?
1. Go to EmailJS dashboard → Email Templates
2. Edit your template
3. Use template variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Template Variables Available

In your EmailJS template, you can use:
- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (pratham.savi0412@gmail.com)

## Advanced: Custom Email Styling

You can add HTML styling to your EmailJS template for better-looking emails:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Portfolio Contact</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #666;">Message:</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <hr style="border: 1px solid #ddd; margin: 30px 0;">
  
  <p style="color: #999; font-size: 12px;">
    This email was sent from your portfolio contact form at 
    <a href="https://your-portfolio-url.com">your-portfolio-url.com</a>
  </p>
</div>
```

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

Your contact form is now ready to receive messages! 🚀
