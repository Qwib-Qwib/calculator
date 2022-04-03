# calculator

Lorsqu'on appuie sur une touche d'opérateur...
    Si num1 est vide ou égale à 0, et si la touche est un + ou un -...
        on passe num2 à num1.
        on met à jour l'opérateur.
        on vide num2.
        on vide l'arrayNum2.
        on met à jour l'affichage.
    Si num1 est vide et si la touche est un X...
            on appelle multiply(1, num2).
            on met à jour l'opérateur.
            on met à jour l'affichage.
    Si num1 n'est pas vide...
        on vérifie quel est l'opérateur actuel...
            Si c'est le même opérateur...
                rien ne se passe.
            Si l'opérateur est différent...

Lorsqu'on appuie sur la touche EXE...
    on lit l'opérateur.
    ON appele la fonction correspondante.
    On met à jour l'affichage.

Si EXE a été touché juste avant d'appuyer sur un opérateur, num1 doit recevoir le résultat de l'opération précédente.

Si un nouvel opérateur est entré alors que num2 est vide, l'opérateur doit juste être mis à jour.

Si num1 est négatif, il devrait être entouré de parenthèses dans l'affichage userInput, mais attention à ce que ça n'interfère pas avec les calculs.

IL va sans doute falloir réécrire operate et les opérations pour que la conversion en chiffres se fasse seulement dans operate et qu'elle soit utilisable à chaque fois qu'il faille réaliser une quelconque opération.


Quand _____ ?
    Dans le cas d'une addition ou d'une soustraction, opérateur mis à jour.
    Dans le cas d'une multiplication ou d'une division, num1 est 1 par défaut, opérateur mis à jour.

Quand num1 et l'opérateur ont une valeur, mais pas num2 ?
    num1 et num2 restent tels quels, opérateur mis à jour.

Quand num1, l'opérateur et num2 ont une valeur ?
    L'opérateur déjà présent est lu, l'opération appropriée est réalisée, puis le résultat est envoyé dans num1 ainsi que dans le VRAI résultat, puis num2 et son array sont vidés et l'opérateur mis à jour.

Quand EXE vient d'être pressé ?
    Le résultat original est envoyé en num1, num2 et son array sont vidés, et l'opérateur est mis à jour.

    RESTE A CORRIGER L'AFFICHAGE DES NOMBRES NEGATIFS!