# Frontend Boilerplate

This is my template for creating web frontends. It incorporates the following components:

* Twitter Bootstrap
* AngularJS (1.x branch)
* Lato font
* SCSS
* CoffeeScript

To prevent you from the NodeJS dependency hell, all the stuff neccessary for developing and building your frontend
is encapsulated using Docker. Therefore I built a Docker image based on Ubuntu 16.04 (xenial) that includes anything
you need.

Because of my laziness, I use PHPs included webserver to serve the files in development although this project has
nothing to do with PHP at all...

## Requirements

* Docker
* make
* php-cli binary

## Setup

Check out the project and run

```
make install
```

This will build the Docker image and set up the project.

## Development

To watch your source file for changes and automatically compile them, run:

```
make watch
```

To run a web server on `http://localhost:8080` to serve your project in development, run:

```
make serve
```

## Build & Deployment

To build all assets for deployment, run:

```
make dist
```

The compiled project is located in `public/`, so just upload that to your server.

## License

Copyright (c) 2016 David Prandzioch
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
