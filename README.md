# Desafio 333 Outubro

This repository corresponds to the Desafio 333 de Outubro implementation where a URL Preview API should be developed. [Link for more informations](https://github.com/codigofalado/desafio333/tree/master/2019-Outubro-Url-Preview).

---

## Requirements

For development, you will only need Node.js and a node global package (yarn) installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.3

    $ npm --version
    6.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/igor-claudino/desafio333outubro.git
    $ cd desafio333outubro
    $ yarn install

## Running the project

    $ yarn start

Use a HTTP REST client, like [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/) to perform requests.

The API has only one endpoint at which it only responds to the POST method. This endpoint is in the root url (http://localhost:3333/).

You must send in the body of the POST request a parameter called url.

Enjoy :)
