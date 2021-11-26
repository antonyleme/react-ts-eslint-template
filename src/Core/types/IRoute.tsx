import { ReactElement } from "react";

interface IRoute {
  path: string,
  element: ReactElement,
  exact?: boolean
}

export default IRoute;