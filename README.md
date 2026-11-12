# bruteforce-script

A lightweight automated brute-force tool built for educational purposes, authorized penetration testing, and password security auditing. This script demonstrates how dictionary-based and credential-stuffing attacks work against login endpoints or local authentication mechanisms.

## ⚠️ Legal Disclaimer

> **FOR EDUCATIONAL AND AUTHORIZED TESTING PURPOSES ONLY.**  
> Usage of this tool for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state, and federal laws. The developer assumes no liability and is not responsible for any misuse or damage caused by this program.

---

## ✨ Features

* **Dictionary Attack Support:** Reads credentials directly from custom wordlists (e.g., `wordlist.txt`).
* **Automated Request Handling:** Iterates through username/password combinations and analyzes HTTP status codes or response lengths to detect valid logins.
* **Customizable Targets:** Easily configurable target URL, form parameters, and failure indicators.
* **Lightweight & Fast:** Minimal dependencies for quick execution in Linux/Windows terminal environments.

---

## 🛠️ Prerequisites

* Python 3.x
* `requests` library

---

## 🚀 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/n1ghtj4r/bruteforce-script.git](https://github.com/n1ghtj4r/bruteforce-script.git)
   cd bruteforce-script