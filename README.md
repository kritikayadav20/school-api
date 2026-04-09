# School Management API

A backend API built using Node.js, Express.js, and MySQL to manage school data.  
It allows users to add schools and retrieve a list of schools sorted by proximity.

---

## 🚀 Features

- Add new schools with location details  
- Fetch schools sorted by distance from user location  
- Distance calculated using Haversine formula  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MySQL  

---

## 📌 API Endpoints

### 1. Add School

- **URL:** `/addSchool`  
- **Method:** `POST`  

#### Request Body:
```json
{
  "name": "ABC School",
  "address": "Nagpur",
  "latitude": 21.1458,
  "longitude": 79.0882
}
```

#### Response:
```json
{
  "message": "School added successfully"
}
```

---

### 2. List Schools

- **URL:** `/listSchools?lat=21.14&lon=79.08`
- **Method:** `GET`

#### Response:
```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Nagpur",
    "latitude": 21.1458,
    "longitude": 79.0882,
    "distance": 1.06
  }
]
```

---

## ⚙️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/your-username/school-api.git
cd school-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
```

4. Run the server
```bash
node app.js
```

---

## 📦 Database Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);
```

---

## 🌐 Live API

(Add your deployed link here)

---

## 📬 Postman Collection

(Add your Postman collection link here)