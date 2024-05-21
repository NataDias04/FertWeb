import Adafruit_DHT

def ler_temperatura_dht11():
    pin = 13  # Define a porta GPIO utilizada
    sensor = Adafruit_DHT.DHT11
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    if humidity is not None and temperature is not None:
        return int(temperature)
    else:
        return None

print(ler_temperatura_dht11())
