import { Payment, PaymentService } from "@samples/adapter/old.ts";
import { Transaction } from "@samples/adapter/new.ts";

class TransactionPaymentAdatper implements Payment {
  constructor(private transaction: Transaction) {}
  pay(amount: number): void {
    this.transaction.newTypePay(amount);
  }
}

const main = (): void => {
  const service = new PaymentService();
  const transaction = new Transaction();

  service.createPayment(new TransactionPaymentAdatper(transaction));
};

if (import.meta.main) {
  main();
}

export { TransactionPaymentAdatper };
