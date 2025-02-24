# Candidate Management API

This is a Django REST Framework (DRF) based API for tracking the candidate. It supports CRUD operations and searching candidates by name.

## 📌 Features
- Retrieve a list of candidates or a specific candidate by ID.
- Create a new candidate.
- Update an existing candidate.
- Delete a candidate.
- Search candidates by name with a relevancy score.

## 🚀 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/candidate-api.git
cd candidate-api
```

### 2️⃣ Create and activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Apply migrations
```bash
python manage.py migrate
```

### 5️⃣ Run the development server
```bash
python manage.py runserver
```

## 🔗 API Endpoints

### 📍 Candidate Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/candidates/` | Retrieve all candidates |
| GET | `/candidates/?id=<candidate_id>` | Retrieve a specific candidate |
| POST | `/candidates/` | Create a new candidate |
| PUT | `/candidates/?id=<candidate_id>` | Update a candidate |
| DELETE | `/candidates/?id=<candidate_id>` | Delete a candidate |

### 📍 Search Candidates
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/search/?search_candidate=<name>` | Search candidates by name |

## 🛠 Running Tests
Run the test suite using:
```bash
python manage.py test
```
If a test fails, check the response messages by printing `response.json()` in test cases.

## 🏗 Technologies Used
- Python
- Django
- Django REST Framework (DRF)
- PostgreSQL (or SQLite for development)
## 📜 License
This project is licensed under the MIT License.

---
**Maintainer:** Your Name | [GitHub](https://github.com/yourusername)

