export interface Transfer {
  accountNumber: number;
  amount: number;
  beneficiary: string;
  commission: number;
  reason: number;
  transferPossible: boolean;
  date: Date;
}

