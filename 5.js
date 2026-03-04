class BankAccount {
  constructor(balance, owner) {
    this.balance = balance
    this.owner = owner
  }
  set deposit(money){
    this.balance = this.balance + money
  }
  set withdraw(money){
    if(this.balance - money >= 0){
    this.balance = this.balance - money
    } else {
        console.log("You don't have enough money")
    }
  }
  get getBalance(){
    return this.balance
  }
}

let account1 = new BankAccount(0, "Amir")
console.log(account1.getBalance)
account1.deposit = 100 
console.log(account1.getBalance)
account1.withdraw = 50
console.log(account1.getBalance)
account1.withdraw = 50
console.log(account1.getBalance)
account1.withdraw = 50
console.log(account1.getBalance)
