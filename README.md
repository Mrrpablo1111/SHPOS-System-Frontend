
# 🧾 SH-POS System

A modern **Point of Sale (POS) System** that helps businesses manage **sales, inventory, customers, and reports** in one platform.

The system automates store operations and provides **real-time analytics** to help store owners make better business decisions.

---

# 🚀 Features

### 🛒 POS & Order Management
- POS terminal for fast checkout  
- Quick product search  
- Create and process orders  
- Cart management system  
- Apply discounts during checkout  
- Download bills / receipts  
- View order history  
- Refund management  

### 👥 Customer Management
- Add and manage customers  
- Store customer information  
- View customer purchase history  

### 📦 Inventory & Product Management
- Manage products  
- Track inventory and stock levels  
- Automatic stock updates after sales  

### 📊 Analytics & Reports
- Sales charts and analytics  
- Business report charts  
- Cashier shift summary reports  
- Track sales performance  

### 🏬 Store & Branch Management
- Branch dashboard for branch-level data  
- Store dashboard for overall performance  
- Multi-store management support  

### 🛠️ Administration
- Super Admin panel to manage stores  
- Subscription plan management  
- Store onboarding system  
- Stores can subscribe to plans  

### 🔐 Authentication & Security
- Secure login system  
- Forgot password feature  
- Role-based access control  

### 🎨 User Experience
- Responsive and modern UI  
- Dark / Light theme support  
- Landing page for product introduction  

---

### 🏗️ System Architecture

Frontend (React)
│
▼
Backend API (Spring Boot)
│
▼
Business Logic Layer
│
▼
Database (MySQL)
│
▼
Analytics & Reports


---

## 🧩 System Modules

### Authentication Module
Handles user login, registration, and secure authentication using **JWT**.

### POS Module
Allows product search, cart management, billing, and refund processing.

### Inventory Module
Manages products and automatically updates stock after each sale.

### Customer Module
Stores customer information and purchase history.

### Admin Module
Allows administrators to manage stores, users, and subscription plans.

### Reports Module
Generates sales reports, analytics dashboards, and shift summaries.

---

## 🛠️ Technology Stack

| Layer | Technology |
|------|-------------|
| Frontend | React |
| Backend | Spring Boot |
| Security | Spring Security + JWT |
| Database | MySQL |
| Build Tool | Maven |
| Version Control | Git & GitHub |
| Payment | Bakong |

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Mrrpablo1111/pos-system.git


2. Navigate to the project folder
cd pos-system
3. Run Backend (Spring Boot)
mvn spring-boot:run
4. Run Frontend
npm install
npm run dev
📸 Screenshots

Add screenshots of the system:

POS Billing Interface

Product Management

Sales Dashboard

Inventory Management

Admin Panel

Example folder structure:

docs/screenshots/dashboard.png
docs/screenshots/pos.png
📊 Future Improvements

Barcode / QR code scanner

Mobile application (Flutter / React Native)

Offline mode support

AI-based sales prediction

👨‍💻 Author:
Senghong

GitHub:
https://github.com/Mrrpablo1111
