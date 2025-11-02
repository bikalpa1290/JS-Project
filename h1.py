# HOTEL MANAGEMENT SYSTEM
# BY SMRITI KARKI

import os         # Helps work with files and folders in the computer
import datetime   # Used to add and display current date and time

# list to store rooms
rooms = []
# dictionary to store room bookings
bookings = {}


#ROOM FILE HANDLING
def save_rooms():
    """Save all rooms to file"""
    try:
        with open("rooms.txt", "w") as f:
            for r in rooms:
                f.write(f"{r['number']},{r['type']},{r['price']}\n")
    except:
        print("Error saving rooms.\n")


def load_rooms():
    """Load rooms from file"""
    global rooms
    if not os.path.exists("rooms.txt"):
        return
    try:
        with open("rooms.txt", "r") as f:
            for line in f:
                num, rtype, price = line.strip().split(",")
                rooms.append({"number": num, "type": rtype, "price": float(price)})
    except:
        print("Error reading rooms.\n")


#MAIN FUNCTIONS

def add_room():
    """Add a new room"""
    try:
        num = input("Enter room number: ")
        rtype = input("Enter room type (Single/Double/Suite): ")
        price = float(input("Enter price per night: "))
        rooms.append({"number": num, "type": rtype, "price": price})
        save_rooms()
        print("Room added!\n")
    except:
        print("Invalid price. Try again.\n")


def delete_room():
    """Delete a room"""
    num = input("Enter room number to delete: ")
    for r in rooms:
        if r["number"] == num:
            rooms.remove(r)
            save_rooms()
            print("Room deleted!\n")
            return
    print("Room not found.\n")


def show_rooms():
    """Show all rooms"""
    if not rooms:
        print("No rooms found.\n")
        return
    print("\n--- Room List ---")
    for r in rooms:
        print(f"Room {r['number']} | {r['type']} | ${r['price']}")
    print()


def book_room():
    """Book a room for a guest"""
    num = input("Enter room number: ")
    guest = input("Enter guest name: ")
    for r in rooms:
        if r["number"] == num:
            if num in bookings:
                print("Room already booked.\n")
            else:
                bookings[num] = guest
                print("Room booked!\n")
            return
    print("Room not found.\n")


def show_bookings():
    """Show all booked rooms"""
    if not bookings:
        print("No bookings found.\n")
        return
    print("\n--- Booked Rooms ---")
    for num, guest in bookings.items():
        print(f"Room {num} → {guest}")
    print()


def checkout():
    """Checkout a guest and show bill"""
    try:
        num = input("Enter room number: ")
        if num in bookings:
            days = int(input("Enter days stayed: "))
            for r in rooms:
                if r["number"] == num:
                    total = r["price"] * days
                    print(f"Total bill: ${total}")
                    del bookings[num]
                    print("Checkout complete.\n")
                    return
        else:
            print("Room not found or not booked.\n")
    except:
        print("Invalid input.\n")


#FILE HANDLING FOR BOOKINGS 

def save_bookings():
    """Save booking list to file"""
    try:
        with open("bookings.txt", "w") as f:
            for num, guest in bookings.items():
                f.write(f"{num},{guest}\n")
        print("Bookings saved!\n")
    except:
        print("Error saving file.\n")


def read_bookings():
    """Read booking file"""
    try:
        with open("bookings.txt", "r") as f:
            data = f.read()
            if data:
                print("\n--- File Content ---")
                print(data)
            else:
                print("File is empty.\n")
    except:
        print("File not found.\n")


def backup_bookings():
    """Make backup of booking file"""
    try:
        if not os.path.exists("bookings.txt"):
            print("No file to backup.\n")
            return
        backup = f"bookings_backup_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        with open("bookings.txt", "r") as f1, open(backup, "w") as f2:
            f2.write(f1.read())
        open("bookings.txt", "w").close()
        print("Backup done and file cleared.\n")
    except:
        print("Backup failed.\n")


#MAIN MENU

def main():
    load_rooms()  # load rooms from file
    while True:
        print("======= LANGHAM HOTEL =======")
        print("1. Add Room")
        print("2. Delete Room")
        print("3. Show Rooms")
        print("4. Book Room")
        print("5. Show Bookings")
        print("6. Checkout")
        print("7. Save Bookings")
        print("8. Read Bookings")
        print("9. Backup Bookings")
        print("0. Exit")
        print("==============================")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_room()
        elif choice == "2":
            delete_room()
        elif choice == "3":
            show_rooms()
        elif choice == "4":
            book_room()
        elif choice == "5":
            show_bookings()
        elif choice == "6":
            checkout()
        elif choice == "7":
            save_bookings()
        elif choice == "8":
            read_bookings()
        elif choice == "9":
            backup_bookings()
        elif choice == "0":
            print("Goodbye!")
            break
        else:
            print("Wrong choice. Try again.\n")


#START PROGRAM
if __name__ == "__main__":
    main()