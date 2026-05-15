.PHONY: build clean

build:
	npm run build

clean:
	cargo clean
	rm -rf frontend/dist
