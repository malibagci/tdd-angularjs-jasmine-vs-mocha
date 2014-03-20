(1) Installieren Sie folgenden LaTeX-Packages zusätzlich:
    * floatflt
    * subfig
    * caption
    * listings
    * biblatex
    * biblatex-chicago
    * etoolbox
    * logreq
    * csquotes
    
(2) Installieren Sie biber (http://biblatex-biber.sourceforge.net/) 
ACHTUNG: Die biber-Version muss zur Version von biblatex passen.
Bei MikTeX sollte die 32-bit Version der Software verwendet werden!

(3) Führen Sie die folgenden 4 Kommandos aus:

pdflatex -aux-directory=aux_files Bachelorthesis
biber aux_files/Bachelorthesis
pdflatex -aux-directory=aux_files Bachelorthesis
pdflatex -aux-directory=aux_files Bachelorthesis

Für Masterarbeiten in englischer Sprache müssen die in den \selectlanguage{}-Aufrufen englisch und ngerman vertauscht werden. 
