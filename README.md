# Playwright Registration Test Suite

This repository contains 16 automated end-to-end test cases written in TypeScript using the [Playwright](https://playwright.dev/) framework. 
The scripts are designed to validate a wide range of scenarios related to the user registration process on a web application.

TEST SCENARIOS

Positive Test Scenarios
1.	Register with valid username, email, password, and confirmed password - (script name – valid_credentials.ts)
2.	Register using a valid email format (e.g. test@example.com) - (script name –    valid_email_format.spec.ts)
3.	Password and confirm password fields match exactly - (script name –    matching_passwords.spec.ts)
4.	Password meets minimum complexity (e.g. at least 8 characters, including numbers/symbols if required) - (script name – password_complexity.spec.ts)
5.	Successful form submission redirects to login or confirmation screen - (script name –    successful_registration_redirect.spec.ts)

Negative Test Scenarios
1.	Leave all fields empty and click “Create Account” expecting validation messages - (script name – empty_form_validation.spec.ts)
2.	Enter invalid email format (e.g. test@.com, test.com) expecting email validation error  - (script name – invalid_email_format.spec.ts)
3.	Use different values in password and confirm password expecting mismatch error - (script name – password_mismatch.spec.ts)
4.	Use already registered email – expect “email already exists” error - (script name –    email_already_exists.spec.ts)
5.	Use username with invalid characters (e.g. <>!) expecting validation error - (script name –    invalid_username_characters.spec.ts)
6.	Use overly long values in fields (e.g. 100+ characters) expecting truncation or error - (script name – long_values_in_fields.spec.ts)

Edge/Usability Test Scenarios
1.	Test form with leading/trailing spaces in fields - (script name – leading_trailing_spaces.spec.ts)
2.	Use keyboard only (Tab navigation) to complete and submit form - (script name – keyboard_only_navigation.spec.ts)
3.	Try pasting password into confirm password field - (script name – paste_password_confirm_field.spec.ts)
4.	Test field-specific error messages disappear once corrected - (script name – error_messages_disappear_on_correction.spec.ts)
5.	Verify proper label and focus behavior for screen reader accessibility - (script name – screen_reader_accessibility.spec.ts)

Test Descriptions

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
