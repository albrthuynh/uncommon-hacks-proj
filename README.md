# 🏥 AdversaCares

<div align="center">
  <img src="adversacare/src/assets/Logo/adversaCareLogo.png" alt="AdversaCares Logo" width="200"/>
  
  **Empowering Healthcare Decisions Through Data-Driven Insights**
  
  *Helping you and your doctor make informed decisions about medication safety*

  [![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Python Backend](https://img.shields.io/badge/Backend-Python-3776AB?style=for-the-badge&logo=python)](https://python.org/)
  [![Flask API](https://img.shields.io/badge/API-Flask-000000?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com/)
  [![FDA Data](https://img.shields.io/badge/Data-FDA%20API-FF6B6B?style=for-the-badge)](https://open.fda.gov/)

</div>

---

## 🌟 Overview

**AdversaCares** is a comprehensive healthcare platform that leverages FDA adverse event data to provide real-time insights into drug safety and interactions. Our mission is to bridge the gap between complex pharmaceutical data and actionable healthcare decisions for both doctors and patients.

### 🎯 Key Features

- **📊 Real-time FDA Data Analysis** - Access to the latest adverse drug event reports
- **👨‍⚕️ Doctor Dashboard** - Comprehensive patient management with drug interaction insights
- **👤 Patient Portal** - Personal medication tracking and safety information
- **📈 Advanced Visualizations** - Interactive charts showing drug safety patterns
- **🔐 Secure Authentication** - Auth0 integration for secure user management
- **🎨 Modern UI/UX** - Beautiful, responsive design with Material-UI and Tailwind CSS

---

## 🏗️ Architecture

```
📦 AdversaCares
├── 🎨 Frontend (React + Vite)
│   ├── Doctor Dashboard
│   ├── Patient Portal  
│   ├── Authentication
│   └── Data Visualizations
├── 🔧 Backend (Flask + Python)
│   ├── FDA API Integration
│   ├── Data Processing
│   ├── Chart Generation
│   └── RESTful API
└── 📊 Data Analysis (Jupyter)
    ├── Drug Safety Analysis
    ├── Adverse Event Patterns
    └── Statistical Visualizations
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### 🖥️ Frontend Setup

```bash
# Navigate to frontend directory
cd adversacare

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 🔧 Backend Setup

```bash
# Navigate to backend directory
cd adversacare_backend

# Install Python dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

The API will be available at `http://localhost:5000`

### 📊 Data Analysis

```bash
# Launch Jupyter notebook for data exploration
jupyter notebook UncommonDrugs.ipynb
```

---

## 🛠️ Technology Stack

### Frontend
- **⚛️ React 19** - Modern UI library
- **⚡ Vite** - Fast build tool and dev server
- **🎨 Material-UI** - Professional React components
- **🌈 Tailwind CSS** - Utility-first CSS framework
- **🔐 Auth0** - Authentication and authorization
- **🔥 Firebase** - Real-time database and hosting
- **🧭 React Router** - Client-side routing

### Backend
- **🐍 Python** - Core programming language
- **🌶️ Flask** - Lightweight web framework
- **📊 Pandas** - Data manipulation and analysis
- **📈 Matplotlib/Seaborn** - Data visualization
- **🌐 Requests** - HTTP library for API calls
- **🔧 Flask-CORS** - Cross-origin resource sharing

### Data & Analytics
- **📋 Jupyter Notebooks** - Interactive data analysis
- **🔢 NumPy** - Numerical computing
- **📊 Squarify** - Treemap visualizations
- **🏛️ FDA OpenFDA API** - Adverse event data source

---

## 📱 Features Walkthrough

### 🏠 Landing Page
Beautiful hero section introducing AdversaCares with clear call-to-action buttons for different user types.

### 👨‍⚕️ Doctor Dashboard
- **Patient Management** - View and manage patient medication profiles
- **Drug Interaction Analysis** - Real-time adverse event data for prescribed medications
- **Visual Reports** - Charts showing drug safety patterns and statistics
- **Patient Communication** - Secure messaging and updates

### 👤 Patient Portal
- **Medication Tracking** - Personal drug list with safety information
- **Adverse Event Reporting** - Easy-to-use forms for reporting side effects
- **Educational Resources** - Learn about your medications and potential interactions
- **Doctor Communication** - Secure channel to healthcare providers

### 📊 Data Visualizations
- **📈 Bar Charts** - Drug characterization and frequency analysis
- **🥧 Pie Charts** - Seriousness distribution of adverse events
- **🌳 Treemaps** - Top reactions and their relative frequencies
- **📋 Interactive Tables** - Detailed adverse event data

---

## 🔌 API Endpoints

### Drug Analysis
```http
GET /?q=DRUG1&q=DRUG2
```
Returns comprehensive analysis including:
- Adverse event statistics
- Seriousness distribution pie chart
- Drug characterization bar chart
- Top reactions treemap
- Raw data tables

**Example Response:**
```json
{
  "pie_chart": "data:image/png;base64,iVBOR...",
  "bar_chart": "data:image/png;base64,iVBOR...",
  "treemap_chart": "data:image/png;base64,iVBOR...",
  "data_table": "<table>...</table>"
}
```

---

## 📁 Project Structure

```
uncommon-hacks-proj/
├── 📊 UncommonDrugs.ipynb           # Main data analysis notebook
├── 📄 all_drugs.json               # Drug database
├── 🖼️ analysis_figures/            # Generated visualizations
├── 🎨 adversacare/                 # React frontend
│   ├── 📦 package.json
│   ├── ⚙️ vite.config.js
│   ├── 🎨 tailwind.config.js
│   └── 📁 src/
│       ├── 📱 App.jsx
│       ├── 🎯 components/           # Reusable React components
│       ├── 📄 pages/               # Application pages
│       └── 🖼️ assets/             # Images and fonts
└── 🔧 adversacare_backend/         # Flask API
    ├── 🌶️ app.py                  # Main Flask application
    ├── 🔧 fda_utils.py            # FDA API utilities
    └── 📋 requirements.txt        # Python dependencies
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔄 Open** a Pull Request

### Development Guidelines
- Follow React best practices for frontend development
- Use PEP 8 style guide for Python code
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ by the AdversaCares team for making healthcare data accessible and actionable.

---

## 🙏 Acknowledgments

- **FDA OpenFDA API** for providing comprehensive adverse event data
- **Auth0** for secure authentication services
- **Material-UI** and **Tailwind CSS** for beautiful UI components
- **React** and **Flask** communities for excellent documentation and support

---

## 📞 Support

Having issues? We're here to help!

- 📧 **Email**: support@adversacares.com
- 💬 **Issues**: [GitHub Issues](https://github.com/albrthuynh/uncommon-hacks-proj/issues)
- 📖 **Documentation**: [Wiki](https://github.com/albrthuynh/uncommon-hacks-proj/wiki)

---

<div align="center">
  
  **Made with 💊 for better healthcare decisions**
  
  *AdversaCares - Where Data Meets Care*

</div>