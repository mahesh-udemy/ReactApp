import React, { useEffect, Fragment, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "../../features/nav/NavBar";
import ActivityDashBoard from "../../features/activities/dashboard/ActivityDashBoard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import TestStore from "../stores/testStore";

const App = () => {
  const activityStore = useContext(ActivityStore);
  const testStore = useContext(TestStore);

  useEffect(() => {
    activityStore.loadActivities();
    //testStore.changeTitle();
  }, [testStore]);

  if (activityStore.loadingIntial)
    return (
      <LoadingComponent content="Loading Activities...."></LoadingComponent>
    );

  return (
    <Fragment>
      <NavBar></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard></ActivityDashBoard>
      </Container>
    </Fragment>
  );
};

export default observer(App);
