all: clean install-deps dist

clean:
	rm -rf node_modules
	rm -rf vendor
	rm -rf public/fonts

raw_install_deps:
	npm install
	bower install --allow-root
	cp -R vendor/lato/font public/fonts

raw_watch:
	grunt dev watch

raw_dist:
	grunt dist
	rm public/css/*.map

install_deps:
	docker run -it --rm -v ${PWD}:/var/www/ -w /var/www davd/frontend-dev make raw_install_deps

watch:
	docker run -it --rm -v ${PWD}:/var/www/ -w /var/www davd/frontend-dev make raw_watch

dist:
	docker run -it --rm -v ${PWD}:/var/www/ -w /var/www davd/frontend-dev make raw_dist

console:
	docker run -it --rm -v ${PWD}:/var/www/ -w /var/www davd/frontend-dev /bin/bash

serve:
	cd public && php -S localhost:8080

build_docker_image:
	cd docker-dev/ && make image

install: build_docker_image clean install_deps
