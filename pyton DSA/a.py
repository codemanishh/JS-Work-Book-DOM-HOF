# Implement a stack using a list in Python. Include the necessary methods such as push, pop, and isEmpty.
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.isEmpty():
            return None
        return self.items.pop()

    def isEmpty(self):
        return len(self.items) == 0
