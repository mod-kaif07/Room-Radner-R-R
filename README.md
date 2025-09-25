# Room Render (R-R) 🏠

A full-stack MERN application designed to help students living outside find affordable rooms with ease. Room Render connects students with budget-friendly accommodation options through an intuitive platform with advanced search and filtering capabilities.

## 🎯 Project Objective

Room Render aims to solve the accommodation challenges faced by students living away from home by:
- Providing a centralized platform for affordable room listings
- Enabling easy communication between room seekers and providers
- Offering advanced search and filtering options for quick room discovery
- Creating a trusted community through user reviews and ratings

## ✨ Features

### 🔐 Authentication & Authorization
- Secure user registration and login system
- Session-based authentication with Express sessions
- Password hashing with bcrypt
- Protected routes and middleware
- User role management

### 🏠 Room Management
- Create, read, update, and delete room listings
- Detailed room information including amenities, pricing, and location
- Real-time availability status
- Room categorization (Single, Shared, Studio, etc.)
- Country and category-wise listing organization

### 📸 Image Upload & Storage
- Multiple image upload for room listings
- **Cloudinary integration** for secure and optimized image storage
- Image compression and optimization
- Gallery view for room photos
- File upload handling with Multer

### ⭐ Review System
- User rating and review system
- Authenticated reviews to maintain quality
- Average rating calculation
- Review moderation capabilities
- Flash messaging for user feedback

### 🔍 Advanced Search & Filtering
- **Smart property filtering** for easy room discovery
- Filter by:
  - Price range
  - Location/Country
  - Room category
  - Amenities
  - Availability dates
  - Ratings
- Category-wise browsing
- Country-specific listings

### 🎨 User Experience
- **Server-side rendering** with EJS templates
- Responsive design with Bootstrap styling
- Clean and intuitive user interface
- Flash messages for user feedback
- Modular component structure with includes

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Server-side templating engine
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library

### Authentication & Security
- **Express Session** - Session management
- **Bcrypt** - Password hashing
- **Connect Flash** - Flash messaging
- **Express Validator** - Input validation

### File Handling & Storage
- **Multer** - File upload middleware
- **Cloudinary** - Image storage and optimization

### Frontend (Server-side Rendered)
- **EJS Templates** - Dynamic HTML generation
- **Bootstrap** - CSS framework for styling
- **JavaScript** - Client-side interactions

### Development Tools
- **Nodemon** - Development server auto-restart
- **Dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mod-kaif07/Room-Radner-R-R.git
   cd Room-Radner-R-R
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the root directory:
   ```env
   # Database
   ATLASDB_URL=your_mongodb_atlas_connection_string
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   
   # Session Secret
   SECRET=your_session_secret_key
   
   # Server Configuration
   PORT=8080
   NODE_ENV=development
   ```

4. **Initialize Database (Optional)**
   ```bash
   node init/index.js
   ```
   This will populate your database with sample listings for development.

5. **Run the application**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Or production mode
   npm start
   ```

6. **Access the application**
   - Open your browser and navigate to: `http://localhost:8080`

## 📁 Project Structure

```
Room-Radner-R-R/
├── controllers/
│   ├── listing.js          # Room listing operations
│   ├── reviews.js          # Review system logic
│   └── users.js            # User authentication & management
├── init/
│   ├── data.js             # Sample data for development
│   └── index.js            # Database initialization
├── models/
│   ├── listing.js          # Room listing schema
│   ├── review.js           # Review schema
│   └── user.js             # User schema
├── views/
│   ├── includes/
│   │   ├── categorypage.ejs
│   │   ├── flash.ejs       # Flash messages
│   │   ├── footer.ejs      # Footer component
│   │   └── navbar.ejs      # Navigation bar
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   ├── listings/
│   │   ├── about.ejs       # About page
│   │   ├── category.ejs    # Room categories
│   │   ├── country.ejs     # Country-wise listings
│   │   ├── edit.ejs        # Edit room listing
│   │   ├── home.ejs        # Homepage
│   │   ├── index.ejs       # All listings
│   │   ├── new.ejs         # Add new listing
│   │   └── show.ejs        # Single listing details
│   └── user/
│       ├── login.ejs       # User login
│       └── signup.ejs      # User registration
├── public/                 # Static assets
├── routes/                 # Express routes
├── uploads/                # File upload directory
├── utils/                  # Utility functions
├── node_modules/
├── .env                    # Environment variables
├── .gitignore
├── app.js                  # Main application file
├── cloudConfig.js          # Cloudinary configuration
├── middleware.js           # Custom middleware
├── package.json
├── package-lock.json
├── schema.js               # Validation schemas
└── README.md
```

## 🔧 Main Routes

### Authentication Routes
- `GET /signup` - User registration page
- `POST /signup` - Process user registration
- `GET /login` - User login page
- `POST /login` - Process user login
- `POST /logout` - User logout

### Listing Routes
- `GET /listings` - Display all room listings
- `GET /listings/new` - Show create listing form (authenticated)
- `POST /listings` - Create new listing (authenticated)
- `GET /listings/:id` - Show single listing details
- `GET /listings/:id/edit` - Edit listing form (owner only)
- `PUT /listings/:id` - Update listing (owner only)
- `DELETE /listings/:id` - Delete listing (owner only)

### Category & Filter Routes
- `GET /listings/category/:category` - Filter by category
- `GET /listings/country/:country` - Filter by country
- `GET /about` - About page

### Review Routes
- `POST /listings/:id/reviews` - Add review to listing
- `DELETE /listings/:listingId/reviews/:reviewId` - Delete review

### Static Pages
- `GET /` - Homepage with featured listings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Kaif** - [GitHub Profile](https://github.com/mod-kaif07)

## 🙏 Acknowledgments

- MongoDB for database solutions
- Cloudinary for image management
- React community for excellent documentation
- All contributors and users of Room Render

## 🚀 Deployment

### Deploy on Render

This project is configured for easy deployment on Render platform.

#### Backend Deployment

1. **Prepare your application for production**
   
   Ensure your `package.json` has the correct scripts:
   ```json
   {
     "scripts": {
       "start": "node app.js",
       "dev": "nodemon app.js"
     }
   }
   ```

2. **Create Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: `room-render-app`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

3. **Set Environment Variables**
   Add these environment variables in Render:
   ```env
   NODE_ENV=production
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_production_session_secret
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   PORT=10000
   ```

#### Post-Deployment Checklist

- [ ] Verify MongoDB Atlas connection
- [ ] Test Cloudinary image uploads
- [ ] Check all routes and pages load correctly
- [ ] Verify user authentication and sessions
- [ ] Test listing creation and editing
- [ ] Confirm review system functionality
- [ ] Test search and filtering features
- [ ] Verify responsive design on mobile devices

#### Live Demo

🌐 **Live Application**: [https://room-render-app.onrender.com](https://room-render-app.onrender.com)

> **Note**: Free tier on Render may have cold starts (initial loading delay). The application will wake up automatically when accessed.

## 📞 Support

For support, email kaif@example.com or create an issue in the GitHub repository.

---

**Room Render** - Making student accommodation search simple and affordable! 🎓🏠
