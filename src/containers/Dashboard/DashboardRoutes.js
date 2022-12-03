import { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "@components/utility/loader";

const routes = [
  {
    path: "",
    component: lazy(() => import("@containers/Widgets/Widgets")),
    exact: true,
  },
  {
    path: "family-details",
    component: lazy(() => import("@containers/FamilyDetails")),
  },
  {
    path: "family-events",
    component: lazy(() => import("@containers/FamilyDetails/Events")),
  },
  {
    path: "prayers",
    component: lazy(() => import("@containers/MediaLibrary/Prayers")),
  },/*
  {
    path: "view-album/:aid",
    component: lazy(() => import("@containers/MediaLibrary/ViewAlbum")),
  },*/
  {
    path: "settings",
    component: lazy(() => import("@containers/Settings/Settings")),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  console.log(url)
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
