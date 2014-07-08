example-nodejs-plugin
=====================

Example project for nodejs-installer-plugin demonstration.

To run just type ```mvn jetty:run-war```. The application will be started at [http://localhost:8080/](http://localhost:8080/). To just fire the javascript tests try ```mvn test```.

Javascript files are automatically tested, linted, concatened and minified.

There are a few bugs left on purpose in the application, for instance, trying to get the factorial of zero will cause an error. I encourage you to write unit tests and fix it, TDD style :).





