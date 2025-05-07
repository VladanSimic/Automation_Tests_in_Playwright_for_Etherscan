# Playwright Registration Test Suite

This repository contains 16 automated end-to-end test cases written in TypeScript using the [Playwright](https://playwright.dev/) framework. 
The scripts are designed to validate a wide range of scenarios related to the user registration process on a web application.

Test Case Descriptions

- **email_already_exists.spec.ts**  
  Verifies error message when attempting to register with an already registered email.

- **empty_form_validation.spec.ts**  
  Checks validation messages when submitting the form with all fields left blank.

- **error_messages_disappear_on_correction.spec.ts**  
  Ensures validation errors disappear when input is corrected.

- **invalid_email_format.spec.ts**  
  Validates that incorrect email formats are rejected.

- **invalid_username_characters.spec.ts**  
  Tests input of special characters and symbols in the username field.

- **keyboard_only_navigation.spec.ts**  
  Verifies form accessibility using only the keyboard (e.g., Tab and Enter keys).

- **leading_trailing_spaces.spec.ts**  
  Ensures that leading or trailing spaces are trimmed or produce validation warnings.

- **long_values_in_fields.spec.ts**  
  Inputs extremely long strings to check field length limits.

- **matching_passwords.spec.ts**  
  Verifies that the password and confirm password fields must match.

- **password_complexity.spec.ts**  
  Tests password requirements such as uppercase, lowercase, numbers, and special characters.

- **password_mismatch.spec.ts**  
  Ensures validation error appears when passwords do not match.

- **paste_password_confirm_field.spec.ts**  
  Verifies that pasting values into the confirm password field works as expected.

- **screen_reader_accessibility.spec.ts**  
  Checks that screen reader labels and accessibility roles are correctly defined.

- **successful_registration_redirect.spec.ts**  
  Confirms the user is redirected after successful registration.

- **valid_credentials.spec.ts**  
  Performs a positive test case with valid username, email, and password inputs.

- **valid_email_format.spec.ts**  
  Ensures only properly formatted email addresses are accepted.
