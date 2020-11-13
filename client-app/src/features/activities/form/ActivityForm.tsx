import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { ActivityFormValues } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import TextInput from "../../../app/common/form/TextInput";
import { Form as FinalForm, Field } from "react-final-form";
import TextAreaInput from "../../../app/common/form/TextAreaInput";
import SelectInput from "../../../app/common/form/SelectInput";
import { category } from "../../../app/common/options/categoryOptions";

interface DetailParam {
  id: string;
}

const ActivityForm: React.FC<RouteComponentProps<DetailParam>> = ({
  match,
  history,
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    createActivity,
    editActivity,
    submitting,
    loadActivity,
  } = activityStore;

  const [activity, setActivity] = useState(new ActivityFormValues());

  useEffect(() => {
    if (match.params.id) {
      loadActivity(match.params.id).then((activity) =>
        setActivity(new ActivityFormValues(activity))
      );
    }
  }, [loadActivity, match.params.id]);

  const handleFinalFormSubmit = (values: any) => {
    const { ...activity } = values;
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm
            initialValues={activity}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  placeholder="Title"
                  value={activity?.title}
                  component={TextInput}
                />
                <Field
                  rows={2}
                  placeholder="Description"
                  value={activity?.description}
                  name="description"
                  component={TextAreaInput}
                />
                <Field
                  name="category"
                  placeholder="Category"
                  value={activity?.category}
                  options={category}
                  component={SelectInput}
                />
                <Field
                  name="date"
                  type="datetime-local"
                  placeholder="Date"
                  value={activity?.date!}
                  component={TextInput}
                />
                <Field
                  name="city"
                  placeholder="City"
                  value={activity?.city}
                  component={TextInput}
                />
                <Field
                  name="venue"
                  placeholder="Venue"
                  value={activity?.venue}
                  component={TextInput}
                />
                <Button
                  positive
                  floated="right"
                  type="submit"
                  content="Submit"
                  loading={submitting}
                ></Button>
                <Button
                  onClick={() => history.push("/activities")}
                  floated="right"
                  type="button"
                  content="Cancel"
                ></Button>
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityForm);
