# ⚛️ Mr. Atomic - Educational Materials Website

## About the Project

**Mr. Atomic** is an interactive educational website designed to serve as a comprehensive and organized reference for academic materials. The project aims to compile notes, reports, and important files related to various courses into a single, user-friendly interface, structured by academic semesters.

The website is built entirely using **HTML5**, embedded **CSS3**, and pure **JavaScript**, making it lightweight, fast to load, and an excellent example of a Static Web Application.

## 🌟 Key Features

*   **Semester-Based Organization:** Materials are logically arranged within academic semesters (First Semester, Second Semester), which simplifies content browsing and access.
*   **Arabic User Interface (RTL):** The interface design fully supports the Arabic language (Right-to-Left), utilizing modern fonts (Cairo font).
*   **Interactive Material Display:** When a subject is selected, its content is dynamically displayed, including:
    *   A list of available files and documents for download (e.g., PDF files).
    *   Important tips and guidelines for the subject.
    *   Illustrative images (fetched from external sources like Unsplash).
*   **Responsive Design:** The interface is designed to work efficiently across various devices, from desktops to smartphones.

## 📁 Project Structure

The project consists of one main HTML file and a folder containing the important documents:

```
mr-atomic-site/
├── atomic_educational_site.html  # Main website file (includes HTML, CSS, JS)
└── files/
    ├── InternetSpeed.pdf
    ├── تقرير المبادئ.pdf
    ├── تقرير امنية.pdf
    ├── تقرير الترميز.pdf
    ├── تقرير هياكل متقطعة.pdf
    └── نظام محاكاة البنوك.pdf
```

## 🛠️ Setup and Running

Since the project is a static web application, it does not require any backend server to run.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/9gkc/mr-atomic-site.git
    ```
2.  **Run the Application:**
    *   Navigate to the folder: `cd mr-atomic-site`
    *   Open the `atomic_educational_site.html` file directly in your web browser.

    **Note:** This file can be easily hosted on any static hosting service (such as GitHub Pages or Netlify) to make it available online.

## 📚 Included Academic Materials

The website currently contains materials organized into two semesters, with the possibility of adding more easily by modifying the `materialsData` object in the `atomic_educational_site.html` file.

| Semester | Available Subjects |
| :--- | :--- |
| **First Semester** | Discrete Structures, Programming Fundamentals, Data Security, Computer Organization |
| **Second Semester** | Logic Design, Advanced Programming, Probability and Statistics, Coding and Information Theory, Principles of Cybersecurity |

## 🤝 Contribution

We welcome any contributions to improve this project, whether it is:
*   Adding new academic materials.
*   Improving the interface design (CSS).
*   Adding new features using JavaScript.

To contribute, please follow these steps:
1.  **Fork** the repository.
2.  Create a new feature branch: `git checkout -b feature/AmazingFeature`
3.  Commit your changes: `git commit -m 'Add some AmazingFeature'`
4.  Push to the branch: `git push origin feature/AmazingFeature`
5.  Open a **Pull Request**.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file (if present) for more details.

---
