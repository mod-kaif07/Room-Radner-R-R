# Room Render R|R (Room Rental & Residence)

A comprehensive web application designed to solve accommodation challenges faced by students studying away from home and professionals working outside their hometowns. This platform connects users with apartments, PGs (Paying Guest accommodations), rooms, and mess facilities in their desired location.

## 🎯 Problem Statement

Students and working professionals often struggle to find suitable accommodation when studying or working in a different city. The challenges include:
- Limited access to verified housing options
- Difficulty in finding mess/food facilities
- Lack of authentic reviews and details
- No centralized platform for housing listings
- Time-consuming search process

## 🚀 Features

### Core Functionality
- **Housing Listings**: Browse apartments, PGs, and individual rooms
- **Mess Integration**: Find nearby mess facilities and food options
- **User Authentication**: Secure login system for users
- **Property Management**: Upload, edit, and delete property listings
- **Detailed Descriptions**: Comprehensive property information and images

### User Capabilities
- View all available listings in one place
- Search and filter accommodations based on preferences
- Access detailed property information
- Contact property owners/managers
- Post and manage their own property listings (authenticated users only)

### Property Owner Features
- Create detailed property listings
- Upload property images and descriptions
- Edit existing listings in real-time
- Delete outdated or unavailable properties
- Manage multiple property postings

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS with EJS-Mate for layouts
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Bootstrap (assumed from typical setups)
- **HTTP Methods**: Method-Override for PUT/DELETE operations

## 📦 Dependencies

```json
{
  "express": "Web application framework",
  "mongoose": "MongoDB object modeling",
  "ejs": "Template engine",
  "ejs-mate": "Layout support for EJS",
  "method-override": "HTTP method override middleware"
}
```

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mod-kaif07/Room-Radner-R-R.git
   cd Room-Radner-R-R
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   - Ensure MongoDB is installed and running locally
   - The app connects to `mongodb://127.0.0.1:27017/roomrander`
   - Database will be created automatically on first run

4. **Start the application**
   ```bash
   node app.js
   ```
   or for development:
   ```bash
   nodemon app.js
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
Room-Radner-R-R/
├── models/
│   └── listing.js          # MongoDB schema for listings
├── views/
│   └── listings/
│       ├── home.ejs        # Homepage
│       ├── index.ejs       # All listings view
│       ├── show.ejs        # Individual listing details
│       ├── new.ejs         # Add new listing form
│       └── edit.ejs        # Edit listing form
├── public/                 # Static assets (CSS, JS, images)
├── app.js                  # Main application file
└── README.md
```

## 🌐 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Homepage |
| GET | `/listing` | View all listings |
| GET | `/listing/addnew` | New listing form |
| POST | `/listing` | Create new listing |
| GET | `/listing/:id` | View specific listing |
| GET | `/listing/:id/edit` | Edit listing form |
| PUT | `/listing/:id` | Update listing |
| DELETE | `/listing/:id` | Delete listing |

## 🔧 Configuration

- **Port**: The application runs on port 8080 by default
- **Database**: MongoDB connection string can be modified in the main() function
- **Views**: EJS templates are located in the `/views` directory
- **Static Files**: Served from `/public` directory

## 🚧 Future Enhancements

- User registration and profile management
- Advanced search and filtering options
- Image upload functionality for properties
- Rating and review system
- Payment integration for bookings
- Email notifications
- Mobile responsive design improvements
- Admin dashboard for platform management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support and queries, please create an issue in the repository or contact the development team.

---

**Note**: This application is designed for students and professionals seeking accommodation, creating a trustworthy platform for housing solutions in urban areas and educational hubs.

## 🔗 Repository

**GitHub**: [Room-Radner-R-R](https://github.com/mod-kaif07/Room-Radner-R-R.git)
