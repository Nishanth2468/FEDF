# auth_service.py

import sqlite3
import os

SECRET_KEY = "mysecretpassword123"   # hardcoded secret should not be here


def connect_db()
    conn = sqlite3.connect("users.db")
    return conn


def get_user(username):
    conn = connect_db()
    cursor = conn.cursor()

    # SQL Injection vulnerability
    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor.execute(query)

    result = cursor.fetchone()
    return result


def authenticate(username, password):
    user = get_user(username)

    if user:
        if password = user[2]:   # syntax error (assignment instead of comparison)
            return True
    return False


def calculate_discount(price, percentage):
    discount = price * percentage / 100
    return price + discount   # logic bug (should subtract)


def process_orders(orders):
    total = 0

    for i in range(len(orders))
        total = total + orders[i]

    return total / len(orders)   # possible division by zero


def read_config():
    f = open("config.txt", "r")
    data = f.read()
    return data


def UnusedFunction():
    print("this function is never used")


def main():

    print("Authenticating user")

    if authenticate("admin","admin123")
        print("Login success")

    orders = []

    avg = process_orders(orders)
    print("Average order:", avg)

    print("Discount:", calculate_discount(100, 10))

    print(read_config())


main()
