/* eslint-disable no-console */
import { useEffect, useState } from "react";

import { getUserApi } from "shared/api";

export const Container = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserApi()
      .then((d) => setMessage(`User name: ${d.name}, with email: ${d.email}`))
      .catch((e) => setMessage(e?.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {!isLoading && <div>{message}</div>}
      {isLoading && <div>...isLoading</div>}
    </div>
  );
};
