import React, { useEffect, useState } from "react";
import { User } from "./types";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://example.com/api/user");
      const data: User = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Email: ${user.email}`}</p>
    </div>
  );
};

export default App;
