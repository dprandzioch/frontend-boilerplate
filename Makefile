all: clean install-deps dist

clean:
	rm -rf node_modules
	rm -rf vendor
	rm -rf public/fonts

install-deps:
	npm install
	bower install
	cp -R vendor/lato/font public/fonts

watch:
	grunt dev watch

dist:
	grunt dist
	rm public/css/*.map
