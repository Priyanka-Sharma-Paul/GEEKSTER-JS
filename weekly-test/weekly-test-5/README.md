

# **Book Application with Dark Mode and Authentication**

## **Overview**
This project is a dynamic web application where users can explore various books, filter them by categories, view detailed information about each book, toggle between light and dark modes, and register or log in to access additional features.

## **Features**
- **Dark Mode:** Users can switch between dark and light themes to enhance their reading experience.
- **Sign Up / Login:** Allows users to create an account or log in to access personalized features.
- **Book Details:** Displays detailed information about a selected book when clicked.
- **Category Filter:** Users can filter books based on categories, dynamically updating the UI.

## **API Endpoints**
- **Top Books:** `https://books-backend.p.goit.global/books/top-books`
- **Category List:** `https://books-backend.p.goit.global/books/category-list`

## **Implementation Details**

### **UI Consistency**
The user interface is designed to be consistent across all pages, maintaining a clean and responsive design. The layout adapts seamlessly to different screen sizes, ensuring a user-friendly experience on both desktop and mobile devices.

### **Dark Mode**
- Implemented using a toggle switch that allows users to switch between light and dark themes.

### **Sign Up / Login**
- **Sign Up:** A form that collects user details (username, email, password) and validates the inputs before storing the data in `localStorage`.
- **Login:** A form that authenticates users by comparing input credentials with stored data. Upon successful login, users are redirected to the main application interface.

### **Book Details**
- Clicking on a book triggers a function that fetches the book's details from the API and displays them in a modal or a dedicated section on the page.

### **Category-wise Book Display**
- Categories are fetched from the API and displayed as buttons or a dropdown menu.
- When a category is selected, the books displayed on the page are updated to show only those belonging to the selected category.

## **JavaScript Functionality Used**
- **Event Listeners:** For handling user interactions like clicks and form submissions.
- **`fetch` API:** To retrieve data from the provided API endpoints.
- **DOM Manipulation:** Dynamically updating the UI based on user actions.
- **Local Storage:** For persisting user preferences and session data.

## **Hosted Link**
Check out the live demo of the project [here](https://priyanka-sharma-paul.github.io/GEEKSTER-JS/weekly-test/weekly-test-5/).

## **Conclusion**
This project showcases the application of various JavaScript functionalities like API handling, DOM manipulation, and user authentication, all integrated into a cohesive web application. The inclusion of a dark mode feature enhances user experience, while the sign-up/login functionality adds a layer of personalization.

