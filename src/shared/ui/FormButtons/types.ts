/** Interface as Props for component "FormButtons" */
export interface FormButtonsProps {
  /** Callback on cancel button click */
  onCancel?: () => void;
  /** Text content for submit button  */
  submitButtonText?: string;
  /** Text content for cancel button  */
  cancelButtonText?: string;
  /** Flag that hides cancel button  */
  isCancelButtonHidden?: boolean;
}
