import { Form, useActionData } from 'react-router-dom';
import classes from './NewPostForm.module.css';

function NewPostForm({ onCancel, submitting }) {
  const data = useActionData();
  return (
    <Form className={classes.form} method='post' action='/blog/new'>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" />
        {data && data.status && <p style={{color: 'red', textAlign: 'left'}}>Incorrect Field!</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          rows={5}
          ></textarea>
          {data && data.status && <p style={{color: 'red', textAlign: 'left'}}>Incorrect Field!</p>}
      </fieldset>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </button>
      <button disabled={submitting}>
        {submitting ? 'Submitting...' : 'Create Post'}
      </button>
    </Form>
  );
}

export default NewPostForm;
