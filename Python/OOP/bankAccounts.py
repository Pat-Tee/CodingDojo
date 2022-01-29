class BankAccount:

    bank_name = "Dojo Bank"
    all_accounts = []
    def __init__(self, balance=0, int_rate=.03):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    @classmethod 
    def display_all_accounts(cls):
        print('---All Accounts---')
        for account in cls.all_accounts:
            print(" Balance: ",account.balance)
            print(" Yield rate: ", account.int_rate)
            print('---')

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if (self.balance - amount > 0):
            self.balance -= amount
        else:
            self.balance -= 5
            print("There is not enough money to withdraw from. A penalty of $5 has been incurred.")
        return self

    def display_account_info(self):
        print("Balance:",self.balance)
        return self

    def yield_interest(self):
        if (self.balance>0) :
            y = self.balance * self.int_rate
            self.balance += y
        return self

account1 = BankAccount(5000)
account2 = BankAccount()

account1.display_account_info().deposit(5555).deposit(6655).deposit(9875).withdraw(10000).yield_interest().display_account_info()
account2.display_account_info().deposit(6655).deposit(9875).withdraw(999).withdraw(5004).withdraw(77).withdraw(10).yield_interest().display_account_info()

account1.withdraw(20000).display_account_info()

BankAccount.display_all_accounts()