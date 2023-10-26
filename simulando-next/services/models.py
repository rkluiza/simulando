from peewee import Model, CharField, MySQLDatabase

db = MySQLDatabase('simulando', user='root', password='')

class User(Model):
    username = CharField(unique=True)
    password = CharField()
    
    class Meta:
        database = db

db.connect()
db.create_tables([User], safe=True)