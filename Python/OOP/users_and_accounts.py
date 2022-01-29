#BEGIN bankaccount class definition
class BankAccount:
    bank_name = "Dojo Bank"
    all_accounts = []
    def __init__(self, balance=0, int_rate=.03):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    @classmethod 
    def display_all_accounts(cls):
        print("---All accounts---")
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
#END bankaccount class definition

#BEGIN user class definition
class User:
    def __init__(self, newName, newEmail):
        self.userName = newName
        self.email = newEmail
        self.account = []

    def makeDeposit(self, amount,accountNum=0):
        if (accountNum>0):
            accountNum -= 1
        self.account[accountNum].balance+=amount
        return self

    def makeWithdrawal(self, amount, accountNum=0):
        if (accountNum>0):
            accountNum -= 1
        self.account[accountNum].balance -= amount;
        return self

    def transferMoney(self, amount, user2, accountNum=0, accountNum2=0):
        user2.makeDeposit(amount, accountNum2)
        self.makeWithdrawal(amount, accountNum)
        return self

    def addAccount(self, amount=0):
        self.account.append(BankAccount(amount))
    
    def showBalance(self, accountNum=0):
        if (accountNum>0):
            accountNum -= 1
        self.account[accountNum].display_account_info()

#END User class definition


#BEGIN main body
user1 = User("John", "john Doe")

user1.addAccount()
user1.addAccount(5000)
user1.addAccount(300)

user1.showBalance(3)

BankAccount.display_all_accounts()
#END main body