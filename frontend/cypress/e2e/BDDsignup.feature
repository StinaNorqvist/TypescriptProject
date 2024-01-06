Feature: Sign Up formulär

Det ska finnas ett formulär med fält för användaren att skriva in namn, email, lösenord, adress, postnummer och stad. När användaren har skrivit in alla uppgifter korrekt så ska knappen för att skapa ett konto bli klickbar. Om användaren har skrivit in fel på något fält ska ett felmeddelande visas och knappen för att skapa ett konto ska förbli icke klickbar.

Scenario: Jag vill skapa ett konto och har skrivit in korrekt information
Given Jag är på sidan för att skapa ett konto och ser alla fält
When Jag har skrivit in korrekt information på alla fält
Then Ska knappen för att skapa konto bli klickbar

Scenario: Jag vill skapa ett konto och har skrivit in fel information
Given Jag är på sidan för att skapa ett konto och ser alla fält
When Jag har skrivit in fel format på min mailadress
Then Ska knappen för att skapa konto fortsätta vara icke klickbar och ett felmeddelande visas