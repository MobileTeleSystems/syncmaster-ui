import React from 'react';

export const FileNameTemplateTooltipText = () => {
  return (
    <>
      You can use the following placeholders (with brackets {'{}'}): <br />
      <ul>
        <li>{`{index}`} - required</li>
        <li>{`{extension}`} - required</li>
        <li>{`{run_created_at}`}</li>
        <li>{`{run_id}`}</li>
      </ul>
      And letters, numbers, and symbols &quot;.&quot;, &quot;_&quot;, &quot;-&quot; <br />
    </>
  );
};
