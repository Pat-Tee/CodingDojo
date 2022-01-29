class User:
    def __init__(self, newName, newEmail):
        self.userName = newName
        self.email = newEmail
        self.balance = 0

    def makeDeposit(self, amount):
        self.balance+=amount

    def makeWithdrawal(self, amount):
        self.balance -= amount;

    def displayUserBalance(self):
        print(self.userName+" : $",self.balance)

    def transferMoney(self, user2, amount):
        user2.makeDeposit(amount)
        self.makeWithdrawal(amount)

user1 = User("Keanu Reeves", "keanu@theMatrix.net")
user2 = User("Wedge", "wedge@theRebelAlliance.org")
user3  = User("John Spartan", "johnspartan@UNSC.mil")


user1.makeDeposit(1000000)
user1.makeDeposit(10000000)
user1.makeDeposit(5000000)
user1.makeWithdrawal(1000)
user1.displayUserBalance()

user2.makeDeposit(500)
user2.makeDeposit(1200)
user2.makeWithdrawal(1350)
user2.displayUserBalance()

user3.makeDeposit(20000)
user3.makeWithdrawal(500)
user3.makeWithdrawal(6950)
user3.makeWithdrawal(7777)
user3.displayUserBalance()

user1.transferMoney(user2,500000)
user1.transferMoney(user3, 1000000)

user1.displayUserBalance()
user2.displayUserBalance()
user3.displayUserBalance()