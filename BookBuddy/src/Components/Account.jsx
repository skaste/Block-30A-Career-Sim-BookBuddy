import React, { useState, useEffect } from "react";

const Account = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information from the /api/users/me endpoint
    const fetchUserInfo = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          // Handle the case where the token is not present (user not logged in)
          return;
        }

        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch user information: ${response.statusText}`
          );
        }

        const result = await response.json();
        setUserInfo(result);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h2>Account</h2>
      {userInfo ? (
        <div>
          <p>ID: {userInfo.id}</p>
          <p>First Name: {userInfo.firstname}</p>
          <p>Last Name: {userInfo.lastname}</p>
          <p>Email: {userInfo.email}</p>
          <p>Books: {userInfo.books.length}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Account;
