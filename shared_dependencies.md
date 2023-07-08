1. Dependencies: 
   - React: Used in all .tsx files for creating components.
   - Typescript: Used in all .ts and .tsx files for static typing.
   - Tailwind CSS: Used in all .tsx files for styling.
   - Firebase: Used in Firebase.ts for user authentication.

2. Exported Variables:
   - App from App.tsx: Main application component.
   - Dashboard from Dashboard.tsx: Dashboard component.
   - Widget from Widget.tsx: Widget component.
   - WidgetContainer from WidgetContainer.tsx: Container for widgets.
   - Authentication from Authentication.tsx: Authentication component.
   - Firebase from Firebase.ts: Firebase service for authentication.

3. Data Schemas:
   - WidgetType in WidgetType.ts: Defines the structure of a widget.
   - UserType in UserType.ts: Defines the structure of a user.

4. ID Names of DOM Elements:
   - "root" in index.html: The root element where the React app is injected.

5. Message Names:
   - "authChange" in Firebase.ts: Event fired when authentication state changes.

6. Function Names:
   - "render" in all .tsx files: Renders the component.
   - "onAuthStateChanged" in Firebase.ts: Listens for changes in authentication state.
   - "signIn" and "signOut" in Authentication.tsx: Functions for signing in and out.
   - "addWidget" and "removeWidget" in Dashboard.tsx: Functions for adding and removing widgets.
   - "resizeWidget" and "moveWidget" in WidgetContainer.tsx: Functions for resizing and moving widgets.