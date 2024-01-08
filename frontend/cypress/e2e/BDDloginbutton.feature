Feature: Log in/Log out-knappen

Innan en användare har loggat in ska knappen i menyn säga "Log in" och när användaren har loggat in så ska knappen säga "Log out". 

Scenario: Jag loggar in och knappens text ändras
  Given Jag är på hemsidan och knappen visar Log in
  When Jag har loggat in
  Then Ska knappen visa Log out istället