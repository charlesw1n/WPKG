Avant de déployer Office 365 il est nécessaire de modifier quelques paramètres dans x86 et x64.xml : lignes 3, 15 et 19 il faut modifier l'endroit où sont stockés les fichiers d'Office 365.

Il faudra ensuite lancer la ligne de commande suivante : 

\\server\path\setup.exe /download \\server\path\x86.xml pour la version 32 bits

\\server\path\setup.exe /download \\server\path\x64.xml pour la version 64 bits

Le délai d'installation moyen est d'environ 15 minutes.