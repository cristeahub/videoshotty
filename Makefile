.PHONY: run
run:
	jpm run -b $$(which firefox)

.PHONY: runosx
runosx:
	jpm run

.PHONY: clean
clean:
	rm *.xpi

.PHONY: build
build:
	jpm xpi
