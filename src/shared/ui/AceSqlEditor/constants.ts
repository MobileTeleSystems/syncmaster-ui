// Example with settings
// https://ace.c9.io/build/kitchen-sink.html

const EDITOR_PROPS = {
  $blockScrolling: false,
  $blockSelectEnabled: false,
  $enableBlockSelect: false,
  $enableMultiselect: false,
  $highlightPending: false,
  $highlightTagPending: false,
};

const SET_OPTIONS = {
  highlightSelectedWord: false,
};

export const INITIAL_PROPS = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  showPrintMargin: false,
  highlightActiveLine: false,
  editorProps: EDITOR_PROPS,
  setOptions: SET_OPTIONS,
};
