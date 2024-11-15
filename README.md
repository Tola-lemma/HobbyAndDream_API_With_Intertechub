# **HobbyAndDream API - Intertechub Project**
<hr>

![Project Badge](https://img.shields.io/badge/Status-Active-green)

## **Overview**

The **HobbyAndDream API** is a lightweight backend application that provides endpoints to showcase personal information. It's designed to demonstrate the simplicity and power of building APIs with **Express.js**.

---

## **Endpoints**

### 1. **GET `/`**

- **Response**:  
  Returns Welcome Message as plain text.

  **Example Response:**

  ```text
        Welcome to Simple API project that show case my name, hobby and dream or life Goal!
  ```

### 2. **GET `/name`**

- **Response**:  
  Returns My Full Name as plain text.

  **Example Response:**

  ```text
       Tola Lemma Wake
  ```

### 3. **GET `/hobby`**

- **Response**:  
   Returns My hobbies as a JSON.

  **Example Response:**

  ```text
    {
  "Reading": {
    "description": "I enjoy reading various types of materials.",
    "examples": [
      "Holy Bible",
      "Technology-related sites/books"
    ]
  },
  "EditingAndDesigning": {
    "description": "I like working with multimedia and design tools.",
    "tools": [
      "Adobe Premiere Pro",
      "YouTube Movie Maker",
      "Adobe Illustrator",
      "invideo design tools",
      "Kali Linux"
    ],
    "activities": [
      "Logo design",
      "Photo editing",
      "Video editing",
      "Pen testing/Ethical hacking"
    ]
  },
  "HelpingPeople": {
    "description": "I'm highly interested in helping people who need assistance.",
    "motivation": "Making a positive impact in others' lives."
  },
  "Coding": {
    "description": "I enjoy creating and building projects using programming technologies.",
    "languages": [
      "Python",
      "JavaScript",
      "..."
    ],
    "frameworks": [
      "React",
      "Express",
      "Node.js",
      "..."
    ],
    "databases": [
      "PostgreSQL",
      "MongoDB",
      "..."
    ],
    "stacks": [
      "MERN stack",
      "PERN stack",
      "..."
    ]
  }
  }
  ```

### 4. **GET `/dream`**

- **Response**:  
  Returns motivational message about my dream or goal in life..

  **Example Response:**

  ```text
       {
   "dream": "To become a skilled full-stack developer and create impactful solutions using technology.",
  "message": "Keep learning, coding, and innovating. Every line of code you write brings you closer to making a difference in the world. Believe in your abilities, embrace challenges, and let your passion guide you to success!"}
  ```
---

## **How to Run This Project on Your Local Machine**
1. Clone the repository:
   ```bash
   git clone https://github.com/Tola-lemma/HobbyAndDream_API_With_Intertechub.git
2. Navigate into the project directory:
   ```bash
   cd HobbyAndDream_API 
3. Install dependencies:
   ```bash
   npm install
4. Start the server:
   ```bash
    npm start
5. Open your browser or a tool like <strong>Postman</strong> and test the endpoints at http://localhost:3000     
NB. <b><i>endpoints are explained above</i></b>
---
## **Technologies Used**
- Backend: `Express.js`
- Development Tools: `Node.js, npm`
## **Features**
- Clean and modular codebase.
- Beginner-friendly for those exploring backend development.
## **Contributing**
Contributions are welcome! Feel free to fork this repository, create a branch, and submit a pull request.
## **Contact**
- Developer: <b>Tola Lemma</b>
- Email: [ ![Gmail](https://img.shields.io/badge/Gmail-D14836?style=badge&logo=gmail&logoColor=white)](mailto:tolalemma@gmail.com)  
- GitHub:  [![Dev Community](https://img.shields.io/badge/GitHub-100000?style=badge&logo=github&logoColor=white)](https://github.com/Tola-lemma) 

