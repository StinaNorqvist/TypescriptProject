Feature: Login formulär

Det ska finnas två fält där användaren ska skriva in sin mailadress och sitt lösenord för att sedan kunna logga in. Om användaren har skrivit in rätt uppgifter så ska ett meddelande som bekräftar att inloggningen lyckades renderas. Om användaren har skrivit in fel uppgifter så ska ett annat meddelande om att inloggningen misslyckades renderas.

Scenario: Jag vill logga in och har skrivit in rätt information
Given Jag vill logga in med rätt lösenord och ser alla fält
When Jag har skrivit in rätt lösenord
Then Ska ett meddelande om att inloggningen lyckades renderas

Scenario: Jag vill logga in men har skrivit in fel information
Given Jag vill logga in med fel lösenord och ser alla fält
When Jag har skrivit in fel lösenord
Then Ska ett meddelande om att inloggningen misslyckades renderas