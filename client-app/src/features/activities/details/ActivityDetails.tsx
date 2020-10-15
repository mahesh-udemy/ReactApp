import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityStore from "../../../app/stores/activityStore";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSideBar from "./ActivityDetailsSideBar";

interface DetailParam {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParam>> = ({
  match,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingIntial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingIntial)
    return <LoadingComponent content="loading activity..."></LoadingComponent>;

  if (!activity) return <h1>Activity not found.</h1>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailsHeader activity={activity}></ActivityDetailsHeader>
        <ActivityDetailsInfo activity={activity}></ActivityDetailsInfo>
        <ActivityDetailsChat></ActivityDetailsChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailsSideBar></ActivityDetailsSideBar>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
