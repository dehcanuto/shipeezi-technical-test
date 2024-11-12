![Shipeezi](.github/shipeezi-logo.png)

# Task Management Web Application

![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![Shipeezi](https://img.shields.io/badge/powered_by-Shipeezi-42b8b0)
![React version](https://img.shields.io/badge/React-18.3.1-59c4dc?style=flat-square&logo=react&logoColor=white)

## 📖 Objective

Develop a web application for task management with user authentication and collaboration features.

## 🛠️ Technical Stack

*  [NodeJS](https://nodejs.org/en/docs/) - Ambiente de execução JavaScript
*  [React](https://react.dev/learn) - Framework web with TypeScript
*  [NestJS](https://docs.nestjs.com/) - Framework backend with TypeScript
*  [MySQL](https://dev.mysql.com/doc/) - Database with Sequelize ORM
*  [Jest](https://jestjs.io/pt-BR/docs/getting-started) - Framework for backend unit tests
*  [Tailwind CSS](https://tailwindcss.com/docs) - Framework para estilização

## 🚀 Get Started!

### 1. Clone the repository

```bash
$ git clone git@github.com:dehcanuto/shipeezi-technical-test.git
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run project

#### 3.1 Run Frontend:

```bash
yarn dev
```

The project will be presented through the link [http://localhost:3000](http://localhost:3000).

## Requirements

### 1. User Authentication

- Implement user registration and login functionality
- Secure routes to ensure only authenticated users can access the application

### 2. Task Management

- Allow users to create, view, edit, and delete tasks
- Implement task status changes (e.g., "Backlog", "To Do", "In Progress", "Done")
- Enable users to add comments to tasks
- Implement functionality to assign tasks to one or more users

### 3. User Management

Implement CRUD operations for user accounts. Allow users to edit their own profile information.

## Implementation Details

### Frontend (React)

- Use functional components and hooks
- Implement proper state management (e.g., Context API or Redux)
- Create reusable components for tasks, comments, and user profiles
- Implement form validation for user input

### Backend (NestJS)

- Create RESTful API endpoints for all required functionalities
- Implement proper error handling and validation
- Use Sequelize for database operations
- Implement authentication using JWT (JSON Web Tokens)
- Write unit tests for all services and controllers using Jest

### Database (MySQL)

- Design and implement the database schema for users, tasks, and comments
- Use Sequelize migrations for database schema management

## Design

Download Figma file to get access to the design that you should follow. Then, open Figma on web or desktop, create a new file and import this file into it.

[FIGMA][https://drive.google.com/file/d/1WzCBGoseV_A2KW4xcP2NHmR13ITxWCc D/view?usp=drive_link]

## Evaluation Criteria

- Code quality and organization
- Proper use of TypeScript features
- Adherence to React and NestJS best practices
- Completeness of required features
- Quality and coverage of unit tests
- Proper error handling and edge case management
- UI/UX design and responsiveness

## Submission Guidelines

- Provide a GitHub repository with your complete source code
- Include a README.md file with setup instructions and any necessary documentation

**Candidates should complete this test within 4 days of receiving it. Good luck!**