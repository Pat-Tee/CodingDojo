class User:
    def __init__(self, newName, newEmail):
        self.userName = newName
        self.email = newEmail
        self.balance = 0

    def makeDeposit(self, amount):
        self.balance+=amount
        return self

    def makeWithdrawal(self, amount):
        self.balance -= amount;
        return self

    def displayUserBalance(self):
        print(self.userName+" : $",self.balance)
        return self

    def transferMoney(self, user2, amount):
        user2.makeDeposit(amount)
        self.makeWithdrawal(amount)
        return self

user1 = User("Keanu Reeves", "keanu@theMatrix.net")
user2 = User("Wedge", "wedge@theRebelAlliance.org")
user3  = User("John Spartan", "johnspartan@UNSC.mil")


user1.makeDeposit(1000000).makeDeposit(10000000).makeDeposit(5000000).makeWithdrawal(1000).displayUserBalance()

user2.makeDeposit(500).makeDeposit(1200).makeWithdrawal(1350).displayUserBalance()

user3.makeDeposit(20000).makeWithdrawal(500).makeWithdrawal(6950).makeWithdrawal(7777).displayUserBalance()

user1.transferMoney(user2,500000).transferMoney(user3, 1000000).displayUserBalance()

user2.displayUserBalance()
user3.displayUserBalance()