/** Interface as Props for component "FormButtons" */
export interface ControlButtonsProps {
  /** Callback on submit button click */
  onSubmit?: () => void;
  /** Callback on cancel button click */
  onCancel?: () => void;
  /** Flag for loading process */
  isLoading?: boolean;
  /** Text content for submit button  */
  submitButtonText?: string;
  /** Text content for cancel button  */
  cancelButtonText?: string;
  /** Flag that hides cancel button  */
  isCancelButtonHidden?: boolean;
}
