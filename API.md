# Studybuddy API Contract

## Auth
POST /api/auth/register
Body: { "name": "...", "email": "...", "password": "..." }
Response: { "message": "...", "user": { "id", "name", "email" } }

POST /api/auth/login
Body: { "email": "...", "password": "..." }
Response: { "token": "...", "user": { "id", "name", "email" } }