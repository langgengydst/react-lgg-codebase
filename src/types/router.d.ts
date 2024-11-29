import { RouteObject } from "react-router";

export type BaseRouteObject = Omit<RouteObject, "handle" | "children"> & {
  handle?: {
    /**
     * Menu name
     * @type string
     * @example "Dashboard"
     * @example "Setting"
     * @example "Profile"
     */
    menu?: string;

    /**
     * Sub menu name
     * @type string
     * @example "Admin Dashboard"
     * @example "Member Dashboard"
     */
    subMenu?: string;
  };
  children?: BaseRouteObject[];
};
