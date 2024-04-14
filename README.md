# Tax Calculator Project

This is a simple tax calculator project developed using HTML, CSS, and JavaScript. The project calculates the tax amount based on the user's age, gross annual income, extra income, and deductions. It also includes error handling for incorrect inputs and validation for mandatory fields.

## References & Requirements
#### Tax Calculation Formula:
Overall income (after deductions) under 8 Lakhs is not taxed.
Income over 8 Lakhs is taxed at different rates based on the user's age:
- 30% for people with age < 40
- 40% for people with age ≥ 40 but < 60
- 10% for people with age ≥ 60
```
Overall_Income= Gross Salary + Extra Income - Deductions

Let's say age is x then y% is taxed

Tax Calculation Result = (y/100)*(Overall_Income)
```
#### User Input Validation:
Users are not restricted from entering incorrect values like characters in number fields.
Error icons are displayed to the right of input fields if incorrect values are entered. Hovering over the icon shows an error tooltip.
Error icons are hidden if no errors are present.
#### Age Dropdown:
The age dropdown field includes three values:
- <40
- ≥ 40 & < 60
- ≥ 60
- If the user has not selected an age value and clicks submit, an error icon is displayed, indicating that the input field is mandatory.
#### Implementation Details
- Technologies Used: HTML, CSS, JavaScript, Bootstrap
- Design: The design is for representation purposes only. Modifications can be made as long as all functionalities listed in the requirements are present.
- Edge Cases: All edge cases, such as invalid inputs and mandatory field validations, are thoroughly considered and handled.
- Extra: Added History Page, which will store last calculations and will list them.
#### Usage
Open the HTML file in a web browser.
Enter the required information:
- Gross annual income
- Extra income
- Deductions
- Age category
- Error icons will be displayed for incorrect inputs.
- Ensure all mandatory fields are filled/selected before the Submit button is enabled; otherwise, the button remains disabled.
- Once enabled, click the "Submit" button to proceed.
- A modal will appear, showing the final tax calculation based on the provided inputs.
- Click the "History" button to view the last calculations performed within the webpage timeframe.
### Assumptions
- The project assumes a single-page application architecture.
- Tax rates and thresholds are fixed and not subject to change.
- The project prioritizes functionality over aesthetic design.
