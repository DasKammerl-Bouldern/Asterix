# Manueller Deploy per FTP (GitHub Actions)

Der Deploy läuft **nur auf Befehl** – nicht bei jedem Push. Du wählst dabei den Branch, von dem gebaut und deployed werden soll.

---

## Checkliste: Was du festlegen musst

### 1. FTP-Daten vom Hoster besorgen

Von deinem Webhoster (z.B. wo daskammerl.at gehostet wird) brauchst du:

- **FTP-Host** (z.B. `ftp.deinedomain.at` oder eine Adresse wie `ssh.strato.de`)
- **FTP-Benutzername**
- **FTP-Passwort**
- **Zielordner** für die Website (meist `public_html/`, `www/` oder `htdocs/` – beim Hoster nachsehen)
- Optional: ob **FTPS** nötig ist und welcher **Port** (oft 21, bei FTPS manchmal 990)

### 2. GitHub Secrets anlegen

1. Öffne dein Repository auf GitHub: **https://github.com/DasKammerl/Asterix**
2. Gehe zu **Settings** (Reiter oben)
3. Links: **Secrets and variables → Actions**
4. Klicke **New repository secret** und lege nacheinander an:

| Name | Wert (von deinem Hoster) |
|------|---------------------------|
| `FTP_SERVER` | z.B. `ftp.deinedomain.at` (nur Host, ohne ftp://) |
| `FTP_USERNAME` | dein FTP-Benutzername |
| `FTP_PASSWORD` | dein FTP-Passwort |
| `FTP_SERVER_DIR` | z.B. `public_html/` (mit Schrägstrich am Ende) |

Falls dein Hoster einen anderen Port oder FTPS verlangt, zusätzlich:

| Name | Wert |
|------|------|
| `FTP_PORT` | z.B. `21` oder `990` |
| `FTP_PROTOCOL` | `ftp` oder `ftps` |

### 3. (Optional) Für `npm run deploy` in der Konsole

Wenn du den Befehl **`npm run deploy`** lokal nutzen willst:

- **GitHub CLI** installieren: https://cli.github.com/
- Einloggen: in einem Terminal `gh auth login` ausführen und den Anweisungen folgen

Ohne das funktioniert der Deploy trotzdem – dann startest du ihn im Browser unter **Actions → Build & Deploy to FTP → Run workflow**.

---

## So startest du einen Deploy

### Option A: Befehl in der Konsole (empfohlen)

Voraussetzung: [GitHub CLI (gh)](https://cli.github.com/) installiert und mit `gh auth login` eingeloggt.

```bash
npm run deploy              # deployt von Branch main
npm run deploy -- develop   # deployt von Branch develop
npm run deploy -- feature/xyz   # deployt von beliebigem Branch
```

Damit wird der GitHub-Actions-Workflow gestartet; der eigentliche Build und Upload laufen auf GitHub.

### Option B: Im Browser (GitHub Actions)

1. Im Repository zu **Actions** gehen.
2. Links **„Build & Deploy to FTP“** auswählen.
3. Rechts auf **„Run workflow“** klicken.
4. Unter **„Branch, von dem deployed werden soll“** den gewünschten Branch eintragen (z.B. `main` oder `develop`).
5. Erneut **„Run workflow“** klicken (grüner Button).

Dann wird nur dieser eine Lauf gestartet: Build von dem gewählten Branch und Upload per FTP.

## Ablauf im Workflow

1. **Checkout:** Der gewählte Branch wird ausgecheckt.
2. **Build:** `npm run generate` erzeugt die statische Website in `.output/public/`.
3. **Upload:** Der Inhalt von `.output/public/` wird per FTP in das konfigurierte Server-Verzeichnis hochgeladen.

## Was du brauchst (GitHub Secrets)

Gehe im Repository zu **Settings → Secrets and variables → Actions** und lege folgende Secrets an:

| Secret | Pflicht? | Beschreibung | Beispiel |
|--------|----------|--------------|----------|
| `FTP_SERVER` | **Ja** | FTP-Host (ohne `ftp://`) | `ftp.deinprovider.de` oder `deinedomain.at` |
| `FTP_USERNAME` | **Ja** | FTP-Benutzername | wie vom Hoster angegeben |
| `FTP_PASSWORD` | **Ja** | FTP-Passwort | wie vom Hoster angegeben |
| `FTP_SERVER_DIR` | Empfohlen | Zielordner auf dem Server (mit `/` am Ende) | `public_html/` oder `www/` oder `htdocs/` |
| `FTP_PORT` | Optional | Port (nur setzen wenn abweichend) | `21` (Standard) oder z.B. `22` |
| `FTP_PROTOCOL` | Optional | `ftp` oder `ftps` | `ftps` wenn dein Hoster FTPS verlangt |

**Hinweis:** Wenn `FTP_SERVER_DIR` nicht gesetzt ist, landet die Seite im Root des FTP-Zugangs. Die meisten Hoster erwarten die Dateien in einem Unterordner wie `public_html/` oder `www/` – dann unbedingt `FTP_SERVER_DIR` setzen.

## Nach dem Einrichten

- Einmal die Secrets eintragen (siehe oben).
- Deploy nur, wenn du unter **Actions → Build & Deploy to FTP → Run workflow** startest und den Branch angibst.
- Logs und Fehler siehst du unter **Actions** → den jeweiligen Lauf anklicken.
