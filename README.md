````markdown
# School Management API

A backend API built using Node.js, Express.js, and MySQL to manage school data.  
It allows users to add schools and retrieve a list of schools sorted by proximity to a given location.

---

## Features

- Add new schools with name, address, latitude, and longitude  
- Fetch all schools sorted by distance from user location  
- Distance calculated using Haversine formula  
- Uses cloud-hosted MySQL database  

---

## Tech Stack

- Node.js  
- Express.js  
- MySQL  
- Railway (Database hosting)  
- Render (Backend hosting)  

---

## API Endpoints

### Add School

- **URL:** `https://school-api-zijo.onrender.com/addSchool`  
- **Method:** `POST`

#### Request Body:
```json
{
  "name": "Test School",
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

### List Schools

- **URL:** `https://school-api-zijo.onrender.com/listSchools?lat=21.14&lon=79.08`
- **Method:** `GET`

#### Response:
```json
[
  {
    "id": 1,
    "name": "Test School",
    "address": "Nagpur",
    "latitude": 21.1458,
    "longitude": 79.0882,
    "distance": 1.07
  },
  {
    "id": 2,
    "name": "School 2",
    "address": "Mumbai",
    "latitude": 19.076,
    "longitude": 72.8777,
    "distance": 687.01
  },
  {
    "id": 3,
    "name": "School 3",
    "address": "Delhi",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "distance": 864.35
  }
]
```

---

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/kritikayadav20/school-api.git
cd school-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```
DB_HOST=mainline.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=railway
DB_PORT=29456
```

4. Run the server
```bash
node app.js
```

---

## Database Schema

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

## Live API

https://school-api-zijo.onrender.com

---

## Postman Collection

https://github.com/kritikayadav20/school-api/blob/main/School%20API.postman_collection.json
````
