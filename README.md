# Newsletter Card Component

## Project Overview

This project is a responsive Newsletter Signup Card Component built using HTML, CSS, and JavaScript. The component allows users to subscribe to a newsletter by entering their email address and accepting the terms and conditions. Upon successful subscription, a popup message is displayed to confirm the subscription. The project is fully responsive, adapting to different screen sizes, including mobile devices.

### Challenge Source

This project is a solution for the [FrontendPro Newsletter Card Component Challenge](https://www.frontendpro.dev/frontend-coding-challenges/newsletter-card-component-Q3mJZ3AVwbEW4BEKYCKF).

## Features

- **Responsive Design**: Adjusts to different screen sizes, ensuring a seamless user experience on desktop, tablet, and mobile devices.
- **Email Validation**: The form checks if the entered email is valid before allowing the user to submit the form.
- **Terms Agreement**: Users must agree to the terms and conditions by checking a checkbox before submitting the form.
- **Popup Confirmation**: After successful submission, a popup displays a thank-you message confirming the subscription.
- **Closeable Popup**: The popup can be closed by clicking on the close (×) button.

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout, including media queries for responsiveness.
- **JavaScript (ES6)**: For form validation and dynamic behavior, such as displaying the popup and handling form submission.

## Installation and Setup

To view or modify this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://gitlab.com/Yashi-Singh-9/newsletter-card-component.git
   ```

2. Navigate to the project directory:

   ```bash
   cd newsletter-card-component
   ```

3. Open the `index.html` file in your browser to view the component.

   ```bash
   open index.html
   ```

   Alternatively, you can use the Live Server extension in Visual Studio Code or any local development server of your choice.

## How It Works

1. **Form Submission**:
   - The user must enter a valid email address and check the agreement checkbox before the form can be submitted.
   - The form performs email validation using a regular expression and ensures that the agreement checkbox is checked.

2. **Popup Display**:
   - Upon successful validation, the popup appears, showing a thank-you message.
   - The user can close the popup by clicking the close (×) button.

3. **Responsive Behavior**:
   - The component layout adjusts for smaller screen sizes using media queries.
   - On mobile devices, the email input field and subscribe button are displayed in a column layout for better usability.

## Folder Structure

```bash
├── index.html             # Main HTML file
├── style.css              # Custom CSS file
└── script.js              # JavaScript file for form validation and popup logic
```

## Customization

### Styling

To customize the look and feel of the component, you can modify the CSS file (`style.css`). Some key areas you can customize:

- **Colors**: Modify background colors, text colors, and button colors.
- **Font**: Change the fonts by updating the `@import` line to use a different Google Font.
- **Layout**: Adjust padding, margins, and flexbox properties to change the layout or spacing of elements.

### JavaScript Logic

To change the behavior of the form or popup, you can edit the `script.js` file. You can:

- Update the email validation logic by modifying the regular expression pattern.
- Change how the popup behaves (e.g., auto-close after a few seconds).

## Responsiveness

This project uses media queries to ensure that the component looks good on different screen sizes. In the `style.css` file, you will find a media query targeting screens smaller than `720px` to adjust the layout for mobile devices.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

This project is inspired by the FrontendPro challenges, which provide developers with opportunities to enhance their frontend skills through real-world coding exercises.