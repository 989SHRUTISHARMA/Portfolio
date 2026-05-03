# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact Form Setup

This portfolio includes a production-ready contact form powered by EmailJS. To enable email functionality:

1. **Create an EmailJS Account**: Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Set up Email Service**:
   - Go to Email Services in your dashboard
   - Add a service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (recipient)

4. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

5. **Update Contact Component**:
   - In `src/components/Contact.jsx`, replace `'Your Name'` with your actual name in the email template

The contact form includes:
- ✅ Form validation (required fields, email format)
- ✅ Loading spinner during submission
- ✅ Success/error toast notifications
- ✅ Clean Tailwind CSS styling
- ✅ Proper error handling
- ✅ Production-ready EmailJS integration
