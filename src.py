import speech_recognition as src

r = src.Recognizer()

with src.Microphone() as source:
    print("Por favor, diga algo")
    audio = r.listen(source)

    try:
        text = r.recognize_google(audio)
        print("Has dicho: {}".format(text))

    except:
        print("Lo siento, no entiendo lo que ha dicho")