import React from 'react';

/** Regexp to filename template, which must include `{extension}` and `{index}` placeholder (e.g. qwerty_{index}.{extension}) */
export const FILE_NAME_TEMPLATE_REGEXP =
  /^(?=.*\{index\})(?=.*\{extension\})([a-zA-Z0-9._\-]*\{(?:index|extension|run_created_at|run_id)\}[a-zA-Z0-9._\-]*)*$/;

export const fileNameTemplateTooltipText = (
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

export const fileNamePlaceholder = '{run_created_at}_{index}.{extension}';
