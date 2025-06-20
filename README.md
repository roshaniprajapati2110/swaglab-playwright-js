# Swag Labs Playwright Automation

This project contains End-to-End test automation for **[Swag Labs](https://www.saucedemo.com/v1/)** using **Playwright** with **JavaScript**.

## Project Highlights

- Automated test cases for Login, Add to Cart, Checkout flow
- Page Object Model (POM) architecture
- Test data management using Data Factory and DTO
- Utility functions for reusability
- Playwright Test Runner with `playwright.config.js`
- Logging and structured test reports

##  Tech Stack

| Tool/Library     | Purpose                      |
|------------------|------------------------------|
| Playwright       | Automation framework         |
| JavaScript       | Programming language         |
| Node.js          | Runtime environment          |
| VS Code          | Code Editor                  |
| Page Object Model| Test structure               |

---

## 📁 Project Structure
**SwagLab**/
├── PageObjects/ # All Page classes (Login, Overview etc.)
├── tests/ # Your test specs
├── Utilities/ # Logger or other helper files
├── test-data/ # DTO & Data Factory (if added)
├── playwright.config.js # Playwright configuration
├── package.json # Dependencies

