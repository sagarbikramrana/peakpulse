# Peak Pulse - Interactive Fashion Community Platform

Peak Pulse is a modern, interactive fashion community platform that combines social features, AI-powered styling, and e-commerce capabilities. Built with Next.js 13+, TypeScript, and Tailwind CSS, it offers a seamless experience for fashion enthusiasts.

## 🌟 Features

### 1. User Authentication
- Secure login/signup system using NextAuth.js
- Support for credential-based authentication
- Protected routes and session management
- User profile management

### 2. AI-Powered Personal Stylist
- Free AI-powered style recommendations using Hugging Face Inference API
- Upload and preview clothing items
- Generate personalized style suggestions
- Background removal for uploaded images
- Real-time design previews

### 3. Community Features
- User stories and posts
- Like, comment, and share functionality
- User profiles with customizable information
- Follow system for connecting with other users
- Community feed with trending posts

### 4. Challenges System
- Participate in fashion challenges
- Submit entries for ongoing challenges
- Vote and interact with challenge submissions
- Track challenge progress and winners
- Rewards system for challenge winners

### 5. E-commerce Integration
- Product browsing and searching
- Shopping cart functionality
- Secure checkout process
- Order tracking
- Dropshipping support with multiple suppliers

### 6. Content Management
- Headless CMS integration with Directus
- Dynamic content updates
- Blog post management
- Media library for assets
- Content scheduling

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager
- Git

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/peak-pulse.git
cd peak-pulse
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```plaintext
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret

# Directus CMS Configuration
DIRECTUS_URL=your_directus_url
DIRECTUS_EMAIL=your_directus_email
DIRECTUS_PASSWORD=your_directus_password
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploying to Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy the application:
```bash
vercel
```

4. Add environment variables in the Vercel dashboard under Project Settings > Environment Variables.

### Setting up Directus CMS (Free Tier)

1. Create a Railway account at [railway.app](https://railway.app)
2. Create a new project and select PostgreSQL database
3. Deploy Directus using the template:
```bash
railway run -t directus
```

4. Configure environment variables in Railway dashboard
5. Access your Directus instance and create necessary collections

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Authentication Errors

**Issue**: CLIENT_FETCH_ERROR in NextAuth
**Solution**:
- Verify NEXTAUTH_URL matches your deployment URL
- Ensure NEXTAUTH_SECRET is properly set
- Check if the authentication provider credentials are correct
- Clear browser cookies and try again

#### 2. Directus Connection Issues

**Issue**: Cannot connect to Directus CMS
**Solution**:
- Verify DIRECTUS_URL is correct and accessible
- Check if DIRECTUS_EMAIL and DIRECTUS_PASSWORD are valid
- Ensure your IP is allowed in Directus settings
- Check if the collections exist in Directus

#### 3. Build Errors

**Issue**: Failed to compile
**Solution**:
- Clear .next folder: `rm -rf .next`
- Delete node_modules and package-lock.json
- Run `npm install` again
- Check for TypeScript errors: `npm run type-check`

#### 4. Image Loading Issues

**Issue**: Images not loading or showing placeholders
**Solution**:
- Verify image domains are added to next.config.js
- Check if image URLs are correct
- Ensure proper image formats are used
- Verify storage permissions in Directus

#### 5. API Route Errors

**Issue**: API routes returning 500 errors
**Solution**:
- Check server logs for detailed error messages
- Verify API route handlers are properly exported
- Ensure environment variables are accessible
- Check database connections and queries

## 📦 Project Structure

```
peak-pulse/
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── shop/             # E-commerce pages
│   └── ...               # Other app routes
├── components/            # React components
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🛠️ Built With

- [Next.js 13+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Directus](https://directus.io/) - Headless CMS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## 📝 Development Guidelines

1. **Code Style**
   - Use TypeScript for type safety
   - Follow ESLint and Prettier configurations
   - Use meaningful component and variable names

2. **Component Structure**
   - Create reusable components
   - Use proper file naming conventions
   - Implement proper error boundaries

3. **State Management**
   - Use React hooks for local state
   - Implement proper data fetching strategies
   - Handle loading and error states

4. **Performance**
   - Implement proper code splitting
   - Optimize images and assets
   - Use proper caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Directus Documentation](https://docs.directus.io/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 📞 Support

For support, please:
1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Create a new issue with detailed information about your problem
4. Join our Discord community (coming soon)

---

Made with ❤️ by [Your Name]
```

Remember to replace placeholder values (like `yourusername`, `your_generated_secret`, etc.) with actual values before sharing the README.

