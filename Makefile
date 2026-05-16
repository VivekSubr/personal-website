.PHONY: build clean preview deploy

build:
	npm run build

clean:
	cargo clean
	rm -rf frontend/dist

preview:
	vercel

deploy:
	vercel --prod
