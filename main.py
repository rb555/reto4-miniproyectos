def mostrar_menu():
    print("Bienvenido al Menú Telefónico")
    print("1. Ver saldo")
    print("2. Recargar saldo")
    print("3. Transferir saldo")
    print("4. Configuración")
    print("0. Salir")

def obtener_opcion():
    opcion = input("Ingresa el número de opción que deseas seleccionar: ")
    return opcion

def procesar_opcion(opcion):
    if opcion == "1":
        print("Tu saldo actual es $100")
    elif opcion == "2":
        monto = float(input("Ingresa el monto que deseas recargar: "))
        print(f"Recargaste ${monto} a tu saldo")
    elif opcion == "3":
        destino = input("Ingresa el número de teléfono al que deseas transferir saldo: ")
        monto = float(input("Ingresa el monto que deseas transferir: "))
        print(f"Transferiste ${monto} al número {destino}")
    elif opcion == "4":
        print("Accediendo a la configuración...")
    elif opcion == "0":
        print("¡Gracias por utilizar nuestro menú telefónico!")
    else:
        print("Opción inválida. Por favor, ingresa una opción válida.")


while True:
    mostrar_menu()
    opcion = obtener_opcion()
    procesar_opcion(opcion)
    if opcion == "0":
        break
