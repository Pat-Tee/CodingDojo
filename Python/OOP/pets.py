class Pet:  
    def __init__(self, name, animal_type="unknown", tricks="unknown"):
        self.name=      name
        self.animal_type=      animal_type
        self.tricks=    tricks
        self.energy=    0
        self.health=    0
        self.sound=    {'dog' : 'ruff',
                        'cat': 'meow',
                        'snake': 'ssss',
                        'bird': 'chirp',
                        'unknown': '...'}

    def sleep(self):
        self.energy += 25
        return self
    
    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

    def noise(self):
        print(self.sound[self.animal_type])
        return self


class serviceAnimal(Pet):

    job =  {'see': 'has found a way through!',
            'hear': 'has been listening closely!',
            'clean': 'has been very industrious!',
            'comfort': 'has cooled off the situation!',
            'attack': 'has destroyed the opposition!',
            'none': 'hasnt really done much of anything...'}

    def doJob(self, jobType):
        print(self.name,self.job[jobType])
        return self

