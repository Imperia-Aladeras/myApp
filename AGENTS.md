# Project Guidelines

## Architecture
- Use Clean Architecture.
- Organize code into the following layers: Domain, Application, Infrastructure, API.
- Use Entity Framework Core for data access.
- Store configuration in `appsettings.json`.
- Implement RESTful controllers that use validation and Data Transfer Objects (DTOs).
- Configure dependency injection in `Program.cs`.
- Provide structured logging with Serilog.
- Write unit tests with xUnit and FluentAssertions.
- Document the API with Swagger/OpenAPI.
- Ensure that every HTML page served by the application includes the following scripts so that Tailwind CSS and Tailwind Plus Elements are available:

  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/%40tailwindplus/elements@1" type="module"></script>
  ```

## Code Style
- Always use explicit type declarations; `var` is not allowed.
- Use clear, descriptive names for variables.
- Apply camelCase to local variables, PascalCase to methods and class-level variables, and UPPER_SNAKE_CASE to TA properties.
- API endpoints must not return TA elements.
- LINQ and Entity Framework transformations are allowed when used reasonably and simply.
- Use 4 spaces for indentation; do not use tabs.
- Use CRLF for new lines.
- Place braces (`{}`) on new lines.
- Insert a blank line between methods.
- Apply common sense to blank lines inside methods so related code stays together.
- Add a space before and after any operator (except for `++`).
- Use the `++` operator only in postfix form.
- Prefer doubles over floats.
- Prefer lists over arrays.
- Avoid `out` and optional parameters.
