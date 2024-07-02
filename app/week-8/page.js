// page.js
"use client";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <br />
          <a href="/week-8/shopping-list">Go to Shopping List</a>
        </>
      ) : (
        <>
          <h1>Welcome to Shopping List App</h1>
          <button onClick={gitHubSignIn}>Login with GitHub</button>
        </>
      )}
    </div>
  );
};

export default Page;
