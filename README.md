Analisi del progetto
App:

Descrizione: Componente principale che contiene tutti gli altri componenti.
Responsabilità: Gestisce il layout globale e include i provider dei contesti.
Header:

Descrizione: Componente che contiene l'intestazione dell'app.
Responsabilità: Permette di alternare tra tema scuro/chiaro e unità di misura Celsius/Fahrenheit.
WeatherDashboard:

Descrizione: Contiene l'interfaccia principale per mostrare i dati meteo.
Responsabilità: Visualizza una lista di WeatherCard per ogni città.
WeatherCard:

Descrizione: Componente per mostrare i dati meteo di una singola città.
Responsabilità: Visualizza le informazioni meteo come temperatura, condizioni, ecc.
Context Provider Components:

Descrizione: Componenti che forniscono i contesti ThemeContext, UnitContext e WeatherContext ai componenti figli.
Responsabilità: Gestiscono e forniscono i dati globali e le funzioni per alterare lo stato.
