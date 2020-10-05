# Encryption Decryption Library Service

## To build the project follow below steps:

* Install NodeJS, if not installed (Require Node version >= 10.0.0)
```
	$ wget -qO- https://deb.nodesource.com/setup_10.x | bash -
	$ sudo apt-get install -y nodejs
```

* Install npm, if not installed (Require NPM version >= 6.0.0)
```
	$ sudo npm install -g yarn
	$ sudo npm install -g pm2
```

* To build the application
```
	$ yarn
```

* To run the application with customized ENV variable
```
	$ PORT=3000 yarn start
```

* To run the application with default settings
```
	$ yarn start
```

* Start with PM2
```
	$ pm2 start ./index.js --name 'encrpt-decrypt'
```
# encryption-decryption-library
