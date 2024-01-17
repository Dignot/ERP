import { useEffect, useState } from "react";

import { getUserApi } from "shared/api";

import { AppRoute } from "./providers/routers/ui/index";


export const Container = () => {
  return (
    <div>
      <AppRoute />
    </div>
  );
};
