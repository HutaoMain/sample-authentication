## How to Run and Test the App

1.  Clone the repository.
2.  Navigate to the project directory and open the terminal.
3.  Run `npm install` to install dependencies.
4.  Run `npm start` to start the development server.
5.  Open your browser and go to `http://localhost:3000` to view the application.

## Important Notes:

For the list of users to use for authentication, visit [DummyJSON Users](https://dummyjson.com/users). You can use the fields `username` and `password` for authentication. Due to API limitations, there is only one user as an editor:

- **Username:** atuny0
- **Password:** 9uQFF1Lh

The rest are viewers. Please refer to the provided link for more users.

## How to Use Some of the Functionality

- **Sortable:** On the home page of each role, click each field header to sort in ascending or descending order.
- **Logout:** Since state management and localStorage are used, you can't go to the login page without signing out. Therefore, I added the logout option in the navbar.
- **Role-Based Functionality:** You can identify whether the user is a **Viewer** or an **Editor** by checking the home page title.

## Important Notice Regarding Authentication

When logging in, you can't login right away because one requirement is to have password validation with a minimum of 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 special character. Because the dummyjson API password doesn't have a special character, it will not authenticate. To make it work, please ensure to comment out the following code inside `src/components/login/Login.tsx`:

    / Remove this part
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least 8 characters with at least 1 uppercase, 1 lowercase, and 1 special character."
      );
      return;
    }
    // Until here

Feel free to reach out if you have any further questions or concerns.
