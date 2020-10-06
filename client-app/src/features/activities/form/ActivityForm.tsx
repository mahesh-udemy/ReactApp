import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialActivity,
}) => {
  const InitializeActivity = () => {
    if (initialActivity) {
      return initialActivity;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(InitializeActivity);

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={activity?.title} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={activity?.description}
        />
        <Form.Input placeholder="Category" value={activity?.category} />
        <Form.Input type="date" placeholder="Date" value={activity?.date} />
        <Form.Input placeholder="City" value={activity?.city} />
        <Form.Input placeholder="Venue" value={activity?.venue} />
        <Button
          positive
          floated="right"
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
