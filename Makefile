dev:
	bun run dev

build:
	bun build ./src/index.ts --compile --outfile prices

deploy:
	docker build -t prongbang/prices:latest .
	docker run -p 3001:3001 prongbang/prices:latest