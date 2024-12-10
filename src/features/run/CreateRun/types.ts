export interface CreateRunProps {
  transferId: number;
  transferName: string;
  onSuccess: () => void;
  onCancel: () => void;
}
