# Cosball MVP web client

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Environment Setup ##
1. NodeJS and NPM (use LTS version)
   * Windows OS: 
     1. Install Chocolatey (Run as administrator):
     ```
     @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
     ```
     2. Install NVM: 
     ```
     choco install nvm
     ```
     3. Install NodeJS v8 or higher (LTS) using NVM: 
     ```
     nvm install latest
     ```
     4. Switch to NodeJS v8 (LTS) (required step for every new instance of Command Prompt. Windows' version of NVM does not support default aliasing): 
     ```
     nvm use 12.2.0 
     ```
   * Mac OS:
     1. Install Brew: **http://brew.sh/**
     2. Install NVM: **https://github.com/creationix/nvm#install-script**
     3. Install NodeJS using NVM: 
     ```
     nvm install --lts=carbon
     ```
     4. Set default NodeJS version: 
     ```
     nvm alias default lts/carbon && source ~/.bash_profile
     ```
1. Clone this project: **git clone https://github.com/cosball/mvp_web_client.git**
2. Navigate to scan-demo-client folder: `cd scan-demo-client`
3. Setup libraries: `npm install`
4. To start development server: `npm run start`
5. The website hosted at **http://localhost:8080**