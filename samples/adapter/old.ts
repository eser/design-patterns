// This is the old code that we don't want to (or can't) change
class Payment {
  pay(amount: number) {
    console.log(`old type pay ${amount}`);
  }
}

class PaymentService {
  createPayment(payment: Payment): void {
    payment.pay(100);
  }
}

export { type Payment, PaymentService };
