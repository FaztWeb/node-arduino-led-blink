void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH); // Turn lead on
  delay(1000); // wait a second
  digitalWrite(13, LOW); // Toggle Led
  delay(400); // wait 400ms
}
